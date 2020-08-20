// Handle clicks in each state
onclick = e => {
  
  switch(state){
  
    // Title
    case 0:
      state = 1;
      init();
    break;
  }

}

// Handle key presses
k = []; // 88: X, 67: C, 69: E, 82: R
onkeydown = onkeyup = e => {
  k[e.which]=e.type[5];
  console.log(e.which);
}