// Init each state
init = e => {

  // Reset
  scene.innerHTML = "";
  default_perspective = "500px";
  C.sprite_count = 0;
  C.sprites= [];
  C.plane_count = 0;
  C.cube_count = 0;
  go = 0;
  chunk = 0;
  prev_chunk = 0;
  hud.style.opacity = 0;
  win = 0;
  lose = 0;
  X = 0;
  Y = 0;
  Z = 0;
  vX = 0;
  black.style.opacity = 0;
  viewport.style.perspective = default_perspective;
  cam = "3d"; // or 2d
  campos = "front"; // or left or back or right
  camheight = "midup"; // or up or middle or middown or down
  hud.style.transition = "1s";
  camrz = 0;
  group_count = 0;
  //boat = null;
  
  // GUI
  if(state){
    level.innerHTML = state + ". " + 
    ([
      ,
      "Move the train with X and C, or use the buttons below", // 1
      "Change perspective with E and R, or use the buttons below", // 2
      "There's always a way to complete the track",
      "Rotate the camera with the Arrow keys (or WASD/ZQSD)", // 4
    ][state] || "");
  }
  buttons.innerHTML = "";
  if(state >= 1){
  
    if(self.h1){
      h1.remove();
      h2.remove();
      h3.remove();
    }
    
    buttons.innerHTML += "<button id=b_back class=on>&larr; <span class=reverse>🚂</span></button> <button id=b_front class=on><span class=reverse>🚂</span> &rarr;</button>";
  }
  
  if(state >= 2){
    
    buttons.innerHTML += "<button id=b_2d><span>👁️</span> 2D</button> <button id=b_3d class=on><span>👁️</span> 3D</button>";
    
  }
  
  if(state >= 4){
    
    buttons.innerHTML += "<div class=campos><button id=b_up class=on>&uarr;</button><br><button id=b_left class=on>&larr;</button> <span>📷</span> <button id=b_right class=on>&rarr;</button><br><button id=b_down class=on>&darr;</button></div>";
    
  }
  
  // GUI events
  if(state >= 1){
    b_back.onmousedown = b_back.ontouchstart = e => {
      k[88] = 1;
    }
  
    b_back.onmouseup = b_back.ontouchend = e => {
      k[88] = 0;
    }
  
    b_front.onmousedown = b_front.ontouchstart = e => {
      k[67] = 1;
    }
  
    b_front.onmouseup = b_front.ontouchend = e => {
      k[67] = 0;
    }
  }
  
  if(state >= 2){
    b_2d.onclick = e => {
      k[69] = 1;
    }
  
    b_3d.onclick = e => {
      k[82] = 1;
    }
  }
  
  if(state >= 4){
    b_up.onclick = e => {
      u = 1;
      //console.log(1);
    }
  
    b_left.onclick = e => {
      l = 1;
    }
    
    b_right.onclick = e => {
      r = 1;
    }
  
    b_down.onclick = e => {
      d = 1;
    }
    
  }
  
  // Title screen
  if(state == 0){
    
    h3.style.display = "block";
    rz = 90;
    C.camera({z:-250,rz:rz+=.5,rx:50+Math.cos(rz/27.5)*10});
    
    // Gradient
    C.plane({w:600,h:500,z:-10,b:"radial-gradient(#aea, #6b6 50%)"});
    
    // Train
    draw_train(0,0,0);
  
    // Track
    C.cube({w:500,h:6,d:8,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:-500,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:-1000,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:500,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:1000,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,y:-11,b:"#888",b2:"#666",b3:"#aaa"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:-500,y:-11,b:"#888",b2:"#666",b3:"#aaa"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:-1000,y:-11,b:"#888",b2:"#666",b3:"#aaa"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:500,y:-11,b:"#888",b2:"#666",b3:"#aaa"},1,0,0,0,1,1);
    C.cube({w:500,h:6,d:8,x:1000,y:-11,b:"#888",b2:"#666",b3:"#aaa"},1,0,0,0,1,1);
    
    for(var i=-700;i<700;i+=20){
      C.plane({w:10,h:20,z:5,x:i,b:"#ca0",css:"wood"})
    }
    
    C.sprite({w:60,h:60,x:0,y:-50,z:0,html:"🌳",css:"tree tree1",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:-50,z:0,html:"🌳",css:"tree shadow tree1 shadow1",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:-100,z:0,html:"🌴",css:"tree tree2",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:-100,z:0,html:"🌴",css:"tree shadow tree2 shadow2",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:120,z:0,html:"🌳",css:"tree tree3",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:120,z:0,html:"🌳",css:"tree shadow tree3 shadow3",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:-80,z:0,html:"🌲",css:"tree tree4",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:-80,z:0,html:"🌲",css:"tree shadow tree4 shadow4",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:150,z:0,html:"🌲",css:"tree tree5",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:150,z:0,html:"🌲",css:"tree shadow tree5 shadow5",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:-40,z:0,html:"🌳",css:"tree tree6",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:-40,z:0,html:"🌳",css:"tree shadow tree6 shadow6",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:0,y:80,z:0,html:"🌲",css:"tree tree7",o:"bottom"});
    C.plane({w:60,h:60,x:0,y:80,z:0,html:"🌲",css:"tree shadow tree7 shadow7",o:"bottom",rz:-25});
      
  }
  
  // All levels
  if(state >= 1){
    X = -400;
    vX = 0;
    C.camera({x:-400,y:0,z:-350,rx:30,rz:0});
    draw_hills();
    draw_train(X,0,0);
    
    
    C.move({n:"train",x:-800});
    setTimeout(()=>{
      scene.style.transition = "4s";
      train.style.transition = "2s";
    },16);
    setTimeout(()=>{
      C.camera({x:0,y:0,z:50,rx:45,ry:0,rz:0});
      C.move({n:"train",x:-400});
    },33);
    setTimeout(()=>{
      hud.style.opacity = 1;
    },2000);
    setTimeout(()=>{
      train.style.transition = "none";
      scene.style.transition = "1s";
      go = 1;
    },4000);
    
    viewport.className="blue";

  }
  
  levels();
}