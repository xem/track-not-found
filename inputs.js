// Handle clicks in each state
onclick = ontouchstart = e => {
  
  switch(state){
  
    // Title
    case 0:
      black.style.opacity = 1;
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