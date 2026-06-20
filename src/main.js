const screens=[
  ['00A','VsMe','REAL ACTIONS. VISIBLE CHANGE.','ENTER'],
  ['00B','Your life. Your RPG.','EON CITY / YOUR WORLD. YOUR STORY.','STEP INTO EON CITY'],
  ['01','Stop dreaming. Start becoming.','Your real actions change your monito.','START BECOMING'],
  ['02','Choose your access.','Age-based spaces and adult areas.','CONTINUE'],
  ['03','Choose your base. Start becoming.','Your real-life transformation starts here.','CREATE MY MONITO'],
  ['03B','Give your monito a name.','You are starting a bond.','LOCK NAME'],
  ['04','What version of you are you building first?','Choose your first fight.','CHOOSE THIS FIGHT'],
  ['05','Your first move starts now.','One real action. One visible reaction.','START THIS MOVE']
];
let i=0;
const root=document.getElementById('root');
function dots(){return '<div class="dots">'+screens.map((s,n)=>'<i class="'+(n<=i?'on':'')+'"></i>').join('')+'</div>'}
function monito(){return '<div class="monito"><span class="head"><i></i><b></b><em></em></span><span class="body"></span><span class="leg l"></span><span class="leg r"></span></div>'}
function render(){const s=screens[i];root.innerHTML='<main class="app"><section class="shell screen-'+s[0]+'"><header><img class="logo" src="assets/brand/logo/vsme-logo-primary.svg" />'+dots()+'</header>'+(i>1?'<button class="back">← BACK</button>':'')+'<div class="stage"><aside><p class="eyebrow">'+s[0]+'</p><h1>'+s[1]+'</h1><p>'+s[2]+'</p><button class="primary">'+s[3]+'</button><small>REAL ACTIONS. VISIBLE CHANGE.</small></aside><section class="panel">'+monito()+monito()+monito()+'</section></div></section></main>'}
document.addEventListener('click',e=>{if(e.target.closest('.back'))i=Math.max(0,i-1);else if(e.target.closest('button'))i=Math.min(screens.length-1,i+1);render()});render();
