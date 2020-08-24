// Train
draw_train = (x,y,z) => {
  C.group({n:"train",x,y,z});
  C.plane({g:"train",w:50,h:50,y:-10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.plane({g:"train",w:50,h:50,y:10,z:2,html:"🚂",css:"train",rx:-90,ry:180,o:"bottom"}); // emoji
  C.cube({g:"train",x:-15,z:10,w:18,h:35,d:19,b:"#A11"},1,0,1,1,1,1); // big red
  C.cube({g:"train",x:6,z:15,w:26,h:18,d:19,b:"#444"},1,0,1,1,1,1); // big grey
  C.cube({g:"train",x:12,z:33,w:8,h:10,d:19,b:"#666"},0,0,1,1,1,1); // chemney light
  C.cube({g:"train",x:12,z:42,w:10,h:6,d:19,b:"#444"},1,0,1,1,1,1); // chemney dark
  C.plane({g:"train",b:"#c80",w:2.5,h:19,z:34}); // orange 1
  C.plane({g:"train",b:"#c80",w:2.5,h:19,z:34,x:7.5}); // orange 2
  C.plane({g:"train",b:"#151515",w:15,h:19,z:24,x:20.5,ry:90}); // front black
  C.plane({g:"train",b:"#c33",w:15,h:19,z:10,x:21,ry:45}); // slanted red
}

// boat
draw_boat = (x, y, z) => {
  C.sprite({n:"boat",w:50,h:50,x:x,y:y-5,z:z,html:["⛵","⛴","🚢"][Math.random()*3|0],css:"boat",rx:-90,ry:180,o:"bottom"}); // emoji
}

// Track 100px
draw_track = (x,y,z,pillar) => {
  C.cube({w:107,h:6,d:8,x:x,y:y+11,z:z,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  C.cube({w:107,h:6,d:8,x:x,y:y-11,z:z,b:"#888",b2:"#666",b3:"#aaa",css:"iron"},1,0,0,0,1,1);
  C.plane({w:107,h:20,x:x,y:y,z:z,css:"woods"});
  //for(var i=-40;i<60;i+=20){
    //C.plane({w:10,h:20,y:y,z:z-.1,x:x+i,b:"#ca0",css:"wood fixed"})
  //}
  if(pillar){
    C.cube({w:5,h:900,d:5,x:x,y:y,z:z-900.2,b:"#555"},0,1,1,1,1,1);
  }
}

// Hills
draw_hills = () => {
  var tree, X, Y, Z;
  
  C.plane({w:600,h:1200,x:0,z:-230,css:"river"});
  C.plane({w:600,h:1200,x:-650,z:-.5,css:"hill"});
  C.plane({w:600,h:1200,x:650,z:-.5,css:"hill"});
  C.plane({w:600,h:1200,x:-350,z:-.5,ry:75,o:"left",css:"hill2",n:"h2left"});
  C.plane({w:600,h:1200,x:350,z:-.5,ry:-75,o:"right",css:"hill2",n:"h2right"});
  C.plane({w:400,h:600,x:-470,z:-300.5,rx:-90,sk:"15deg",css:"hill3",n:"h3left"});
  C.plane({w:400,h:600,x:470,z:-300.5,rx:-90,sk:"-15deg",css:"hill3",n:"h3right"});
  
  for(var i = 1; i < 2; i++){
    C.sprite({w:60,h:60,x:X=-380-Math.random()*200,y:Y=-120-Math.random()*200,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:X=380+Math.random()*200,y:Y=-120-Math.random()*200,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:X=380+Math.random()*200,y:Y=120+Math.random()*200,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
    
    C.sprite({w:60,h:60,x:X=-380 -Math.random()*200,y:Y=120+Math.random()*200,z:0,html:tree=["🌳","🌴","🌲"][Math.random()*3|0],css:"tree fixed",o:"bottom"});
    C.plane({w:60,h:60,x:X,y:Y,z:0,html:tree,css:"tree fixed shadow",o:"bottom",rz:-25});
  }
    
}