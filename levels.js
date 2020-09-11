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
    if(location.host == "js13kgames.com" || location.host == "xem.github.io" || location.host == "localhost"){
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
    }
    else {
      track = [];
    }
    
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
  /*if(state == 2){
    
    draw_boat(0,0,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [0,0,0,1],  // block 0
      [105,260,0,1],  // block 1
      [200,-200,0,1],  // block 2
      [300,-600,0,1],  // block 3
      [400,-200,0,1],  // block 4
      [495,260,0,1], // block 5
      [600,0,0,1],  // block 6
      [700,0,0,0],  // block 7
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
      [-73,13,150,1,.73],   // block 2 // 4ter: [-100,0,150,1]
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

      /* // 4 ter
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
      */
      
      "3d": {
        "up": [
          [null, 1, -73-73*2,13,150,.72],  // block 0
          [0, 2, -73-73,13,150,.72],     // block 1
          [1, 3],      // block 2
          [2, 4, -73+73,13,150,.72],        // block 3
          [3, null, -73+73*2,13,150,.72],       // block 4
          [null, null],    // block 5
          [null, 7],      // block 6
          [6, null],   // block 7
        ],
        
      },
      
      "2d": {
        
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
      [117,-151,157,0,1.12], // block 6
      [506,-54,0,0,1.47],    // block 7 (end)
      [217,118,151,1,.9],   // block 8
      //[307,118,151,0,.9],   // block 9 // 5 bis
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
        [null, null],      // block 8
        //[8, null],      // block 9
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
          [6, null],         // block 8
          //[8, null],      // block 9
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
          [null, null],      // block 8
          //[8, 7],         // block 9
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
          [null, null],      // block 8
          //[8, null],      // block 9
        ],
        
        "down": [
          [null, null],   // block 0
          [null, 2],      // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [6,null,117+110,-151,157,1.12],      // block 5
          [null, 5],      // block 6
          [null, null],   // block 7
          [null, null],      // block 8
          //[8, null],      // block 9
        ],
        
        "midup": [
          [null, null],   // block 0
          [null, 2],      // block 1
          [1, 3],         // block 2
          [2, 4],         // block 3
          [3, null],      // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [8, null,217+90,118,151,.9],   // block 7
          [null, 7],      // block 8
          //[8, null],      // block 9
        ],
      },
    }
  }
  
  // Level 6
  if(state == 6){
    
    draw_boat(-100,-450,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1], // block 0
      [-273,140,198,1,.68], // block 1
      [-100,0,0,1], // block 2
      [173,172,-22,1,1.45],    // block 3
      [100,0,0,1],  // block 4
      [22,186,264,1],  // block 5
      [300,0,0,1],  // block 6
      [400,0,0,0],  // block 7 (end)
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {

      "default": [
          [null, null],     // block 0
          [null, null],     // block 1
          [null, null],     // block 2
          [null, null],     // block 3
          [null, null],     // block 4
          [null, null],     // block 5
          [null, 7],        // block 6
          [6, null],        // block 7
      ],
      
      "3d": {
        "leftfrontmidup": [
          [null, 1, -273-68,140,198,.68],     // block 0
          [0, 2],     // block 1
          [1, null, -273+68,140,198,.68],     // block 2
          [null, null],     // block 3
          [null, null],     // block 4
          [null, null],     // block 5
          [null, 7],        // block 6
          [6, null],        // block 7
        ],
        
        "leftbackmiddle": [
          [null, null],     // block 0
          [null, null],     // block 1
          [null, 3],     // block 2
          [2, 4, 0,0,0,1],     // block 3
          [3, null],     // block 4
          [null, null],     // block 5
          [null, 7],        // block 6
          [6, null],        // block 7
        ],
      },
      
      "2d": {
        "rightbackmiddown": [
          [null, null],     // block 0
          [null, null],     // block 1
          [null, null],     // block 2
          [null, null],     // block 3
          [null, 5, 22-100,186,264],     // block 4
          [4, 6],     // block 5
          [5, 7, 22+100,186,264],        // block 6
          [6, null, 22+200,186,264],        // block 7
        ],
      }
      
    }
    
  }
  
  // Level 7
  else if(state == 7){
    
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
  
  // Level 9
  else if(state == 9){
    
    draw_boat(100,-100,-235);
    
    // Define each track piece (x, y, z, pillar, scale)
    
    track = [
      [-300,0,0,0],             // block 0
      [-200,0,0,1],             // block 1
      [111,0,-252,0,1.4],             // block 2
      [-0,0,0,0],             // block 3
      [-392,0,422,0,.3],             // block 4
      [200,0,0,1],             // block 5
      [-290,468,225,1,.65],             // block 6
      [402,123,0,0,.5],             // block 7 (end)
      [-256,-468,261,1,.7], // 8
      [-290+65*2,468,225,0,.65], // 9
      [-256+70*2,-468,261,0,.7], // 10
      [-293+65*4,468,225,0,.65], // 11
      [-256+70*4,-468,261,0,.7], // 12
      [-300+65*6,468,225,0,.65], // 13
      [-256+70*6,-468,261,1,.7], // 14
      [243,-34,153,1,.32], // 15
      [123,115,439,0,.5], // 16
      [123-50,115,439,0,.5], // 17
      [24,120,210,0,.52], // 18
      [24+52,120,210,1,.52], // 19
      [25+52*2,120,210,0,.52], // 20
      
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "2d": {
        "frontmiddle": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, null],   // block 4
          [null, null],   // block 5
          [null, 8],   // block 6
          [null, null],   // block 7
          [6, 9, -290+65,468,225,.65],   // block 8
          [8, 10],   // block 9
          [9, 11, -291+65*3,468,225,.65],   // block 10
          [10, 12],   // block 11
          [11, 13, -296+65*5,468,225,.65],   // block 12
          [12, 14],   // block 13
          [13, null, -302+65*7,468,225,.65],   // block 14
          [null, null],   // block 15
          [17, null],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ],
        
        "up": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, null],   // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [null, null],   // block 7
          [null, null],   // block 8
          [null, null],   // block 0
          [null, null],   // block 10
          [null, null],   // block 11
          [null, null],   // block 12
          [null, null],   // block 13
          [null, null],   // block 14
          [null, null],   // block 15
          [17, null],   // block 16
          [18, 16],   // block 17
          [null, 17,123-50*2,115,439,.5],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ],
        
        "leftmidup": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, null],   // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [20, null,25+52*3,120,210,.52],   // block 7
          [null, null],   // block 8
          [null, null],   // block 0
          [null, null],   // block 10
          [null, null],   // block 11
          [null, null],   // block 12
          [null, null],   // block 13
          [null, null],   // block 14
          [null, null],   // block 15
          [17, null],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, 7],   // block 20
        ],
      },
      
      "3d": {
        
        "leftmidup": [
          [null, 1, -392-120,0,422,.3],   // block 0
          [0, 2, -392-30*3,0,422,.3],   // block 1
          [1, 3, -392-30*2,0,422,.3],   // block 2
          [2, 4, -392-30,0,422,.3],   // block 3
          [3, 5],   // block 4
          [4, null, -392+30,0,422,.3],   // block 5
          [null, null],   // block 6
          [null, null],   // block 7
          [null, null],   // block 8
          [null, null],   // block 9
          [null, null],   // block 10
          [null, null],   // block 11
          [null, null],   // block 12
          [null, null],   // block 13
          [null, null],   // block 14
          [null, null],   // block 15
          [17, null],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ],
        
        "leftbackmidup": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, 6],   // block 4
          [null, null],   // block 5
          [4, null, -392+30,0,422,.3],   // block 6
          [null, null],   // block 7
          [null, null],   // block 8
          [null, null],   // block 9
          [null, null],   // block 10
          [null, null],   // block 11
          [null, null],   // block 12
          [null, null],   // block 13
          [null, null],   // block 14
          [null, null],   // block 15
          [17, null],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ],
        
        "rightfrontmiddle": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, null],   // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [null, null],   // block 7
          [null, null],   // block 8
          [null, null],   // block 9
          [null, null],   // block 10
          [null, null],   // block 11
          [null, 15],   // block 12
          [null, null],   // block 13
          [15, null],   // block 14
          [12, 14,-256+70*5,-468,261,.7],   // block 15
          [17, null],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ],
        
        "rightbackmiddown": [
          [null, 1],   // block 0
          [0, null],   // block 1
          [null, null],   // block 2
          [null, null],   // block 3
          [null, null],   // block 4
          [null, null],   // block 5
          [null, null],   // block 6
          [null, null],   // block 7
          [null, null],   // block 8
          [null, null],   // block 9
          [null, null],   // block 10
          [null, null],   // block 11
          [null, null],   // block 12
          [null, null],   // block 13
          [null, null],   // block 14
          [16, null, 123+50,115,439,.5],   // block 15
          [17, 15],   // block 16
          [null, 16],   // block 17
          [null, 19],   // block 18
          [18, 20],   // block 19
          [19, null],   // block 20
        ]
      },
      
      "default": [
        [null, 1],   // block 0
        [0, null],   // block 1
        [null, null],   // block 2
        [null, null],   // block 3
        [null, null],   // block 4
        [null, null],   // block 5
        [null, null],   // block 6
        [null, null],   // block 7
        [null, null],   // block 8
        [null, null],   // block 0
        [null, null],   // block 10
        [null, null],   // block 11
        [null, null],   // block 12
        [null, null],   // block 13
        [null, null],   // block 14
        [null, null],   // block 15
        [17, null],   // block 16
        [null, 16],   // block 17
        [null, 19],   // block 18
        [18, 20],   // block 19
        [19, null],   // block 20
      ],
    }
  }
  
  
  // Level 8
  else if(state == 8){
    
    draw_boat(-230,80,-235);
    
     track = [
      [-300,0,0,0],             // block 0
      [-200,0,0,1],             // block 1
      [0,0,-10000,0,1.4],       // block 2 (moving)
      [200,0,0,1],              // block 3
      [300,0,0,0],              // block 4
      [400,0,0,0],              // block 5 (end)
      
      //[120,0,0,0,1]
    ];
    
    draw_track(-100,0,0,0);
    draw_dynamite(-100,0,0,1);
    draw_track(0,0,0,0);
    draw_dynamite(0,0,0,2);
    draw_track(100,0,0,0);
    draw_dynamite(100,0,0,3);
    
    group0.style.transition =
    group1.style.transition =
    group2.style.transition = "transform 1s";
    
    setTimeout(()=>{
      d_1.innerHTML = "<img src=1f4a5.svg width=60 height=60>";
      if(navigator.vibrate) navigator.vibrate(2500);
      viewport.classList.add("rumble2");
      boom();
      group6.style.transition = "opacty 1s";
      group6.style.opacity = "0";
    },4500);
    
    setTimeout(()=>{
      viewport.classList.remove("rumble2");
    },4900);
    
    setTimeout(()=>{
      d_2.innerHTML = "<img src=1f4a5.svg width=60 height=60>";
      d_1.innerHTML = "";
      C.move({n:"group0",z:-350});
      viewport.classList.add("rumble2");
      boom();
    },5000);
    
    setTimeout(()=>{
      viewport.classList.remove("rumble2");
    },5400);
    
    setTimeout(()=>{
      d_3.innerHTML = "<img src=1f4a5.svg width=60 height=60>";
      d_2.innerHTML = "";
      C.move({n:"group1",z:-350});
      viewport.classList.add("rumble2");
      boom();
      go = 1;
    },5500);
    
    setTimeout(()=>{
      d_3.innerHTML = "";
      C.move({n:"group2",z:-350});
      if(navigator.vibrate) navigator.vibrate(0);
      viewport.classList.remove("rumble2");
    },6000);
    
    setTimeout(()=>{
      level.innerHTML = "OK, sending you some help, catch it!";
      level.style.transform = "translateY(18px)rotate(2deg)";
      group0.style.display =
      group1.style.display =
      group2.style.display = "none";
      C.move({n:"group6",y:-600,z:-235});
      group6.style.opacity = 1;
      group6go = 1;
      track[2][2] = -235;
    },8000);
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "default": [
        [null,1], // 0
        [0,null], // 1
        [null,null], // 2 (moving)
        [null,4], // 3
        [3,5], // 4
        [4,null], // 5 (end)
      ],
      
      "3d": {
        "leftfrontmidup": [
          [null,1], // 0
          [0,null], // 1
          [null,null], // 2 (moving)
          [null,4], // 3
          [3,5], // 4
          [4,null], // 5 (end)
        ],
        
        "rightbackmidup": [
          [null,1], // 0
          [0,null], // 1
          [null,null], // 2 (moving)
          [null,4], // 3
          [3,5], // 4
          [4,null], // 5 (end)
        ],
      }
        
    };
    
  }
  
  // Level 10
  else if(state == 10){
    
    draw_boat(0,150,-235);
    //viewport.style.background = "#000";
    //scene.style.opacity = .5;
    
    track = [
      [-300,0,0,1],         // block 0
      //[0,375,532,1,1.9],   // block 1
      //[-100,0,0,1],         // block 2
      //[100,0,0,1],          // block 3
      //[300,0,0,1],          // block 4
      //[400,0,0,0],          // block 5 (end)
    ];
    
    for(var i = 0; i < 6; i++){
      track.push([Math.random()*700 - 350, Math.random()*700 - 600, Math.random() * 460 - 230, Math.random()|1, Math.random() * 1.5+.2]);
    }
    
    track.push([400,0,0,0]); // 7 end
    
    for(var i = 0; i < 10; i++){
      track.push([Math.random()*700 - 350, Math.random()*700 - 600, Math.random() * 460 - 230, Math.random()|1, Math.random() * 1.5+.2]);
    }
    
    // links between track pieces in each view (2D, 3D)
    links = {
    }
    
  }
  
  // Level 11
  if(state == 11){
    
    // Define each track piece (x, y, z, pillar, scale)
    track = [
      [-300,0,0,1],             // block 0
      [-200,-300,0,1],          // block 1
      [-100,-300,0,0],          // block 2
      [0,-300,0,0],             // block 3
      [100,-300,0,1],           // block 4
      [-78,23,268,1,0.56],      // block 5
      [-242,243,104,1,.77],     // block 6
      [390,-60,0,0,1.2],        // block 7 (end)
      [-242+77,243,104,0,.77],  // block 8
      [-242+77*2,243,104,1,.77],// block 9
      [147,74,327,1,.7],        // block 10
      [82,78,-200,1,.75],       // block 11
      [82-75,78,-200,0,.75],    // block 12
      [82-75*2,78,-200,1,.75],  // block 13
      [582,204,440,0,2],        // block 14
      [82-75*4,78,-200,1,.75],  // block 15
      [582+200,204,440,0,2],    // block 16
      [-34,-1,-250,0,1.4],      // block 17
      [-8,-400,115,1,.8],       // block 18
    ];
    
    // links between track pieces in each view (2D, 3D)
    links = {
      "default": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
      ],
      
      "2d": {
        "frontmiddle": [
          [null,1], // 0
          [0,2,-200,0,0], // 1
          [1,3,-100,0,0], // 2
          [2,4,0,0,0], // 3
          [3,null,100,0,0], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,18], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [9,null,-242+77*2+77,243,104,.77], // 18
        ],
        
        "backmiddle": [
          [null,1], // 0
          [0,2,-200,0,0], // 1
          [1,3,-100,0,0], // 2
          [2,4,0,0,0], // 3
          [3,null,100,0,0], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "frontup": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "backup": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "up": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [11,null], // 10
          [12,10,147-70,74,327,.7], // 11
          [13,11,147-70*2,74,327,.7], // 12
          [null,12,147-70*3,74,327,.7], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "rightbackmidup": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8, 147-70*3,74,327,.7], // 6
          [null,null], // 7 end
          [6,9, 147-70*2,74,327,.7], // 8
          [8,10, 147-70,74,327,.7], // 9
          [9,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
      },
      
      "3d": {
        "leftmidup": [
          [null,17], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [0,null,-200,0,0], // 17
          [null,null], // 18
        ],
        
        "leftfrontmidup": [
          [null,null], // 0
          [null,2,-78-56*4,23,268,0.56], // 1
          [1,3,-78-56*3,23,268,0.56], // 2
          [2,4,-78-56*2,23,268,0.56], // 3
          [3,5,-78-56,23,268,0.56], // 4
          [4,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "rightbackmidup": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,6], // 5
          [5,8,-78+56,23,268,0.56], // 6
          [null,null], // 7 end
          [6,9,-78+56*2,23,268,0.56], // 8
          [8,null,-78+56*3,23,268,0.56], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "leftbackmiddown": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [16,null,582+200+200,204,440,2], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null], // 11
          [13,11], // 12
          [null,12], // 13
          [null,16], // 14
          [null,null], // 15
          [14,7], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
        "leftmiddown": [
          [null,null], // 0
          [null,2], // 1
          [1,3], // 2
          [2,4], // 3
          [3,null], // 4
          [null,null], // 5
          [null,8], // 6
          [null,null], // 7 end
          [6,9], // 8
          [8,null], // 9
          [null,null], // 10
          [12,null, 582+200*3,204,440,2], // 11
          [13,11, 582+200*2,204,440,2], // 12
          [14,12, 582+200,204,440,2], // 13
          [15,13], // 14
          [null,14, 582-200,204,440,2], // 15
          [14,null], // 16
          [null,null], // 17
          [null,null], // 18
        ],
        
      }
        
    };
    
    
  }
  
  if(state >= 1){
    if(links["2d"] && links["2d"]["up"] && !links["2d"]["down"]){
      links["2d"]["down"] = links["2d"]["up"]
    }
    draw_tracks();
  }
}

