'</div></a>'});
 h+='</div><div class="row"><a class="pill" href="#c">🔥 '+T(UI.challenge)+'</a><a class="pill" href="#t">🍅 '+T(UI.tools)+'</a><a class="pill" href="#b">🏅 '+T(UI.badges)+'</a><a class="pill" href="#s">📚 '+T(UI.sources)+'</a></div><p class="disc">'+T(UI.disc)+'</p>';
 app.innerHTML=topbar(T(UI.home))+'<main>'+h+'</main>'}
function mod(id,sub,i){const m=M.find(x=>x.id===id);if(!m)return home();
 if(!sub){let h='<div class="mh" style="--c:'+m.c+'"><div class="ic big">'+m.ic+'</div><h1>'+T(m.t)+'</h1></div><div class="list">';
  m.L.forEach((l,k)=>{h+='<a class="li" href="#m/'+id+'/l/'+k+'"><span class="n">'+(st.lessons[id+"."+k]?"✓":k+1)+'</span>'+T(l.t)+'</a>'});
  h+='<a class="li q" href="#m/'+id+'/q/0"><span class="n">?</span>'+T(UI.quiz)+(st.quiz[id]!=null?' ★'+st.quiz[id]+'/3':'')+'</a></div><div class="tip">💡 <b>'+T(UI.parent)+'</b>'+T(m.P)+'</div>';
  return app.innerHTML=topbar(T(m.t))+'<main style="--c:'+m.c+'">'+langbar()+h+'</main>'}
 if(sub==="l"){const l=m.L[i];let h='<div class="lesson" style="--c:'+m.c+'"><h2>'+T(l.t)+'</h2>';
  l.b.forEach(p=>h+='<p>'+T(p)+'</p>');h+='</div>';
  const all=[l.t].concat(l.b);window._p=all.flatMap(plain);
  h+='<button class="lb" onclick="say(window._p)">🔊 '+T(UI.listen)+'</button> <button class="lb s" onclick="stopSay()">⏹ '+T(UI.stop)+'</button>';
  const nx=i+1<m.L.length?"#m/"+id+"/l/"+(i+1):"#m/"+id+"/q/0";
  h+='<div class="nv">'+(i>0?'<a class="pill" href="#m/'+id+'/l/'+(i-1)+'">← '+T(UI.prev)+'</a>':'<span></span>')+'<a class="pill go" onclick="doneL('+id+','+i+')" href="'+nx+'">'+T(UI.next)+' →</a></div>';
  return app.innerHTML=topbar(T(m.t))+'<main style="--c:'+m.c+'">'+langbar()+h+'</main>'}
 if(sub==="q"){const qs=m.Q;if(i>=qs.length)return qres(m);const q=qs[i];window._ans=window._ans||{};if(i===0&&!window._qs?.[id]){window._qs=window._qs||{};window._qs[id]=0}
  let h='<div class="qh">'+T(UI.quiz)+' '+(i+1)+'/'+qs.length+'</div><div class="lesson" style="--c:'+m.c+'"><h2>'+T(q.q)+'</h2></div><div class="opts">';
  q.o.forEach((o,k)=>h+='<button class="opt" id="o'+k+'" onclick="ans('+id+','+i+','+k+')">'+T(o)+'</button>');
  h+='</div><div id="fb"></div>';window._p=plain(q.q);h+='<button class="lb" onclick="say(window._p)">🔊 '+T(UI.listen)+'</button>';
  return app.innerHTML=topbar(T(m.t))+'<main style="--c:'+m.c+'">'+langbar()+h+'</main>'}}
function doneL(id,i){if(!st.lessons[id+"."+i]){st.lessons[id+"."+i]=1;addXP(10)}}
function ans(id,i,k){window._qs=window._qs||{};const m=M.find(x=>x.id===id),q=m.Q[i];if(document.querySelector(".opt.ok,.opt.no"))return;
 const ok=k===q.a;if(ok){addXP(20);window._qs[id]=(window._qs[id]||0)+1;beep(988)}else beep(200,.3);
 document.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add("ok");else if(j===k)b.classList.add("no")});
 $("#fb").innerHTML='<div class="fb '+(ok?"g":"b")+'">'+(ok?"✅ ":"❌ ")+T(q.e)+'</div><a class="pill go" href="#m/'+id+'/q/'+(i+1)+'">'+T(UI.next)+' →</a>'}
function qres(m){const s=window._qs?.[m.id]||0;const best=Math.max(st.quiz[m.id]??0,s);st.quiz[m.id]=best;let won=false;if(s>=2&&!st.badges.includes("m"+m.id)){badge("m"+m.id);addXP(50);won=true}
 if(Object.keys(st.quiz).length>=M.length&&M.every(x=>st.badges.includes("m"+x.id)))badge("master");save();window._qs[m.id]=0;
 app.innerHTML=topbar(T(m.t))+'<main style="--c:'+m.c+'"><div class="res"><div class="ic big">'+(s>=2?"🏆":"💪")+'</div><h1>'+s+'/'+m.Q.length+' '+T(UI.ofq)+'</h1>'+(won?'<p class="ok">🏅 '+T(UI.pass)+' +50 XP</p>':"")+'<a class="pill go" href="#m/'+m.id+'/q/0">'+T(UI.retry)+'</a> <a class="pill" href="#m/'+m.id+'">'+T(m.t)+'</a> <a class="pill" href="#">'+T(UI.home)+'</a></div></main>'}
