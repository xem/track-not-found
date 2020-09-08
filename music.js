music = () => {
  
  // Music
  musicint = $ = _ = 0,
  Phase = function () {
    var phase = 0;
    this.sample = function (hz) {
      phase += (hz / 48e3) * Math.PI*2;
      phase %= Math.PI*2;
      return phase;
    };
  },

  Note = function (value, x){
    var phase = new Phase();
    var vibrato_phase = new Phase();
    var gain = 0.1;
    this.sample = function (){
      if (!value) return 0;
      var v = value + 0.4 * Math.sin(vibrato_phase.sample(3));
      var hz = 440*Math.pow(2, (v-57)/12);
      gain *= 0.9998;
      var phi = phase.sample(hz);
      return Math.pow(Math.sin(phi), x) * gain;
    };
  },

  Song = function (song){
    $ = -1;
    var mk_audio = function (data) {
      var l = data.length;
      var l2=l*2;
      var b32 = function (v) {
        var s = 0;
        var b = "";
        for (var i=0; i<4; i++,s+=8) b+=String.fromCharCode((v>>s)&255);
        return b;
      };
      var b16 = function (v) {
        var b = b32(v);
        return b[0]+b[1];
      };
      var b = "RIFF"+b32(l2+36)+"WAVEfmt "+b32(16)+b16(1)+b16(2)+b32(48e3)+b32(48e3*4)+b16(4)+b16(16)+"data"+b32(l2);
      for (var i in data) {
        var value = Math.min(1.0, Math.max(-1.0, data[i]));
        b+=b16(data[i]*32767);
      }
      return new Audio("data:audio/wav;base64,"+btoa(b));
    };
    var play = function () {
      var n = song.length/2;
      _ = $;
      while (_ < 0) _ += n;
      _ %= n;
      var get_note = function (channel) {
        return song[_*2+channel].charCodeAt(0) % 15 + 40;
      };
      var note1 = new Note(get_note(0), 1);
      var note2 = new Note(get_note(1), 1);
      var samples = [];
      for (var i = 0; i < 48e3; i++) {
        var s1 = note1.sample();
        var s2 = note2.sample();
        var left = s1 + s2 * 0.5;
        var right = s1 * 0.5 + s2;
        samples.push(left);
        samples.push(right);
      }
      mk_audio(samples).play();
    };
    this.forward = function () {
      $++;
      play();
    };
    this.back = function () {
      $--;
      play();
    };
  },

  mkaudio = function(fn){
    var data = [];
    for (var i = 0;;i++) {
      var smp = fn(i);
      if (smp===null) break;
      data.push(smp);
    }
    var l = data.length;
    var l2=l*2;

    var b32 = function (v) {
      var s = 0;
      var b = "";
      for (var i=0; i<4; i++,s+=8) b+=String.fromCharCode((v>>s)&255);
      return b;
    };
    var b16 = function (v) {
      var b = b32(v);
      return b[0]+b[1];
    };
    
    var b = "RIFF"+b32(l2+36)+"WAVEfmt "+b32(16)+b16(1)+b16(1)+b32(48e3)+b32(48e3*2)+b16(2)+b16(16)+"data"+b32(l2);
    for (var i in data) b+=b16(data[i]*10e3);
    return new Audio("data:audio/wav;base64,"+btoa(b));
  },

  t = function(i,n){
    return (n-i)/n;
  },

  /*SNDeat = function(i){
    var n = 1e4;
    if (i>n) return null;
    return ((Math.pow(i,1.055)&128)?1:-1)*Math.pow(t(i,n),2)/2;
  },

  SNDappear = function(i){
    var n=25000;
    if (i > n) return null;
    return ((((i^(i>>3))^(i*i*7.3)^(i<<4))&65535)/65536)*t(i,n)/2;
  },

  SNDstuck = function(i){
    var n=5e3;
    if (i > n) return null;
    return ((Math.pow(i+Math.sin(i*0.01)*1000,0.8)&200)?0.5:-0.5)*Math.pow(t(i,n),1)/2;
  },

  SNDwin = function(i){
    var n=1.6e4;
    var c=n/7;
    if (i > n) return null;
    var q=Math.pow(t(i,n),2.1)/2;
    return (i<c ? ((i+Math.sin(-i/900)*10)&16) : i&13) ?q:-q;
  },

  SNDopendoor = function(i){
    var n=9e4;
    if (i > n) return null;
    return ((Math.pow(i+Math.sin(i*0.01)*1000,0.8)&200)?0.5:-0.5)*Math.pow(t(i,n),1)/4;
  },*/
    
  //song1 = new Song(camera.toString().replace(/[^a-z]/g,'').substr(0,30)),
  song1 = new Song("nbo0risiubv0uisirbs0uiniojrlsjuivjymvjubv0uisgu0vnxnzgx0vnunsgrisjulvmulsjufscrbs0ui"),

  //song1 = new Song("nbo0risiubv0uisirbs0ui0i0b0c0f0gniojrlsjuivjymvjubv0ui0i0j0m0n0rsgu0vnxnzgx0vnunsg0n0o0n0g0s0o0nrisjulvgufsjufscrbo0ni0j0b0i0j0il`n0ogqgs`u0vgxgz`0gxl0nsouqvsxuuev0u`0`0eq0slulqcs0qcs0qbs0q`s0njo0reseujv0xeveuj0v0e0q0j0i0g0e0cu0scq00bv0ufr0sgn0vbr0xiz0zjr0sgu0vbx0zgx0vbubsg{0zb{`z^{0zi{fzgv0xiu0vjs0ulr0sbn0oll0nbl0jfi0g00bxc0`zb0^{`0]z^0[z]0Zz[0]z^0`zb0]uf0bxi0f{l0izr0ozn0ixr0nrulrnbo0risiufs0r`o0nb0czf0gzi0gzf0cub0i0j0mvn0m0j0irbscrbs`rbs`sbrbo`q0sgugv`x0zg{gz`s0x`s0v`x0vcx0ues0q`l00eu00`x00ev00`u00eq00`o`"),
  
  currentsong = song1;
  
  setInterval(currentsong.forward,400);

  
  // Music
  /*song = camera.toString().replace(/\s/g,'').substr(0,30);
  Z = 0;
  D = [...song].map(a=>((a.charCodeAt() + Z++)%10)+10);
  
  with(new AudioContext)
  with(G=createGain())
  for(i in D)
  with(createOscillator())
  if(D[i=+i])
  connect(G),
  G.connect(destination),
  
  start(i),
  frequency.setValueAtTime(440*1.06**(13-D[i]),i),type='wave',
  gain.setValueAtTime(.5,i),
  gain.setTargetAtTime(.001,i+.1,.05),
  stop(i+.15);
  
  with(new AudioContext)
  with(G=createGain())
  for(i in D)
  with(createOscillator())
  if(D[i=+i])
  connect(G),
  G.connect(destination),
  
  start(i + .2),
  frequency.setValueAtTime(440*1.06**(12-D[i]),i + .2),type='wave',
  gain.setValueAtTime(.5,i + .2),
  gain.setTargetAtTime(.001,i + .2+.1,.05),
  stop(i + .2 +.15);  
  
  with(new AudioContext)
  with(G=createGain())
  for(i in D)
  with(createOscillator())
  if(D[i=+i])
  connect(G),
  G.connect(destination),
  
  start(i + .4),
  frequency.setValueAtTime(440*1.06**(11-D[i]),i + .4),type='wave',
  gain.setValueAtTime(.5,i + .4),
  gain.setTargetAtTime(.001,i+ .4+.1,.05),
  stop(i + .4 +.15);
  
  with(new AudioContext)
  with(G=createGain())
  for(i in D)
  with(createOscillator())
  if(D[i=+i])
  connect(G),
  G.connect(destination),
  
  start(i + .6),
  frequency.setValueAtTime(440*1.06**(10-D[i]),i + .6),type='wave',
  gain.setValueAtTime(.5,i + .6),
  gain.setTargetAtTime(.001,i+.6+.1,.05),
  stop(i + .6 +.15);*/
  
  
  //setTimeout(music, 60000);
}