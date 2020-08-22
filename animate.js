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
      
      prev_chunk = chunk;
      
      chunk = ~~((X+350) / 100);
      
      // Between two chunks
      if(prev_chunk != chunk){

        console.log("going from " + prev_chunk + " (" + track[prev_chunk] + ") to " + ["left","right"][dir] + " (" + track[chunk] + "), go to: " + links[cam][prev_chunk][dir] + " (" + track[links[cam][prev_chunk][dir]] + ")");
        
        // Move to new chunk
        if(links[cam][prev_chunk][dir]){
          Y = track[links[cam][prev_chunk][dir]][1];
          Z = track[links[cam][prev_chunk][dir]][2];
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
        scene.style.transition = "1s";
        viewport.style.perspective = "5000px";
        C.camera({rx:90});
        k[69] = 0;
      }
      
      // 3D
      if(k[82] && cam != "3d"){
        b_3d.className = "on";
        b_2d.className = "";
        cam = "3d";
        viewport.style.perspective = "600px";
        scene.style.transition = "1s";
        C.camera({rx:55});
        k[82] = 0;
      }
    }
      
  }, 16);
}