function chal(){const t=today(),did=st.days.includes(t),n=st.days.length,next=Math.min(n,20);
 let h='<div class="mh" style="--c:#ff6d00"><div class="ic big">🔥</div><h1>'+T(UI.challenge)+'</h1></div><p class="center">'+n+'/21 · '+T(UI.streak)+'</p><div class="bar"><i style="width:'+(n/21*100)+'%"></i></div><div class="dg">';
 for(let d=0;d<21;d++)h+='<div class="dot '+(d<n?"on":d===n?"cur":"")+'">'+(d<n?"✓":d+1)+'</div>';
 h+='</div>';if(n<21){h+='<div class="lesson" style="--c:#ff6d00"><h2>'+T(UI.day)+' '+(next+1)+'</h2><p>'+T(CH[next])+'</p></div>';window._p=plain(CH[next]);
  h+='<button class="lb" onclick="say(window._p)">🔊 '+T(UI.listen)+'</button> '+(did?'<p class="ok">'+T(UI.todayDone)+'</p>':'<button class="pill go" onclick="markDay()">✔ '+T(UI.markToday)+'</button>')}else h+='<p class="ok">🏆 21/21! </p>';
 h+='<p class="disc">'+T(["గమనిక: 21 రోజులు మంచి మొదలు మాత్రమే. అలవాటు స్థిరపడటానికి చాలా మందికి ఎక్కువ రోజులు పడుతుంది - కొనసాగించండి.","Note: 21 days is a good start only. Most people need longer for a habit to stick - keep going."])+'</p>';
 app.innerHTML=topbar(T(UI.challenge))+'<main>'+langbar()+h+'</main>'}
function markDay(){const t=today();if(st.days.includes(t))return;st.days.push(t);addXP(15);if(st.days.length>=7)badge("d7");if(st.days.length>=21){badge("d21");addXP(100)}save();beep(1200);chal()}
function badges(){const B=[["m1","⏳","Time Explorer"]].slice(0,0);let h='<div class="grid">';
 M.forEach(m=>{const g=st.badges.includes("m"+m.id);h+='<div class="card b '+(g?"":"lock")+'" style="--c:'+m.c+'"><div class="ic">'+(g?m.ic:"🔒")+'</div><div class="ct">'+T(m.t)+'</div></div>'});
 [["d7","🌟","7-day streak","7 రోజుల వరుస"],["d21","👑","21-day challenge","21 రోజుల ఛాలెంజ్"],["master","🏆","Course master","కోర్సు మాస్టర్"]].forEach(b=>{const g=st.badges.includes(b[0]);h+='<div class="card b '+(g?"":"lock")+'" style="--c:#ffd600"><div class="ic">'+(g?b[1]:"🔒")+'</div><div class="ct">'+T([b[3],b[2]])+'</div></div>'});
 app.innerHTML=topbar(T(UI.badges))+'<main>'+langbar()+h+'</div></main>'}
function srcs(){let h='<p class="disc">'+T(UI.disc)+'</p><ol class="src">';S.forEach(s=>h+='<li>'+esc(s[0])+'<br><a href="'+s[1]+'" target="_blank" rel="noopener">'+esc(s[1])+'</a><br><em>'+esc(s[2])+'</em></li>');
 h+='</ol><p class="disc">Telugu text has not yet been reviewed by a teacher. | తెలుగు పాఠ్యాన్ని ఇంకా ఉపాధ్యాయులు సమీక్షించలేదు.</p>';app.innerHTML=topbar(T(UI.sources))+'<main>'+h+'</main>'}
// tools
let pt={mode:"f",left:1500,run:false,iv:null,end:0};
function tools(){const d=new Date().toDateString();if(st.top3d!==d){st.top3=["","",""];st.top3d=d;save()}
 let h='<div class="lesson" style="--c:#ffb300"><h2>🍅 '+T(UI.pomo)+'</h2><div id="clk" class="clk"></div><div class="center"><button class="pill go" id="pbtn" onclick="pToggle()">▶</button> <button class="pill" onclick="pReset()">'+T(UI.reset)+'</button></div><div class="center"><button class="pill" onclick="pMode(\'f\')">'+T(UI.focus)+'</button> <button class="pill" onclick="pMode(\'b\')">'+T(UI.brk)+'</button></div></div>';
 h+='<div class="lesson" style="--c:#7cff00"><h2>📝 '+T(UI.top3)+'</h2>';for(let i=0;i<3;i++)h+='<input class="inp" maxlength="80" value="'+esc(st.top3[i])+'" placeholder="'+(i+1)+'." oninput="st.top3['+i+']=this.value;save()">';h+='</div>';
 app.innerHTML=topbar(T(UI.tools))+'<main>'+langbar()+h+'</main>';pDraw()}
function pDraw(){const c=$("#clk");if(!c)return;const s=Math.max(0,pt.left);c.textContent=String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");const b=$("#pbtn");if(b)b.textContent=pt.run?"⏸":"▶"}
function pTick(){pt.left=Math.round((pt.end-Date.now())/1000);if(pt.left<=0){pt.left=0;pt.run=false;clearInterval(pt.iv);beep(880,.6);if(pt.mode==="f"){addXP(10);toast("🍅 +10 XP")}pDraw();return}pDraw()}
function pToggle(){if(pt.run){pt.run=false;clearInterval(pt.iv);pDraw();return}pt.run=true;pt.end=Date.now()+pt.left*1000;pt.iv=setInterval(pTick,250);pDraw()}
function pMode(m){clearInterval(pt.iv);pt={mode:m,left:m==="f"?1500:300,run:false,iv:null,end:0};pDraw()}
function pReset(){pMode(pt.mode)}
render();
