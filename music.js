boom = () => {
  var f = function(i){
    var n=3e4;
    if (i > n) return null;
    return ((Math.pow(i+Math.sin(i*0.01)*1000,0.8)&200)?0.5:-0.5)*Math.pow(t(i,n),1);
  }

  // Sound player
  var t=(i,n)=>(n-i)/n;
  var A=new AudioContext()
  var m=A.createBuffer(1,96e3,48e3)
  var b=m.getChannelData(0)
  for(var i=96e3;i--;)b[i]=f(i)/5
  var s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
};

wouwou = () => {
  // Sound
  var f = function(i){
    i=Math.pow(i,0.96)*1.3;
    var n=5e4;
    if (i > n) return null;
    return (((i+Math.sin(i/1900)*80)&64)?1:-1)*Math.pow(t(i,n),3);
  }

  // Sound player
  var t=(i,n)=>(n-i)/n;
  var A=new AudioContext()
  var m=A.createBuffer(1,96e3,48e3)
  var b=m.getChannelData(0)
  for(i=96e3;i--;)b[i]=f(i)/5
  var s=A.createBufferSource()
  s.buffer=m
  s.connect(A.destination)
  s.start()
}

music = () => {
  n = -3;
  A = new AudioContext;
  G=A.createGain();
  note();  
}

note = () => {
  // Theme (64 notes, 2 tracks)
  var t = [
    "`dgd`dgd`dgd`dgdbeiebeiebeiebeieY]`]Y]`]Y]`]Y]`][_b_[_b_[_b_[_b_", 
    "l(((k(((g(((((gkl(((n(((n(p(pnlki(((((((i(((k(ikl(((n(((((nlkgik"
  ];
  
  if(state){

    O1=A.createOscillator();
    O2=A.createOscillator();
    
    if(state && t[0][n%64]!="("){
      O1.connect(G),
      G.connect(A.destination),
      O1.start(A.currentTime),
      O1.frequency.setValueAtTime(440*1.06**(n >= 0 ?-105+t[0].charCodeAt(n%64) : 0),A.currentTime),
      O1.type = cam == "2d" ? 'sine' : cam == "3d" ? 'triangle' : "square",
      G.gain.setValueAtTime(n >= 0 ? .06 : .0001, A.currentTime + (cam == "4d" ? Math.random()/3 : 0)),
      G.gain.setTargetAtTime(.001,A.currentTime+(cam == "4d" ? Math.random()/4 : .1),.05),
      O1.stop(A.currentTime+(cam == "4d" ? Math.random()/3 : .24));
    }
    
    if(state && t[1][n%64]!="("){
      O2.connect(G),
      G.connect(A.destination),
      O2.start(A.currentTime),
      O2.frequency.setValueAtTime(440*1.06**(n >= 0 ?-105+t[1].charCodeAt(n%64) : 0),A.currentTime),
      O2.type = cam == "2d" ? 'sine' : cam == "3d" ? 'triangle' : "square",
      G.gain.setValueAtTime(n >= 0 ? .08 : .0001, A.currentTime + (cam == "4d" ? Math.random()/3 : 0)),
      G.gain.setTargetAtTime(.001,A.currentTime+(cam == "4d" ? Math.random()/4 : .1),.05),
      O2.stop(A.currentTime+(cam == "4d" ? Math.random()/3 : .24));
    }
    
    n++;
  
    //console.log(n, n%64);
  }
  
  setTimeout(note, 270 + (cam == "4d" ? Math.random()/2 - .25 : 0));
  
}