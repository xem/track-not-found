// Handle clicks in each state
all.onmousedown = all.ontouchstart = e => {
  
  switch(state){
  
    // Title
    case 0:
      black.style.opacity = 1;
      
      
      // Music
      // =====
      song = camera.toString().replace(/\s/g,'').substr(0,500);
      Z = 0;
      D = [...song].map(a=>((a.charCodeAt() + Z++)%10)+10);
      
      with(new AudioContext)
      with(G=createGain())
      for(i in D)
      with(createOscillator())
      if(D[i])
      connect(G),
      G.connect(destination),
      start(i*.2),
      frequency.setValueAtTime(440*1.06**(13-D[i]),i*.2),type='wave',
      gain.setValueAtTime(.5,i*.2),
      gain.setTargetAtTime(.001,i*.2+.15,.05),
      stop(i*.2+.19);
      
      
      setTimeout(()=>{
        state = 1;
        init();
      }, 800);
    break;
  }

}

// Handle key presses
k = []; // 88: X, 67: C, 69: E, 82: R
u = l = d = r = 0; // arrow keys / wasd / zqsd
onkeydown = onkeyup = e => {
  k[e.which] = e.type[5]; // update k
  
  if(e.which == 38 || e.which == 90 || e.which == 87){ u = e.type[5] } // u
  if(e.which == 37 || e.which == 81 || e.which == 65){ l = e.type[5] } // l
  if(e.which == 40 || e.which == 83){ d = e.type[5] } // d
  if(e.which == 39 || e.which == 68){ r = e.type[5] } // r
  
  //console.log(e.which);
}


onresize = () => {
  if(window.innerWidth / window.innerHeight > 900 / 480){
    all.style.transform = "scale(" + (window.innerHeight / 480) + ")"
  }
  else {
    all.style.transform = "scale(" + (window.innerWidth / 900) + ")"
  }
}

