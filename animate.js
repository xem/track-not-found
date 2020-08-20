// Animation for each state
animate = () => {
  
    setInterval(()=>{

    // Title
    if(state == 0){
      C.camera({z:-250,rz:rz+=.5,rx:50+Math.cos(rz/27.5)*10});
    }

    if(state >= 1){

      if(vX){
        vX *= .95;
      }
      
      // Go right
      if(go && k[67] && vX < 7){
        vX += .2;
      }
      
      // Go left
      if(go && k[88] && vX > -5){
        vX -= .2;
      }
      
      // Move
      if(go){
        X += vX;
        C.move({n:"train",x:X});
      }
      
      // Win
      if(X > 350){
        state ++;
        init();
      }
      
    }
    
    if(state >= 2){
        
      //console.log(k[88], k[67], cam);
      
      // 2D
      if(k[69] && cam != "2d"){
      console.log(1);
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