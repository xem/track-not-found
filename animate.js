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
        if(X < -400 && Y == 0){
          X = -400;
          vX = 0;
        }
        C.move({n:"train",x:X,y:Y-10*scale,z:Z});
      }
      
      // Win
      if((chunk == 7 || (track.length < 8 && chunk == track.length - 1)) && posonchunk > .75){
        X = 0;
        win = 1;
        train.style.transition = hud.style.transition = "1s";
        viewport.style.transition = "none";
        C.move({n:"train",x:800});
        hud.style.opacity = 0;
        go = 0;
        setTimeout(()=>{
          black.style.opacity = 1;
        }, 800);
        setTimeout(()=>{
          scene.style.transition = "none";
          viewport.style.perspective = default_perspective;
          state++;
          //if(state == 7) state = 0;
          init();
        }, 1500);
      }
      
      // Compute position and scale of train on current chunk
      
      link = getlink();
      
      if(link){
        chunkmiddle = link[chunk].length > 2 ? link[chunk][2] : track[chunk][0];
        scale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
        chunkleft = chunkmiddle - 50 * scale;
        chunkright = chunkmiddle + 50 * scale;
        if(Math.abs(vX)>.1){
          posonchunk = (X - chunkleft) / (chunkright - chunkleft);
        }
        
        // Level 6: break the middle chunk when passing 25% of chunk 1
        if(state == 6 && chunk == 1 && posonchunk > .5 && !easteregg6){
          group0.style.transition = "3s";
          viewport.classList.add("rumble");
          level.innerHTML = "Ooops, sorry, you'll need to find another way!";
          level.style.transform = "translateY(27px)rotate(3deg)";
          if(navigator.vibrate) navigator.vibrate(500);
          C.move({n:"group0",rx:90,y:-600,z:-600});
          easteregg6 = 1;
          oktolose = 0;
          setTimeout(()=>{
            group0.remove();
            if(navigator.vibrate) navigator.vibrate(0);
            oktolose = 1;
          },3000);
        }
        
        
        // Move to new chunk on the right (or virtual position)
        if(posonchunk > 1){
          if(link[chunk][dir] !== null){
            posonchunk -= 1;
            chunk = link[chunk][dir];
          }
          else {
            lose = 1;
          }
        }
        
        // Move to new chunk on the left (or virtual position)
        else if(posonchunk < 0 && chunk != 0){
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
          }, oktolose ? 1000 : 3000);
        }
      }
    }
    
    // 2D/3D
    if(state >= 2){

      // 2D
      if(k[69] && cam != "2d" && go && !win && !lose){
        b_2d.className = "on";
        b_3d.className = "";
        vX = 0;
        cam = "2d";
        if(state < 7 && (camheight == "midup" || camheight == "middown")){ camheight = "middle" }
        
        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1500);
        
        k[69] = 0;
        
      }
      
      // 3D
      if(k[82] && cam != "3d" && go && !win && !lose){
        b_3d.className = "on";
        b_2d.className = "";
        vX = 0;
        cam = "3d";
        if(state < 7){ 
          camheight = "midup"
        }
        
        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1500);
        
        k[82] = 0;
      }
    }
    
    // Camera positions
    if(state >= 4){
      if(go && u && !win && !lose && camheight != "up"){
        vX = 0;
        if(camheight == "midup"){ camheight = "up"; }
        else if(camheight == "middle"){ camheight = "midup"; }
        else if(camheight == "middown"){ camheight = "middle"; }
        else if(camheight == "down"){ camheight = "middown"; }
        
        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1000);
        
        u = 0;
      }
      
      if(go && d && !win && !lose && camheight != "down"){
        vX = 0;
        if(camheight == "up"){ camheight = "midup"; }
        else if(camheight == "midup"){ camheight = "middle"; }
        else if(camheight == "middle"){ camheight = "middown"; }
        else if(camheight == "middown"){ camheight = "down"; }
        
        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1000);
        
        d = 0;
      }
    }
    
    if(state >= 6){
      
      if(go && l && !win && !lose){
        vX = 0;
        if(campos == "right"){ campos = "rightfront"; }
        else if(campos == "rightfront"){ campos = "front"; }
        else if(campos == "front"){ campos = "leftfront"; }
        else if(campos == "leftfront"){ campos = "left"; }
        else if(campos == "left"){ campos = "leftback"; }
        else if(campos == "leftback"){ campos = "back"; }
        else if(campos == "back"){ campos = "rightback"; }
        else if(campos == "rightback"){ campos = "right"; }
        C.camera({rz: camrz -= 45});

        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1000);
        l = 0;
      }
      
      if(go && r && !win && !lose){
        vX = 0;
        if(campos == "right"){ campos = "rightback"; }
        else if(campos == "rightback"){ campos = "back"; }
        else if(campos == "back"){ campos = "leftback"; }
        else if(campos == "leftback"){ campos = "left"; }
        else if(campos == "left"){ campos = "leftfront"; }
        else if(campos == "leftfront"){ campos = "front"; }
        else if(campos == "front"){ campos = "rightfront"; }
        else if(campos == "rightfront"){ campos = "right"; }
        C.camera({rz: camrz += 45});
        
        // Move train to real position/scale immediately
        traintoreal();
        
        // Move camera
        camera();
        
        // Move train to new position/scale immediately (real or virtual)
        setTimeout(traintonew, 1000);
        r = 0;
      }
    }
    
    console.log(chunk, ~~(posonchunk*100));
  }, 16);
}


getlink = () => {
  return link = links[cam] ? (links[cam][campos] || links[cam][camheight] || links[cam][campos+camheight] || links["default"]) : links["default"];
}

// Move train to real position/scale immediately
traintoreal = () => {
  go = 0;
  link = getlink();
  chunkmiddle = track[chunk][0];
  scale = track[chunk][4] || 1;
  chunkleft = chunkmiddle - 50 * scale;
  chunkright = chunkmiddle + 50 * scale;
  X = chunkleft + (chunkright - chunkleft) * posonchunk;    
  Y = track[chunk][1];
  Z = track[chunk][2];
  C.move({n:"train",x:X,y:Y-10*scale,z:Z,sx:scale,sy:scale,sz:scale});
}

traintonew = () => {
  link = getlink();
  
  chunkmiddle = link[chunk].length > 2 ? link[chunk][2] : track[chunk][0];
  scale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
  chunkleft = chunkmiddle - 50 * scale;
  chunkright = chunkmiddle + 50 * scale;
  
  X = chunkleft + (chunkright - chunkleft) * posonchunk;    
  Y = link[chunk].length >= 5 ? link[chunk][3] : track[chunk][1];
  Z = link[chunk].length >= 5 ? link[chunk][4] : track[chunk][2];
  C.move({n:"train",x:X,y:Y-10*scale,z:Z,sx:scale,sy:scale,sz:scale});
  
  go = 1;

}