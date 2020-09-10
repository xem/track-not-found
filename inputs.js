// Handle clicks in each state
h3.onmousedown = h3.ontouchstart = e => {
  
  switch(state){
  
    // Title
    case 0:
      black.style.opacity = 1;
      h4.remove();
      
      music();
      
      setTimeout(()=>{
        state = 1;
        init();
      }, 1500);
    break;
  }

}

h4.onclick = () => {
  fullscreen = 1-fullscreen;
  if(fullscreen){
    document.body.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }
  onresize();
  //h4.innerHTML = ["Go fullscreen","Quit fullscreen"][fullscreen];
}

// Handle key presses
k = []; // 88: X, 67: C, 69: E, 82: R
u = l = d = r = 0; // arrow keys / wasd / zqsd
skiptimer = 0;

onkeydown = onkeyup = e => {
  k[e.which] = e.type[5]; // update k
  
  if(e.which == 38 || e.which == 90 || e.which == 87){ u = e.type[5] } // u
  if(e.which == 37 || e.which == 81 || e.which == 65){ l = e.type[5] } // l
  if(e.which == 40 || e.which == 83){ d = e.type[5] } // d
  if(e.which == 39 || e.which == 68){ r = e.type[5] } // r
  if(e.which == 27) { if(state && state < 10 && !skiptimer) { win = 1; skiptimer = 1; setTimeout(()=>{skiptimer = 0;},state==7?10000:3000); state++; init(); }}
  
  //console.log(e.which);
}


onresize = () => {
  if(fullscreen){
    
    if(window.innerWidth / window.innerHeight > 900 / 480){
      all.style.transform = "scale(" + (window.innerHeight / 480) + ")"
    }
    else {
      all.style.transform = "scale(" + (window.innerWidth / 900) + ")"
    }
  }
  else {
    all.style.transform = "";
  }
}

