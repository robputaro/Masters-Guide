const eventDate=new Date('2026-08-15T08:00:00-05:00');
function tick(){const el=document.querySelector('[data-countdown]'); if(!el)return; const d=Math.max(0,Math.ceil((eventDate-new Date())/86400000)); el.textContent=d+' days';}
tick();setInterval(tick,3600000);
