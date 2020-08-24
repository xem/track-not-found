camera = () => {
  if(cam == "2d"){ viewport.style.perspective = "5000px"; }
  else if(cam == "3d"){ viewport.style.perspective = "600px"; };
  
  if(campos == "front"){
    C.camera({z:0});
    h2left.style.opacity = h3left.style.opacity = 1;
    h2right.style.opacity = h3right.style.opacity = 1;
  }
  else if(campos == "left"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "leftfront"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "leftback"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2left.style.opacity = h3left.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "back"){
    C.camera({z: 0});
    h2left.style.opacity = h3left.style.opacity = 1;
    h2right.style.opacity = h3right.style.opacity = 1;
  }
  else if(campos == "right"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "rightfront"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }
  else if(campos == "rightback"){
    C.camera({z: camheight == "middle" ? 0 : 400});
    h2right.style.opacity = h3right.style.opacity = (camheight == "middown" || camheight == "down") ? 0 : 1;
  }

  if(camheight == "up"){
    C.camera({rx: cam == "3d" ? 5 : 0});
    boat.style.opacity = 1;
  }
  else if(camheight == "midup"){
    C.camera({rx: 45});
    boat.style.opacity = 1;
  }
  else if(camheight == "middle"){
    C.camera({rx: cam == "3d" ? 85 : 90 });
    boat.style.opacity = 1;
  }
  else if(camheight == "middown"){
    C.camera({rx: 135});
    boat.style.opacity = 0;
  }
  else if(camheight == "down"){
    C.camera({rx: cam == "3d" ? 175 : 180});
    boat.style.opacity = 0;
  }
}