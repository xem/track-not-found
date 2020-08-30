// Train
draw_train = (x,y,z) => {
  C.group({n:"train",x,y,z});
  C.group({g:"train",n:"trainscale",x:0,y:0,z:0,w:0,h:0});
  C.plane({g:"trainscale",w:50,h:50,y:-10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.plane({g:"trainscale",w:50,h:50,y:10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.cube({g:"trainscale",x:-15,z:10,w:18,h:35,d:19,b:"#A11"},1,0,1,1,1,1); // big red
  C.cube({g:"trainscale",x:6,z:15,w:26,h:18,d:19,b:"#444"},1,0,1,1,1,1); // big grey
  C.cube({g:"trainscale",x:12,z:33,w:8,h:10,d:19,b:"#666"},0,0,1,1,1,1); // chemney light
  C.cube({g:"trainscale",x:12,z:42,w:10,h:6,d:19,b:"#444"},1,0,1,1,1,1); // chemney dark
  C.plane({g:"trainscale",b:"#c80",w:2.5,h:19,z:34}); // orange 1
  C.plane({g:"trainscale",b:"#c80",w:2.5,h:19,z:34,x:7.5}); // orange 2
  C.plane({g:"trainscale",b:"#151515",w:15,h:19,z:24,x:20.5,ry:90}); // front black
  C.plane({g:"trainscale",b:"#c33",w:15,h:19,z:10,x:21,ry:45}); // slanted red
}

// boat
draw_boat = (x, y, z) => {
  var i;
  C.sprite({n:"boat",w:50,h:50,x:x,y:y-5,html:["⛵","⛴","🚢","🐳"][i = Math.random()*4|0],z:[-235,-245,-240,-227][i],css:"boat",rx:-90,ry:180,o:"bottom"}); // emoji
}

// Track (100px)
draw_track = (x,y,z,pillar,scale=1, debug="") => {
  C.group({n:"group"+(group_count),w:100,h:22,sx:scale,sy:scale,sz:scale,x,y,z,css:"track"});
  C.cube({g:"group"+(group_count),w:107,h:6,d:8,x:50,y:11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  C.cube({g:"group"+(group_count),w:107,h:6,d:8,x:50,y:-11,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  C.plane({g:"group"+(group_count),w:107,h:20,x:50,css:"woods",html:debug});
  if(pillar){
    C.cube({g:"group"+(group_count),w:5,h:900,d:5,x:50,z:-900.2,b:"#333",b2:"#555",b3:"#333"},0,0,1,1,1,1);
  }
  group_count++;
}

// All tracks
draw_tracks = () => {
  console.log(track);
  draw_track(-700, 0, 0);
  draw_track(-600, 0, 0);
  draw_track(-500, 0, 0);
  draw_track(-400, 0, 0);
  for(var i = 0; i < track.length; i++){
    draw_track(track[i][0], track[i][1], track[i][2], track[i][3], track[i][4], i+"");
  }
  for(i = 0; i < 3; i++){
    draw_track(track[7][0]+100, track[7][1], track[7][2]);
  }
}


// Hills
draw_hills = () => {
  
  var tree, X, Y, Z;
  
  C.plane({w:670,h:1200,x:0,z:-245,css:"river"});
  C.plane({w:670,h:1200,x:0,z:-244,css:"river2"});
  C.plane({w:600,h:1200,x:-700,z:-.5,css:"hill"});
  C.plane({w:600,h:1200,x:700,z:-.5,css:"hill"});
  
  C.plane({w:600,h:1200,x:-880,z:-300.5,ry:75,css:"hill back"});
  C.plane({w:600,h:1200,x:880,z:-300.5,ry:-75,css:"hill back"});
  
  C.plane({w:600,h:1200,x:-400,z:-.5,ry:75,o:"left",css:"hill2",n:"h2left"});
  C.plane({w:600,h:1200,x:400,z:-.5,ry:-75,o:"right",css:"hill2",n:"h2right"});
  
  C.plane({w:600,h:600,x:-620,y:400,z:-300.5,rx:-90,sk:"15deg",css:"hill3",n:"h3left"});
  C.plane({w:600,h:600,x:-620,y:-400,z:-300.5,rx:-90,sk:"15deg",css:"hill3",n:"h3left2"});
  
  C.plane({w:600,h:600,x:620,y:400,z:-300.5,rx:-90,sk:"-15deg",css:"hill3",n:"h3right"});
  C.plane({w:600,h:600,x:620,y:-400,z:-300.5,rx:-90,sk:"-15deg",css:"hill3",n:"h3right2"});
  
  X = 0;
  Y = 0;
  X2 = 0;
  Y2 = 0;
  for(var i = 0; i < 3; i++){
    
    while(Math.abs(X2-X) < 50 && Math.abs(Y2-Y) < 50){
      X=-450-Math.random()*300;
      Y=-120-Math.random()*300;
    }
    
    C.sprite({w:60,h:60,x:X,y:Y,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
    X2 = X;
    Y2 = Y;
  }
  
  for(var i = 0; i < 3; i++){
    
    while(Math.abs(X2-X) < 50 && Math.abs(Y2-Y) < 50){
      X=450+Math.random()*300;
      Y=-120-Math.random()*300;
    }
    
    C.sprite({w:60,h:60,x:X,y:Y,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
    
    X2 = X;
    Y2 = Y;
    
  }
  

  X=450+Math.random()*300;
  Y=120+Math.random()*300;
  
  C.sprite({w:60,h:60,x:X,y:Y,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});

  X=-420-Math.random()*300;
  Y=120+Math.random()*300;
  
  C.sprite({w:60,h:60,x:X,y:Y,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
  C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
}