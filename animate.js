// Animation for each state
animate = () => {
  
    setInterval(()=>{

    // Title
    if(state == 0){
      C.camera({z:-250,rz:rz+=.5,rx:50+Math.cos(rz/27.5)*10});
    }
    
    // Move train
    if(state >= 1){

      if(vX){
        vX *= .95;
      }
      
      // Go right
      if(go && k[67] && vX < 7){
        vX += .2;
        dir = 1;
      }
      
      // Go left
      else if(go && k[88] && vX > -5){
        vX -= .2;
        dir = 0;
      }
      
      // Move
      if(go && !win && !lose){
        X += vX;
        C.move({n:"train",x:X,y:Y*100,z:Z*100});
      }
      
      // Win
      if(X > 350){
        X = 0;
        win = 1;
        train.style.transition = scene.style.transition = "1s";
        C.camera({x:450,z:-500,rx:30,rz:0});
        C.move({n:"train",x:750});
        hud.style.opacity = 0;
        go = 0;
        setTimeout(()=>{
          black.style.opacity = 1;
        }, 800);
          //document.querySelectorAll('.wood.fixed').forEach(e=>e.className="wood quick");
        setTimeout(()=>{
          scene.style.transition = "none";
          if(state < 4) state++;
          init();
        }, 1100);
      }
      
      // Compute chunk on the X axis
      prev_chunk = chunk;
      chunk = ~~((X+350) / 100);
      
      // Between two chunks
      if(prev_chunk != chunk){
        
        console.log(links[cam], campos);
        var link = links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight] || links["default"];

        console.log("going from chunk " + prev_chunk + " (" + track[prev_chunk] + ") to the " + ["left","right"][dir] + " side with the camera in " + cam + " on " + campos + " - " + camheight + ", target: chunk " + link[prev_chunk][dir] + " (" + track[link[prev_chunk][dir]] + ")", link);
        
        // Move to new chunk
        if(link[prev_chunk][dir] !== null){
          Y = track[link[prev_chunk][dir]][1];
          Z = track[link[prev_chunk][dir]][2];
        }
        
        // Fall
        else {
          
          lose = 1;
          train.style.transition = ".5s";
          scene.style.transition = "1s";
          
          // Left
          if(dir == 0){
            C.move({n:"train",x:X-=30,z:Z-=30,ry:-90});
          }
          
          // Right
          else {
            C.move({n:"train",x:X+=30,z:Z-=30,ry:90});
          }
          
          black.style.opacity = 1;
          
          setTimeout(()=>{
            C.move({n:"train",z:Z-=70});
          }, 200);
          
          setTimeout(()=>{
            scene.style.transition = "none";
            
            init();
          }, 1000);
        }
      }
      
      document.title = prev_chunk + " " + chunk + " ";
    }
    
    // 2D/3D
    if(state >= 2){

      // 2D
      if(k[69] && cam != "2d"){
        //console.log(1);
        b_2d.className = "on";
        b_3d.className = "";
        cam = "2d";
        camera();
        k[69] = 0;
      }
      
      // 3D
      if(k[82] && cam != "3d"){
        b_3d.className = "on";
        b_2d.className = "";
        cam = "3d";
        camera()
        k[82] = 0;
      }
    }
    
    // Camera positions
    if(state >= 3){
      if(go && u){
        if(camheight == "midup"){ camheight = "up"; }
        else if(camheight == "middle"){ camheight = "midup"; }
        else if(camheight == "middown"){ camheight = "middle"; }
        else if(camheight == "down"){ camheight = "middown"; }
        camera();
        u = 0;
      }
      
      if(go && d){
        if(camheight == "up"){ camheight = "midup"; }
        else if(camheight == "midup"){ camheight = "middle"; }
        else if(camheight == "middle"){ camheight = "middown"; }
        else if(camheight == "middown"){ camheight = "down"; }
        camera()
        d = 0;
      }
      
      if(go && l){
        if(campos == "right"){ campos = "rightfront"; }
        else if(campos == "rightfront"){ campos = "front"; }
        else if(campos == "front"){ campos = "leftfront"; }
        else if(campos == "leftfront"){ campos = "left"; }
        else if(campos == "left"){ campos = "leftback"; }
        else if(campos == "leftback"){ campos = "back"; }
        else if(campos == "back"){ campos = "rightback"; }
        else if(campos == "rightback"){ campos = "right"; }
        C.camera({rz: camrz -= 45});
        camera();
        l = 0;
      }
      
      if(go && r){
        if(campos == "right"){ campos = "rightback"; }
        else if(campos == "rightback"){ campos = "back"; }
        else if(campos == "back"){ campos = "leftback"; }
        else if(campos == "leftback"){ campos = "left"; }
        else if(campos == "left"){ campos = "leftfront"; }
        else if(campos == "leftfront"){ campos = "front"; }
        else if(campos == "front"){ campos = "rightfront"; }
        else if(campos == "rightfront"){ campos = "right"; }
        C.camera({rz: camrz += 45});
        camera();
        r = 0;
      }
    }
      
  }, 16);
}