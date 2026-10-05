ent.querySelectorAll(".dy").forEach(b=>b.onclick=()=>{const d=+b.dataset.day;if(!S.days[d]){S.days[d]=1;addXp(5);b.classList.add("on")}$("#dd").innerHTML='<b>'+tx(P("రోజు "+d,"Day "+d))+'</b>'+tx(HAB[d-1])})}
function bindTopic(id){const t=T.find(x=>x.id==id);$("#act").onchange=e=>{if(e.target.checked&&!S.act[id]){S.act[id]=1;addXp(10);toast("+10 XP")}else if(!e.target.checked)delete S.act[id];save()};
 $("#learn").onclick=()=>{if(!S.done[id]){S.done[id]=1;addXp(20);toast("+20 XP 🎉")}route()}}
window.addEventListener("hashchange",route);route();
