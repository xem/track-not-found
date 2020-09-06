camera = () => {
  if(cam == "2d"){ viewport.style.perspective = "6000px"; }
  else if(cam == "3d"){ viewport.style.perspective = default_perspective; };
  
  if(campos == "front"){
    C.camera({z: cam == "3d" ? 50 : 300});
    //h2left.style.opacity = h3left.style.opacity = 1;
    //h2right.style.opacity = h3right.style.opacity = 1;
  }
  else if(campos == "left"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "leftfront"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "leftback"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "back"){
    C.camera({z: cam == "3d" ? 90 : 300});
    //h2left.style.opacity = h3left.style.opacity = 1;
    //h2right.style.opacity = h3right.style.opacity = 1;
  }
  else if(campos == "right"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "rightfront"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "rightback"){
    C.camera({z: camheight == "middle" ? 50 : cam == "3d" ? 350 : 3500});
    //h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }

  if(camheight == "up"){
    C.camera({rx: cam == "3d" ? 5 : 0});
    if(window.boat)boat.style.opacity = 0;
  }
  else if(camheight == "midup"){
    C.camera({rx: 45});
    if(window.boat)boat.style.opacity = 1;
    setTimeout(() => {
      h2left.style.opacity =
      h3left.style.opacity =
      h2right.style.opacity =
      h3right.style.opacity = 
      1;
    }, 900);
    setTimeout(()=>{
      river.style.opacity = 1;
      if(window.river2) river2.style.opacity = 1;
    },500);
  }
  else if(camheight == "middle"){
    C.camera({rx: cam == "3d" || campos == "left" || campos == "right" ? 85 : 90 });
    if(window.boat)boat.style.opacity = 1;
    setTimeout(() => {
      h2left.style.opacity =
      h3left.style.opacity =
      h2right.style.opacity =
      h3right.style.opacity = 
      1;
    }, 900);
    setTimeout(()=>{
      river.style.opacity = 1;
      if(window.river2) river2.style.opacity = 1;
    },500);
  }
  else if(camheight == "middown"){
    C.camera({rx: 135});
    
    if(window.boat) boat.style.opacity = 0;
    
    river.style.opacity = 0;
    if(window.river2) river2.style.opacity = 0;
    
    if(cam == "3d"){
      if(campos == "left" || campos == "leftfront" || campos == "leftback"){
        h2left.style.opacity = 0;
        h3left.style.opacity = 0;
      }
      else {
        setTimeout(()=>{
          h2left.style.opacity = 1;
          h3left.style.opacity = 1;
        },900);
      }
    
      if(campos == "right" || campos == "rightfront" || campos == "rightback"){
        h2right.style.opacity = 0;
        h3right.style.opacity = 0;
      }
      else {
        setTimeout(()=>{
          h2right.style.opacity = 1;
          h3right.style.opacity = 1;
        },900);      
      }
    }
    
    if(cam == "2d"){
      h2left.style.opacity =
      h3left.style.opacity =
      h2right.style.opacity =
      h3right.style.opacity = 
      0;
    }
    
  }
  else if(camheight == "down"){
    C.camera({rx: cam == "3d" ? 175 : 180});
    
    if(cam == "3d"){
      h2left.style.opacity =
      h3left.style.opacity =
      h2right.style.opacity =
      h3right.style.opacity = 
      1;
    }
    else {
      h2left.style.opacity =
      h3left.style.opacity =
      h2right.style.opacity =
      h3right.style.opacity = 
      0;
    }
  }
}