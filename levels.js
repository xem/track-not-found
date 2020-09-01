levels = () => {
  
  // Level 1
  if(state == 1){
    
    //viewport.style.background = "radial-gradient(#abc,#8af)"
    
    draw_boat(-100,-450,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1], // block 0
      [-200,0,0,1], // block 1
      [-100,0,0,1], // block 2
      [0,0,0,1],    // block 3
      [100,0,0,1],  // block 4
      [200,0,0,1],  // block 5
      [300,0,0,1],  // block 6
      [400,0,0,0],  // block 7 (end)
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
  else if(state == 2){
    
    draw_boat(200,60,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1],   // block 0
      [-200,0,0,1],   // block 1
      [-100,100,0,1], // block 2
      [0,0,0,1],      // block 3
      [100,0,0,1],    // block 4
      [202,-200,0,1], // block 5
      [300,0,0,1],    // block 6
      [400,0,0,0],    // block 7 (end)
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
  
  // Level 2 bis
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
  else if(state == 3){
    draw_boat(200,100);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1],           // block 0
      [-284,-165,-165,1,1.4], // block 1
      [-100,0,0,1],           // block 2
      [0,-400,0,1],           // block 3
      [100,0,0,1],            // block 4
      [120,155,155,1,.6],     // block 5
      [300,0,0,1],            // block 6
      [400,0,0],              // block 7 (end)
    ];
    
    // links between track pieces in each view (2D, 3D)
    // [left, right, (virtualx, virtualy, virtualz, virtualscale)]
    links = {
      "2d": {
        "front": [
          [null, null],   // block 0
          [null, null],   // block 1
          [null, 3],      // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [null, null],   // block 5
          [null, 7],      // block 6
          [6, null],      // block 7
        ],
      },
      
      "3d": {
        "midup": [
          [null, 1],    // block 0
          [0, 2,   -200, 0, 0, 1],  // block 1
          [1, null],    // block 2
          [null, null], // block 3
          [null, 5, 60,155,155,.6],    // block 4
          [4, 6, 120,155,155,.6],       // block 5
          [5, 7, 180,155,155,.6],       // block 6
          [6, null, 240,155,155,.6],    // block 7
        ],
      },
      
      /*"default": [
        [null, 1],    // block 0: nothing on the left, 1 on the right
        [0, null],    // block 1: 0 on the left, nothing on the right
        [null, null], // block 2: nothing on the left, nothing on the right
        [null, 4],    // block 3: nothing on the left, 4 on the right
        [3, null],    // block 4: 3 on the left, nothing on the right
        [null, null], // block 5: nothing on the left, nothing on the right
        [null, 7],    // block 6: nothing on the left, 7 on the right
        [6, null],    // block 7: 6 on the left, nothing on the right
      ],*/
    }
  }
  
  // Level 4
  else if(state == 4){
    draw_boat(-200,-400,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1],     // block 0
      [-200,0,0,1],     // block 1
      [-100,0,150,1],   // block 2
      [0,0,0,1],        // block 3
      [100,0,0,1],      // block 4
      [200,-200,0,1],   // block 5 // 4bis: [200,0,-150, 1]
      [300,0,0,1],      // block 6
      [400,0,0,0],      // block 7
    ];
    
    // links between track pieces in each view (2D, 3D, angles)
    // [left, right, (virtualx, virtualy, virtualz, virtualscale)]
    links = {
      
      "default": [
        [null, 1],    // block 0
        [0, null],    // block 1
        [null, null], // block 2
        [null, 4],    // block 3
        [3, null],    // block 4
        [null, null], // block 5
        [null, 7],    // block 6
        [6, null],    // block 7 (end)
      ],

      "2d": {
        "up": [
          [null, 1, -300,0,150,1],  // block 0
          [0, 2, -200,0,150,1],     // block 1
          [1, 3],      // block 2
          [2, 4, 0,0,150,1],        // block 3
          [3, null, 100,0,150,1],       // block 4
          [null, null],    // block 5
          [null, 7],      // block 6
          [6, null],   // block 7
        ],
        
        "middle": [
          [null, 1],      // block 0
          [0, null],      // block 1
          [null, 3],      // block 2
          [2, 4],         // block 3
          [3, 5],         // block 4
          [4, 6,200,0,0], // block 5
          [5, 7],         // block 6
          [6, null],      // block 7
        ]
      },
      
    }
    
  }
  
  // Level 5
  else if(state == 5){
    draw_boat(250,-400,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-298,0,0,1.05],      // block 0
      [-202,-300,0,1.05],   // block 1
      [-100,-300,0,0],      // block 2
      [0,-300,0,0],         // block 3
      [100,-300,0,1],       // block 4
      [133,-70,-130,1,.65], // block 5
      [117,-151,157,0,1.1], // block 6
      [411,-34,0,0,.92],    // block 7 (end)
      [217,118,151,1,.9],   // block 8
      [307,118,151,0,.9],   // block 9
    ];
    
    // links between track pieces in each view (2D, 3D, angles)
    // [left, right, (virtualx, virtualy, virtualz, virtualscale)]
    links = {
      
      "default": [
        [null, null],   // block 0
        [null, 2],      // block 1
        [1, 3],         // block 2
        [2, 4],         // block 3
        [3, null],      // block 4
        [null, null],   // block 5
        [null, null],   // block 6
        [null, null],   // block 7
        [null, 9],      // block 8
        [8, null],      // block 9
      ],

      "2d": {
        "middle": [
          [null, 1],      // block 0
          [0, 2],         // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [null, null],   // block 5
          [null, 8],      // block 6
          [null, null],   // block 7
          [6, 9],         // block 8
          [8, null],      // block 9
        ],
        
        "midup": [
          [null, null],   // block 0
          [null, 2],      // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [9, null, 397,118,151,.9],      // block 7
          [null, 9],      // block 8
          [8, 7],         // block 9
        ]
      },
      
      "3d": {
        "middown": [
          [null, null],   // block 0
          [null, 2],      // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, 5],         // block 4
          [4, null,200,-300,0,1],      // block 5
          [null, 8],      // block 6
          [null, null],   // block 7
          [null, 9],      // block 8
          [8, null],      // block 9
        ],
        
        "down": [
          [null, null],   // block 0
          [null, 2],      // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [6,null,117+110,-151,157,1.1],      // block 5
          [null, 5],      // block 6
          [null, null],   // block 7
          [null, 9],      // block 8
          [8, null],      // block 9
        ]
      },
    }
  }
  
  // Level 6
  else if(state == 6){
    
    draw_boat(200,60,-235);
    //camheight = "middown";
    campos = "leftfront";
    draw_track(0,0,0,1);
    setTimeout(()=>{
      C.camera({rz: camrz = -45});
      camera();
    },200);
    
    // Define each track piece (x, y, z, pillar, scale)
    
    // 6 bis:
    /*track = [
      [-300,0,0,1],   // block 0
      [-200,0,0,1],   // block 1
      [0,0,-10000,0,1], // block 2
      [0,0,0,1],      // block 3
      [100,0,0,1],    // block 4
      [52,-148,209,1,1], // block 5
      [300,0,0,1],    // block 6
      [400,0,0,0],    // block 7 (end)
    ];*/
    
    // 6 ter
    /*track = [
      [-300,0,0,1],         // block 0
      [0,-375,532,1,1.9],   // block 1
      [-100,0,0,1],         // block 2
      [252,-252,356,1,0.4], // block 3
      [100,0,0,1],          // block 4
      [300,0,0,1],          // block 5
      [400,0,0,0],          // block 6 (end)
    ];*/
    
    // 6 quarto
    /*track = [
      [-300,0,0,1],         // block 0
      [0,-375,532,1,1.9],   // block 1
      [-100,0,0,1],         // block 2
      [100,0,0,1],          // block 3
      [300,0,0,1],          // block 4
      [400,0,0,0],          // block 5 (end)
    ];
    */
    
    track = [
      [-300,0,0,1],         // block 0
      [0,375,532,1,1.9],   // block 1
      [-100,0,0,1],         // block 2
      [100,0,0,1],          // block 3
      [300,0,0,1],          // block 4
      [400,0,0,0],          // block 5 (end)
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "3d": {
        /*"rightbackmidup": [
            [null, null,252-120,-252,356,0.4],   // block 0
            [null, null,252-80,-252,356,0.4],   // block 1
            [null, 3,252-40,-252,356,0.4],   // block 2
            [2, 4],                           // block 3
            [3, null,252+40,-252,356,0.4],   // block 4
            [null, 6],                          // block 5
            [5, null,252+120,-252,356,0.4],      // block 6
        ],*/
        
        //"leftfrontmiddown": [ // 6 quarto (change all the 375 to -375)
        "leftbackmiddown": [
          [null, 1,0-190,375,532,1.9],     // block 0
          [0, 2],                       // block 1
          [1, null,0+190,375,532,1.9],     // block 2
          [null, null],                 // block 3
          [null, 5],   // block 4
          [4, null],      // block 5
        ],
        
        //"rightfrontmiddown": [ // 6 quarto (change all the 375 to -375)
        "rightbackmiddown": [
          [null, null],   // block 0
          [3, 4],   // block 1
          [null, null],   // block 2
          [null, 1,0-190,375,532,1.9],   // block 3
          [1, 5,0+190,375,532,1.9],   // block 4
          [4, null,0+190*2,375,532,1.9],   // block 5
        ],
      },
      
      "default": [
        [null, null],   // block 0
        [null, null],   // block 1
        [null, null],   // block 2
        [null, null],   // block 3
        [null, 5],   // block 4
        [4, null],      // block 5
      ],
    }
    
  }
  
  if(state >= 1){
    if(links["2d"] && links["2d"]["up"] && !links["2d"]["down"]){
      links["2d"]["down"] = links["2d"]["up"]
    }
    draw_tracks();
  }
}