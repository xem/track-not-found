// Init each state
init = e => {

  scene.innerHTML = "";
  C.sprite_count = 0;
  C.sprites= [];
  C.plane_count = 0;
  C.cube_count = 0;
  go = 0;
  if(state){
    level.innerHTML = state + ". " + 
    ([
      ,
      "move the train with X and C, or use the buttons below", // 1
      "change perspective with E and R, or use the buttons below" // 2
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
  
  switch(state){
  
    case 0: // Title
    
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
      
      for(i=-700;i<700;i+=30){
        C.plane({w:10,h:20,z:5,x:i,b:"#a70",b2:"#960",b3:"#b80",css:"wood"})
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
      
    break;
    
    // Level 1
    case 1:
      
      X = -350;
      vX = 0;
      C.camera({x:-350,z:-350,rx:35,rz:0});
      draw_hills();
      draw_train(X,0,0);
      draw_boat(50,-300,-220);
      
      C.move({n:"train",x:-450});
      setTimeout(()=>{
        scene.style.transition = train.style.transition = "5s";
      },16);
      setTimeout(()=>{
        C.camera({x:0,y:0,z:0,rx:45,ry:0,rz:0});
        C.move({n:"train",x:-350});
      },33);
      setTimeout(()=>{
        go = 1;
        scene.style.transition = train.style.transition = "none";
      },5000);
      
      viewport.className="blue";
      for(i=-600;i<700;i+=100){
        draw_track(i,0,0,1);
      }
      
      
    break;
    
    case 2:
    
      X = -350;
      vX = 0;
      C.camera({z:0,rx:45,ry:0,rz:0});
      draw_hills();
      draw_train(X,0,0);
      draw_boat(200,60,-220);
      viewport.className="blue";
      for(i=-600;i<700;i+=100){
        if(i != -100 && i != 200){
          draw_track(i,0,0,i>-400&&i<400);
        }
      }
      draw_track(-100,100,0,1);
      draw_track(200,-100,0,1);
      setTimeout(()=>{
        go = 1;
        scene.style.transition = train.style.transition = "none";
      },1000);
      
    break;
    
  }
}