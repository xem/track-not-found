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
      if(go && k[67] && vX < 7 * scale){
        vX += .2;
        dir = 1;
      }
      
      // Go left
      else if(go && k[88] && vX > -5 * scale){
        vX -= .2;
        dir = 0;
      }
      
      // Move
      if(go && !win && !lose){
        X += vX;
        if(X < -400 && Y == 0){
          X = -400;
          vX = 0;
        }
        C.move({n:"train",x:X,y:Y-11,z:Z});
      }
      
      // Win
      if(chunk == 7 && posonchunk > .5){
        X = 0;
        win = 1;
        train.style.transition = hud.style.transition = "1s";
        viewport.style.transition = "none";
        //viewport.style.perspective = default_perspective;
        //C.camera({x:450,z:-350,rx:30,rz:0});
        C.move({n:"train",x:800});
        hud.style.opacity = 0;
        go = 0;
        setTimeout(()=>{
          black.style.opacity = 1;
        }, 800);
        setTimeout(()=>{
          scene.style.transition = "none";
          viewport.style.perspective = default_perspective;
          if(state < 10) state++;
          init();
        }, 1500);
      }
      
      // Compute position and scale of train on current chunk
      
      link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight] || links["default"]) : links["default"];
      
      if(link){
        chunkmiddle = link[chunk].length > 2 ? link[chunk][2] : track[chunk][0];
        chunkscale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
        chunkleft = chunkmiddle - 50 * chunkscale;
        chunkright = chunkmiddle + 50 * chunkscale;
        if(Math.abs(vX)>.1){
          posonchunk = (X - chunkleft) / (chunkright - chunkleft);
        }
        
        // Move to new chunk on the right (or virtual position)
        if(dir == 1 && posonchunk > 1){
          console.log("right", chunk, posonchunk);
          if(link[chunk][dir] !== null){
            posonchunk -= 1;
            chunk = link[chunk][dir];
            console.log(chunk, posonchunk);
          }
          else {
            lose = 1;
          }
        }
        
        // Move to new chunk on the left (or virtual position)
        else if(dir == 0 && posonchunk < 0 && chunk != 0){
          if(link[chunk][dir] !== null){
            posonchunk += 1;
            chunk = link[chunk][dir];
          }
          else {
            lose = 1;
          }
        }
          
        // Fall
        if(lose && go) {
          
          train.style.transition = ".5s";
          scene.style.transition = "1s";
          hud.style.transition = "none";
          hud.style.opacity = "0";
          go = 0;
          
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
        
        //setTimeout(()=>{
        trainscale.style.transition = "1s";
        C.move({n:"trainscale",sx:scale,sy:scale,sz:scale});
        //},100);
        
        setTimeout(()=>{
          reupdatetrain();
        },850);
        
        k[69] = 0;
        console.log(scale);
        
      }
      
      // 3D
      if(k[82] && cam != "3d" && go && !win && !lose){
        b_3d.className = "on";
        b_2d.className = "";
        cam = "3d";
        if(state < 4){ camheight = "midup" }
        updatetrain();
        camera();
        
        setTimeout(()=>{
          trainscale.style.transition = "none";
          C.move({n:"trainscale",sx:scale,sy:scale,sz:scale});
          reupdatetrain();
        },1000);
        
        k[82] = 0;
        //console.log(scale);
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
        setTimeout(()=>{
          trainscale.style.transition = "none";
          C.move({n:"trainscale",sx:scale,sy:scale,sz:scale});
          reupdatetrain();
        },1000);
        
        u = 0;
      }
      
      if(go && d && !win && !lose){
        if(camheight == "up"){ camheight = "midup"; }
        else if(camheight == "midup"){ camheight = "middle"; }
        else if(camheight == "middle"){ camheight = "middown"; }
        else if(camheight == "middown"){ camheight = "down"; }
        updatetrain();
        camera();
        setTimeout(()=>{
          trainscale.style.transition = "none";
          C.move({n:"trainscale",sx:scale,sy:scale,sz:scale});
          reupdatetrain();
        },1000);
        d = 0;
      }
    }
    
    if(state >= 6){
      
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
        //setTimeout(reupdatetrain,850);
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
        //setTimeout(reupdatetrain,850);
        r = 0;
      }
    }
    
    //console.log(~~X, chunk, track[chunk], link[chunk], ~~(posonchunk*100));
    //console.log(chunkleft, chunkright, chunkscale, ~~(100*posonchunk));//, track[chunk], link[chunk]);
    //document.title = ~~X;
    console.log(link[chunk],~~X,~~(posonchunk*100),chunkleft,chunkright);
  }, 16);
}

// Before moving the camera: place the train at its "real" place and scale
updatetrain = () => {
  link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight] || links["default"]) : links["default"];
  //console.log(link[chunk]);
  //console.log("u", ~~X, Y, Z, chunk, track[chunk], link[chunk], ~~(posonchunk*100));
  chunkmiddle = track[chunk][0];
  chunkscale = track[chunk][4] || 1;
  chunkleft = chunkmiddle - 50 * chunkscale;
  chunkright = chunkmiddle + 50 * chunkscale;
  X = chunkleft + (chunkright - chunkleft) * posonchunk;    
  Y = track[chunk][1];
  Z = track[chunk][2];
  //console.log(link);
  scale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
  //console.log(scale);
  //console.log("u", ~~X, Y, Z, chunk, track[chunk], link[chunk], ~~(posonchunk*100));
}

reupdatetrain = () => {
  //console.log("r1", ~~X, Y, Z, chunk, track[chunk], link[chunk], ~~(posonchunk*100));
  link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight] || links["default"]) : links["default"];
  //console.log(link[chunk]);
  //train.style.transition = ".15s";
  chunkmiddle = link[chunk].length > 2 ? link[chunk][2] : track[chunk][0];
  chunkscale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
  chunkleft = chunkmiddle - 50 * chunkscale;
  chunkright = chunkmiddle + 50 * chunkscale;
  
  X = chunkleft + (chunkright - chunkleft) * posonchunk;    
  Y = link[chunk].length >= 5 ? link[chunk][3] : track[chunk][1];
  Z = link[chunk].length >= 5 ? link[chunk][4] : track[chunk][2];
  scale = chunkscale;
  //console.log("r2", ~~X, Y, Z, chunk, track[chunk], link[chunk], ~~(posonchunk*100));
  setTimeout(()=>{
    train.style.transition = "none";
  },150);
}