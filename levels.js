levels = () => {
  
  // Level 1
  if(state == 1){
    
    draw_boat(-100,-450,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [0,0,0,1],  // block 0
      [1,0,0,1],  // block 1
      [2,0,0,1],  // block 2
      [3,0,0,1],  // block 3
      [4,0,0,1],  // block 4
      [5,0,0,1],  // block 5
      [6,0,0,1],  // block 6
      [7,0,0,0],  // block 7
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {

      "default": [
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
  
  // Level 2
  if(state == 2){
    draw_boat(200,60,-235);
    
    /*for(i=-600;i<700;i+=100){
      if(i != -100 && i != 200){
        draw_track(i,0,0,i>-400&&i<400);
      }
    }
    draw_track(-100,100,0,1);
    draw_track(200,-100,0,1);*/
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [0,0,0,0],  // block 0
      [1,0,0,1],  // block 1
      [2,1,0,1],  // block 2
      [3,0,0,1],  // block 3
      [4,0,0,1],  // block 4
      [5,-1,0,1], // block 5
      [6,0,0,1],  // block 6
      [7,0,0,0],  // block 7
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
    }
    
  }
  
  // Level 3
  /*if(state == 3){
    
    draw_boat(0,0,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [0,0,0,1],  // block 0
      [1.05,2.6,0,1],  // block 1
      [2,-2,0,1],  // block 2
      [3,-6,0,1],  // block 3
      [4,-2,0,1],  // block 4
      [4.95,2.6,0,1], // block 5
      [6,0,0,1],  // block 6
      [7,0,0,0],  // block 7
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "2d": {
        "front": [
          [null, 1],  // block 0: nothing on the left, 1 on the right
          [0, 2,1,0,0],     // block 1: 0 on the left, 2 on the right
          [1, 3,2,0,0],     // block 2: 1 on the left, 3 on the right
          [2, 4,3,0,0],     // block 3: 2 on the left, 4 on the right
          [3, 5,4,0,0],     // block 4: 3 on the left, 5 on the right
          [4, 6,5,0,0],     // block 5: 4 on the left, 6 on the right
          [5, 7],     // block 6: 5 on the left, 7 on the right
          [6, null],  // block 7: 6 on the left, nothing on the right
        ],
      },
      
      "default": [
        [null, null],   // block 0
        [null, null],   // block 1
        [null, null],   // block 2
        [null, null],   // block 3
        [null, null],   // block 4
        [null, null],   // block 5
        [null, null],   // block 6
      ]
    }
  }*/
  
  // Level 3
  if(state == 3){
    draw_boat(200,100,-235);
    
    /*for(i=-600;i<700;i+=100){
      if(i != -200 && i != 0 && i != 200){
        draw_track(i,0,0,i>-400&&i<400);
      }
    }
    draw_track(-291,-173,-145,1,1.4); // 1
    draw_track(0,-400,0,1); // 3
    draw_track(74,241,202,1,.35); // 5*/
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1],  // block 0
      [-284,-165,-166,1,1.4],  // block 1
      [-100,0,-1.5,1],  // block 2
      [0,-400,0,1],  // block 3
      [100,0,0,1],  // block 4
      [72,249,249,1,.35], // block 5
      [300,0,0,1],  // block 6
      [400,0,0],  // block 7*/
    ];
    
  }
  
  // Level 4
  if(state == 4){
    draw_boat(-200,-400,-235);
    
    /*for(i=-600;i<700;i+=100){
      if(i != -100 && i != 200){
        draw_track(i,0,0,i>-400&&i<400);
      }
    }
    draw_track(-100,0,-150,1);
    draw_track(200,-200,0,1);
    */
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [0,0,0,1],    // block 0
      [1,0,0,1],    // block 1
      [2,0,-1.5,1], // block 2
      [3,0,0,1],    // block 3
      [4,0,0,1],    // block 4
      [5,-2,0,1],   // block 5
      [6,0,0,1],    // block 6
      [7,0,0,0],    // block 7
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
          [null, 1],        // block 0: nothing on the left, 1 on the right
          [0, 2],           // block 1: 0 on the left, 2 on the right
          [1, 3, 2, 0, 0],  // block 2: 1 on the left, 3 on the right
                            // but when the train is on this piece, make it appear as if it was on a chunk at [2, 0, 0]
          [2, 4],           // block 3: 2 on the left, 4 on the right
          [3, null],        // block 4: 3 on the left, nothing on the right
          [null, null],     // block 5: nothing on the left, nothing on the right
          [null, 7],        // block 6: nothing on the left, 7 on the right
          [6, null],        // block 7: 6 on the left, nothing on the right
        ],
        
        "down": [
          [null, 1],        // block 0: nothing on the left, 1 on the right
          [0, 2],           // block 1: 0 on the left, 2 on the right
          [1, 3, 2, 0, 0],  // block 2: 1 on the left, 3 on the right
                            // but when the train is on this piece, make it appear as if it was on a chunk at [2, 0, 0]
          [2, 4],           // block 3: 2 on the left, 4 on the right
          [3, null],        // block 4: 3 on the left, nothing on the right
          [null, null],     // block 5: nothing on the left, nothing on the right
          [null, 7],        // block 6: nothing on the left, 7 on the right
          [6, null],        // block 7: 6 on the left, nothing on the right
        ],
        
        "frontmiddle" : [
          [null, 1],    // block 0: nothing on the left, 1 on the right
          [0, null],    // block 1: 0 on the left, nothing on the right
          [null, null], // block 2: nothing on the left, nothing on the right
          [null, 4],    // block 3: nothing on the left, 4 on the right
          [3, 5],       // block 4: 3 on the left, 5 on the right
          [4, 6],       // block 5: 4 on the left, 6 on the right
          [5, 7],       // block 6: 5 on the left, 7 on the right
          [6, null],    // block 7: 6 on the left, nothing on the rightx
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
  
  if(state >= 1){
    draw_tracks();
  }
}