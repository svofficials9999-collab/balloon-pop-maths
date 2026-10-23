/* sv-voice.js v2 - app-wide female-leaning Indic voice selection for device TTS.
   Wraps speechSynthesis.speak: for te/en/hi utterances, picks the best female-leaning
   voice available on the device. Name heuristics are NOT gender proof (e.g. "Google
   తెలుగు" declares no identity); they only prefer female-named voices when present.
   No voice can be guaranteed on any device; when no matching voice exists the
   utterance plays with the system default (callers surface their own warnings). */
(function(){try{
var ss=window.speechSynthesis;if(!ss||ss.__fv)return;
var FNAMES=/\b(female|heera|priya|neerja|shruti|swara|kalpana|veena|lekha|sangeeta|aditi|raveena|zira|helena|meera|ananya|kavya|lakshmi|sulafat)\b/i;
var MNAMES=/\b(male|ravi|prabhat|hemant|madhur|mohan|rishi|arjun|vikram|kiran|rohan)\b/i;
var GOOGLE_INDIC=/google (हिन्दी|తెలుగు|english|తమిళ్|हिंदी)/i;
var cache={};
function pick(lang){
 var base=(lang||'en-IN').toLowerCase().slice(0,2);
 var want=base==='te'?'te-in':(base==='hi'?'hi-in':(base==='en'?'en-in':base));
 var vs=ss.getVoices()||[];var k=want+'|'+vs.length;if(cache[k]!==undefined)return cache[k];
 var norm=function(l){return (l||'').toLowerCase().replace('_','-')};
 var c=vs.filter(function(v){return norm(v.lang)===want});
 if(!c.length)c=vs.filter(function(v){return norm(v.lang).indexOf(base+'-')===0||norm(v.lang)===base});
 function rank(v){
  var n=(v.name||'')+' '+(v.voiceURI||'');var r=0;
  var f=FNAMES.test(n),m=MNAMES.test(n);
  if(f&&!m)r+=4;if(m)r-=4;              /* exact-token name hints only; never proof */
  if(GOOGLE_INDIC.test(n))r+=1;          /* Indic google voice: language fit, no gender claim */
  if(v.localService===false)r+=1;
  return r;
 }
 var best=c.slice().sort(function(a,b){return rank(b)-rank(a)})[0]||null;
 cache[k]=best;return best;
}
var sp=ss.speak.bind(ss);
ss.speak=function(u){try{if(u&&!u.__set){u.__set=1;var l=(u.lang||'').toLowerCase();if(/^(te|en|hi)/.test(l)){var v=pick(u.lang||'en-IN');if(v){u.voice=v;u.lang=v.lang}}}}catch(e){}return sp(u)};
ss.__fv=2;
if(ss.addEventListener)ss.addEventListener('voiceschanged',function(){cache={}});
}catch(e){}})();
