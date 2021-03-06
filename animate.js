// Animation for each state
animate = () => {
  
    setInterval(()=>{

    // Title
    if(state == 0){
      C.camera({z:-300,rz:rz+=.5,rx:50+Math.cos(rz/27.5)*10});
    }
    
    // Move train
    if(state >= 1){

      if(vX){
        vX *= .95;
      }
      
      // Go right
      if(go && k[67] && vX < (scale < 1 ? 7 * scale : 7)){
        vX += (scale < 1 ? .2 * scale : .2);
        dir = 1;
      }
      
      // Go left
      else if(go && k[88] &&  vX < (scale < 1 ? 5 * scale : 5)){
        vX -= (scale < 1 ? .2 * scale : .2);
        dir = 0;
      }
      
      // Move
      if(go && !win && !lose){
        X += vX;
        if(X < -400 && Y == 0 && scale == 1){
          X = -400;
          vX = 0;
        }
        C.move({n:"train",x:X,y:Y-10*scale,z:Z});
      }
      
      // Win
      if((chunk == 7 || (track.length < 8 && chunk == track.length - 1)) && posonchunk > .75){
        X = 0;
        win = 1;
        if(state == 7 && !easteregg7){
          localStorage['OS13kTrophy,🚂,Track Not Found,Bridge saver'] = "You didn't destroy the bridge in Track not Found";
          //console.log("saved bridge");
        }
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
        
        // Level 6: break the middle chunk when passing 50% of chunk 1
        if(state == 7 && chunk == 1 && posonchunk > .5 && !easteregg7 && campos + camheight == "leftbackmiddown"){
          easteregg7 = 1;
          group0.style.transition = "3s";
          viewport.classList.add("rumble");
          level.innerHTML = "Ooops, sorry, you'll need to find another way!";
          level.style.transform = "translateY(27px)rotate(3deg)";
          if(navigator.vibrate) navigator.vibrate(500);
          C.move({n:"group0",rx:90,y:-600,z:-600});
          oktolose = 0;
          setTimeout(()=>{
            group0.remove();
            if(navigator.vibrate) navigator.vibrate(0);
            oktolose = 1;
            viewport.classList.remove("rumble");
          },3000);
        }
        
        // Level 7: move floating chunk
        if(state == 8 && group6go){
          C.move({n:"group6",y:group6y+=.9});
          if(group6y > 600){
            if(chunk == 2){
              lose = 1;
            }
            else {
              group6y = -600;
            }
          }
        }
        
        // Move to new chunk on the right (or virtual position)
        if(posonchunk > 1){
          //console.log(1);
          if(link[chunk][1] !== null){
            //console.log(2);
            posonchunk -= 1;
            if(posonchunk < 0){
              posonchunk = 0;
              //console.log(3);
            }
            chunk = link[chunk][1];
          }
          else {
            lose = 1;
            //console.log(4);
          }
        }
        
        // Level 3: avoid entering the mountain
        if(state == 3 && chunk == 1 && cam == "2d" && X < -318){
          //console.log(1);
          vX = 0;
          X = -318;
          posonchunk = 0.25;
          localStorage['OS13kTrophy,🚂,Track Not Found,Bonk'] = "You bonked on the mountain in Track not Found";
          //console.log("bonk");
        }
        
        // Move to new chunk on the left (or virtual position)
        else if(posonchunk < 0 && chunk != 0){
          
          //console.log(5);
          
          if(link[chunk][0] !== null){
            //console.log(6);
            posonchunk += 1;
            if(posonchunk < 1){
              posonchunk = 1;
              //console.log(7);
            }
            chunk = link[chunk][0];
          }
          else {
            //console.log(8);
            lose = 1;
          }
        }
          
        // Fall
        if(lose && go) {
          
          wouwou();
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
        if(state < 8 && state != 6 && (camheight == "midup" || camheight == "middown")){ camheight = "middle" }
        
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
        if(state < 8){ 
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
      
      // 4D
      if(state == 10 && k[84] && cam != "4d" && go && !win && !lose){
        b_4d.className = "on";
        b_2d.className = "";
        b_3d.className = "";
        vX = 0;
        cam = "4d";
        black.style.pointerEvents = "all";
        
        // Move camera
        camera();
        
        k[84] = 0;
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
        setTimeout(traintonew, state == 8 ? 300 : 1000);
        
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
        setTimeout(traintonew, state == 8 ? 300 : 1000);
        
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
        setTimeout(traintonew, state == 8 ? 300 : 1000);
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
        setTimeout(traintonew, state == 8 ? 300 : 1000);
        r = 0;
      }
    }
    
    // Level 8 crossings
    if(state == 8 && group6y < -150 && group6y > -200 && !cross1){
      //console.log(group6y);
      links["3d"]["leftfrontmidup"] = [
        [null,1], // 0
        [0,2], // 1
        [1,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ]
    }
    else if(state == 8){
      links["3d"]["leftfrontmidup"] = [
        [null,1], // 0
        [0,null], // 1
        [null,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ]
    }
    
    if(state == 8 && group6y > 150 && group6y < 200){
      //console.log(group6y);
      links["3d"]["rightbackmidup"] = [
        [null,1], // 0
        [0,null], // 1
        [null,3], // 2 (moving)
        [2,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ];
      
      links["3d"]["leftbackmidup"] = [
        [null,1], // 0
        [0,2], // 1
        [1,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ];
    }
    else if(state == 8) {
      links["3d"]["rightbackmidup"] = [
        [null,1], // 0
        [0,null], // 1
        [null,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ];
      
      links["3d"]["leftbackmidup"] = [
        [null,1], // 0
        [0,null], // 1
        [null,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ]
    }
    
    if(state == 8 && !cross1 && chunk == 2){
      Z = -235;
      scale = 1.4;
      X = -35;
      vX = 0;
      chunkscale = 1.4;
      chunkmiddle = 0;
      chunkleft = -70;
      chunkright = 70;
      posonchunk = .25;
      cross1 = 1;
      train.style.transition = "transform .1s";
      go = 0;
      setTimeout(()=>{
        C.move({n:"train",x:X,y:group6y-11,z:Z,sx:1.4,sy:1.4,sz:1.4});
      },33);
      setTimeout(()=>{
        go = 1;
        if(!lose)train.style.transition = "none";
      },250);
    }
    
    if(state == 8 && chunk == 2){
      //console.log(train.style.transform, train.style.transition);
      Y = group6y - 11;
      C.move({n:"train", y:Y});
    }
    
    
    if(state == 8 && !cross2 && chunk == 3){
      Z = 0;
      scale = 1;
      X = 151;
      Y = 0;
      vX = 0;
      chunkscale = 1;
      chunkmiddle = 200;
      chunkleft = 150;
      chunkright = 250;
      posonchunk = .01;
      cross2 = 1;
      train.style.transition = "transform .1s";
      go = 0;
      setTimeout(()=>{
        C.move({n:"train",x:X,y:0,z:Z,sx:1,sy:1,sz:1});
      },33);
      setTimeout(()=>{
        go = 1;
        if(!lose)train.style.transition = "none";
      },250);
    }
    
    // Level 9 skip
    if(state == 9){
      frames9++;
      if(frames9 == 60*60){
        level.innerHTML = "Don't like this level? <button class=mini onclick='win = 1; black.style.opacity = 1; hud.style.opacity = 0; train.style.transition = hud.style.transition = \"1s\"; viewport.style.transition = \"none\"; setTimeout(()=>{ scene.style.transition = \"none\"; viewport.style.perspective = default_perspective; state++; init();}, 1500);'>click here to skip it :/</button>";
        level.style.transform = "translateY(18px)rotate(2deg)";
      }
    }
    
    if(window.river2){
      river2.style.backgroundPosition = "center " + wavesy + "px";
      wavesy += .5;
    }

    //console.log(chunk, ~~(posonchunk*100), ~~X, ~~Y, ~~Z, ~~vX, link[chunk],track[chunk]);
    
    //if(!go)console.log(go, train.style.transition, train.style.transform);

  }, 16);
}


getlink = () => {
  return link = links[cam] ? (links[cam][campos+camheight] || links[cam][campos] || links[cam][camheight] || links["default"]) : links["default"];
}

// Move train to real position/scale immediately
traintoreal = () => {
  if(link && !(state == 8 && group6y &&  (chunk == 2 || chunk == 3))){
    go = 0;
    link = getlink();
    chunkmiddle = track[chunk][0];
    scale = track[chunk][4] || 1;
    chunkleft = chunkmiddle - 50 * scale;
    chunkright = chunkmiddle + 50 * scale;
    X = chunkleft + (chunkright - chunkleft) * posonchunk;    
    Y = (state == 8 && group6y && chunk == 2) ? (group6y + 11) : track[chunk][1];
    Z = track[chunk][2];
    C.move({n:"train",x:X,y:Y-10*scale,z:Z,sx:scale,sy:scale,sz:scale});
  }
}

traintonew = () => {
  if(link && !(state == 8 && group6y && (chunk == 2 || chunk == 3))){
    link = getlink();
    chunkmiddle = link[chunk].length > 2 ? link[chunk][2] : track[chunk][0];
    scale = (link[chunk].length > 2 ? link[chunk][5] : track[chunk][4]) || 1;
    chunkleft = chunkmiddle - 50 * scale;
    chunkright = chunkmiddle + 50 * scale;
    X = chunkleft + (chunkright - chunkleft) * posonchunk;    
    Y = (state == 8 && group6y && chunk == 2) ? (group6y + 11) : link[chunk].length >= 5 ? link[chunk][3] : track[chunk][1];
    Z = link[chunk].length >= 5 ? link[chunk][4] : track[chunk][2];
    C.move({n:"train",x:X,y:Y-10*scale,z:Z,sx:scale,sy:scale,sz:scale});
    go = 1;
  }
}

