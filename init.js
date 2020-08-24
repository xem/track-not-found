// Init each state
init = e => {

  // Reset
  scene.innerHTML = "";
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
  viewport.style.perspective = "600px";
  cam = "3d"; // or 2d
  campos = "front"; // or left or back or right
  camheight = "midup"; // or up or middle or middown or down
  camrz = 0;
  
  // GUI
  if(state){
    level.innerHTML = state + ". " + 
    ([
      ,
      "Move the train with X and C, or use the buttons below", // 1
      "Change perspective with E and R", // 2
      "Rotate the camera with the Arrow keys (or WASD/ZQSD)", // 3
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
  
  if(state >= 3){
    
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
  
  if(state >= 3){
    b_up.onclick = e => {
      u = 1;
      console.log(1);
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
    
    for(i=-700;i<700;i+=20){
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
    X = -350;
    vX = 0;
    C.camera({x:-450,y:0,z:-500,rx:30,rz:0});
    draw_hills();
    draw_train(X,0,0);
    
    
    C.move({n:"train",x:-600});
    setTimeout(()=>{
      scene.style.transition = "4s";
      train.style.transition = "2s";
    },16);
    setTimeout(()=>{
      C.camera({x:0,y:0,z:0,rx:50,ry:0,rz:0});
      C.move({n:"train",x:-350});
    },33);
    setTimeout(()=>{
      //document.querySelectorAll('.wood.quick').forEach(e=>e.className="wood fixed");
      //gg.style.opacity = 0;
    },2000);
    setTimeout(()=>{
      hud.style.opacity = 1;
      train.style.transition = "none";
      scene.style.transition = "1s";
      go = 1;
    },4000);
    
    viewport.className="blue";

  }
  
  // Level 1
  if(state == 1){
    draw_boat(-100,-450,-220);
    for(i=-600;i<700;i+=100){
      draw_track(i,0,0,i>-400&&i<400);
    }
    
    // Define each track piece (x, y, z)
    track = [
      [0,0,0],  // block 0
      [1,0,0],  // block 1
      [2,0,0],  // block 2
      [3,0,0],  // block 3
      [4,0,0],  // block 4
      [5,0,0],  // block 5
      [6,0,0],  // block 6
      [7,0,0],  // block 7
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      /*"2d": {
        "front": [
          [null, 1],  // block 0: nothing on the left, 1 on the right
          [0, 2],     // block 1: 0 on the left, 2 on the right
          [1, 3],     // block 2: 1 on the left, 3 on the right
          [2, 4],     // block 3: 2 on the left, 4 on the right
          [3, 5],     // block 4: 3 on the left, 5 on the right
          [4, 6],     // block 5: 4 on the left, 6 on the right
          [5, 7],     // block 6: 5 on the left, 7 on the right
          [6, null],  // block 7: 6 on the left, nothing on the right
        ]
      },*/
      
      "3d": {
        "front": [
          [null, 1],  // block 0: nothing on the left, 1 on the right
          [0, 2],     // block 1: 0 on the left, 2 on the right
          [1, 3],     // block 2: 1 on the left, 3 on the right
          [2, 4],     // block 3: 2 on the left, 4 on the right
          [3, 5],     // block 4: 3 on the left, 5 on the right
          [4, 6],     // block 5: 4 on the left, 6 on the right
          [5, 7],     // block 6: 5 on the left, 7 on the right
          [6, null],  // block 7: 6 on the left, nothing on the right
        ] 
      }
    }
  }
  
  // Level 2
  if(state == 2){
    draw_boat(200,60,-220);
    
    for(i=-600;i<700;i+=100){
      if(i != -100 && i != 200){
        draw_track(i,0,0,i>-400&&i<400);
      }
    }
    draw_track(-100,100,0,1);
    draw_track(200,-100,0,1);
    
    // Define each track piece (x, y, z)
    track = [
      [0,0,0],  // block 0
      [1,0,0],  // block 1
      [2,1,0],  // block 2
      [3,0,0],  // block 3
      [4,0,0],  // block 4
      [5,-1,0], // block 5
      [6,0,0],  // block 6
      [7,0,0],  // block 7
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "2d": {
        "front": [
          [null, 1],  // block 0: nothing on the left, 1 on the right
          [0, 2],     // block 1: 0 on the left, 2 on the right
          [1, 3],     // block 2: 1 on the left, 3 on the right
          [2, 4],     // block 3: 2 on the left, 4 on the right
          [3, 5],     // block 4: 3 on the left, 5 on the right
          [4, 6],     // block 5: 4 on the left, 6 on the right
          [5, 7],     // block 6: 5 on the left, 7 on the right
          [6, null],  // block 7: 6 on the left, nothing on the right
        ],
      },
      
      "3d": {
        "front": [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, null],    // block 1: 0 on the left, nothing on the right
          [null, null], // block 2: nothing on the left, nothing on the right
          [null, 4],    // block 3: nothing on the left, 4 on the right
          [3, null],    // block 4: 3 on the left, nothing on the right
          [null, null], // block 5: nothing on the left, nothing on the right
          [null, 7],    // block 6: nothing on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the right
        ],
      }
    }
    
  }
  
  // Level 3
  if(state == 3){
    draw_boat(-200,-400,-220);
    
    for(i=-600;i<700;i+=100){
      if(i != -100 && i != 200){
        draw_track(i,0,0,i>-400&&i<400);
      }
    }
    draw_track(-100,0,-150,1);
    draw_track(200,-200,0,1);
    
    // Define each track piece (x, y, z)
    track = [
      [0,0,0],  // block 0
      [1,0,0],  // block 1
      [2,0,-1.5],  // block 2
      [3,0,0],  // block 3
      [4,0,0],  // block 4
      [5,-2,0], // block 5
      [6,0,0],  // block 6
      [7,0,0],  // block 7
    ];
    
    // links between track pieces in each view (2D, 3D, angles)
    links = {
      
      "default": [
        [null, 1],    // block 0: nothing on the left, 1 on the right
        [0, null],    // block 1: 0 on the left, nothing on the right
        [null, null], // block 2: nothing on the left, nothing on the right
        [null, 4],    // block 3: nothing on the left, 4 on the right
        [3, null],    // block 4: 3 on the left, nothing on the right
        [null, null], // block 5: nothing on the left, nothing on the right
        [null, 7],    // block 6: nothing on the left, 7 on the right
        [6, null],    // block 7: 6 on the left, nothing on the right
      ],

      "2d": {
        "up": [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, 2],       // block 1: 0 on the left, 2 on the right
          [1, 3],       // block 2: 1 on the left, 3 on the right
          [2, 4],       // block 3: 2 on the left, 4 on the right
          [3, null],    // block 4: 3 on the left, nothing on the right
          [null, null], // block 5: nothing on the left, nothing on the right
          [null, 7],    // block 6: nothing on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the right
        ],
        
        "down": [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, 2],       // block 1: 0 on the left, 2 on the right
          [1, 3],       // block 2: 1 on the left, 3 on the right
          [2, 4],       // block 3: 2 on the left, 4 on the right
          [3, null],    // block 4: 3 on the left, nothing on the right
          [null, null], // block 5: nothing on the left, nothing on the right
          [null, 7],    // block 6: nothing on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the right
        ],
        
        "frontmiddle" : [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, null],    // block 1: 0 on the left, nothing on the right
          [null, null], // block 2: nothing on the left, nothing on the right
          [null, 4],    // block 3: nothing on the left, 4 on the right
          [3, 5],       // block 4: 3 on the left, 5 on the right
          [4, 6],       // block 5: 4 on the left, 6 on the right
          [5, 7],       // block 6: 5 on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the right
        ],
        
        "backmiddle" : [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, null],    // block 1: 0 on the left, nothing on the right
          [null, null], // block 2: nothing on the left, nothing on the right
          [null, 4],    // block 3: nothing on the left, 4 on the right
          [3, 5],       // block 4: 3 on the left, 5 on the right
          [4, 6],       // block 5: 4 on the left, 6 on the right
          [5, 7],       // block 6: 5 on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the right
        ]
      },
      
      "3d": {}
      
    }
    
  }
  
  
}