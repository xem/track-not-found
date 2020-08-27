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
        if(X < -400){
          X = -400;
          vX = 0;
        }
        C.move({n:"train",x:X,y:Y*100,z:Z*100});
      }
      
      // Win
      if(X > 350){
        X = 0;
        win = 1;
        train.style.transition = scene.style.transition = hud.style.transition = "1s";
        viewport.style.perspective = default_perspective;
        C.camera({x:450,z:-350,rx:30,rz:0});
        C.move({n:"train",x:750});
        hud.style.opacity = 0;
        go = 0;
        setTimeout(()=>{
          black.style.opacity = 1;
        }, 800);
        setTimeout(()=>{
          scene.style.transition = "none";
          if(state < 4) state++;
          init();
        }, 850);
      }
      
      // Compute chunk on the X axis
      prev_chunk = chunk;
      chunk = ~~((X+350) / 100);
      
      // Between two chunks
      if(prev_chunk != chunk){
        
        console.log(links[cam], campos);
        link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight]) : links["default"];

        console.log("going from chunk " + prev_chunk + " (" + track[prev_chunk] + ") to the " + ["left","right"][dir] + " side with the camera in " + cam + " on " + campos + " - " + camheight + ", target: chunk " + link[prev_chunk][dir] + " (" + track[link[prev_chunk][dir]] + ")", link);
        
        // Move to new chunk
        if(link[prev_chunk][dir] !== null){
          
          //console.log("links",link[chunk][4]);
          
          Y = link[chunk].length == 5 ? link[chunk][3] : track[link[prev_chunk][dir]][1];
          Z = link[chunk].length == 5 ? link[chunk][4] : track[link[prev_chunk][dir]][2];
          console.log("Z",Z);
        }
        
        // Fall
        else {
          
          lose = 1;
          train.style.transition = ".5s";
          scene.style.transition = "1s";
          hud.style.transition = "none";
          hud.style.opacity = "0";
          
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
      if(k[69] && cam != "2d" && go && !win && !lose){
        b_2d.className = "on";
        b_3d.className = "";
        cam = "2d";
        if(state < 4){ camheight = "middle" }
        updatetrain();
        camera();
        setTimeout(reupdatetrain,850);
        k[69] = 0;
      }
      
      // 3D
      if(k[82] && cam != "3d" && go && !win && !lose){
        b_3d.className = "on";
        b_2d.className = "";
        cam = "3d";
        if(state < 4){ camheight = "midup" }
        updatetrain();
        camera()
        setTimeout(reupdatetrain,850);
        k[82] = 0;
      }
    }
    
    // Camera positions
    if(state >= 4){
      if(go && u && !win && !lose){
        if(camheight == "midup"){ camheight = "up"; }
        else if(camheight == "middle"){ camheight = "midup"; }
        else if(camheight == "middown"){ camheight = "middle"; }
        else if(camheight == "down"){ camheight = "middown"; }
        updatetrain();
        camera();
        setTimeout(reupdatetrain,850);
        u = 0;
      }
      
      if(go && d && !win && !lose){
        if(camheight == "up"){ camheight = "midup"; }
        else if(camheight == "midup"){ camheight = "middle"; }
        else if(camheight == "middle"){ camheight = "middown"; }
        else if(camheight == "middown"){ camheight = "down"; }
        updatetrain();
        camera()
        setTimeout(reupdatetrain,850);
        d = 0;
      }
      
      if(go && l && !win && !lose){
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
        setTimeout(reupdatetrain,850);
        l = 0;
      }
      
      if(go && r && !win && !lose){
        if(campos == "right"){ campos = "rightback"; }
        else if(campos == "rightback"){ campos = "back"; }
        else if(campos == "back"){ campos = "leftback"; }
        else if(campos == "leftback"){ campos = "left"; }
        else if(campos == "left"){ campos = "leftfront"; }
        else if(campos == "leftfront"){ campos = "front"; }
        else if(campos == "front"){ campos = "rightfront"; }
        else if(campos == "rightfront"){ campos = "right"; }
        updatetrain();
        C.camera({rz: camrz += 45});
        camera();
        setTimeout(reupdatetrain,850);
        r = 0;
      }
    }
      
  }, 16);
}

updatetrain = () => {
  link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight]) : links["default"];
  Y = track[chunk][1];
  Z = track[chunk][2];
}

reupdatetrain = () => {
  link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight]) : links["default"];
  train.style.transition = ".15s";
  Y = link[chunk].length == 5 ? link[chunk][3] : track[chunk][1];
  Z = link[chunk].length == 5 ? link[chunk][4] : track[chunk][2];
  setTimeout(()=>{
    train.style.transition = "none";
  },150);
}