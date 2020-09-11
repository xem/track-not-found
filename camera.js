camera = () => {
  if(cam == "2d"){ viewport.style.perspective = "6000px"; }
  else if(cam == "3d"){ viewport.style.perspective = default_perspective; }
  else if(cam == "4d"){
    campos = "front";
    C.camera({z: cam == "3d" ? 50 : 300});
    camheight = "midup";
    C.camera({rx: 45});
    go = 0;
    viewport.classList.add("rumble");
    train.style.transition = "10s";
    scale = chunkscale = 5;
    C.move({n:"train",x:600,y:900,z:600,rz:90,sx:scale,sy:scale,sz:scale});
    C.sprites = [];
    var els = document.querySelectorAll("#scene > *");
    for(var i in els){
      if(els[i].style && !els[i].classList.contains("river") && els[i].parentNode.id != "train" && !els[i].id.includes("h2") && !els[i].id.includes("h3")){
        els[i].style.transition = "10s";
        els[i].style.transform += "rotateX("+(Math.random()>.5?"-":"")+"45deg)rotateY("+(Math.random()>.5?"-":"")+"45deg)rotateZ("+(Math.random()>.5?"-":"")+"45deg)scaleX(2)scaleY(2)scaleZ(2)";
      }
    }
    viewport.style.transition = "9.5s";
    setTimeout(()=>{
      viewport.style.perspective = "10px";
      level.innerHTML = "AAAAAAAAAAAAAAHHHHHHHH!";
      hud.style.opacity = 0;
    },500);
    
    setTimeout(()=>{
      black.style.opacity = 1;
      black.innerHTML = "<h1>404: dimension not found!</h1><h2>Please download a browser that supports CSS 4D.</h2><h3>(Just kidding, you finished the game. Thanks for playing!<br><br><a target=_blank href='//xem.github.io/articles/js13k20.html'>Read the making-of</a><br><br><a target=_blank href='https://twitter.com/intent/tweet?text=I%20played%20Track%20Not%20Found%2C%20a%2013kb%20game%20by%20%40MaximeEuziere%0ATry%20it%20here%3A%20http%3A%2F%2Fjs13kgames.com%2Fentries%2Ftrack-not-found'>Tweet</a><br><br><button class=mini " + (document.monetization && document.monetization.state === 'started' ? "" : "disabled") + " onclick='state=11;init();black.style.display=\"none\"'>Bonus level for Coil members</button>";
      localStorage['OS13kTrophy,🚂,Track Not Found,100%'] = "You completed the game Track not Found";
      console.log("100%");
    },10000);
  }
  
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