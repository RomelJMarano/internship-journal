/* ── Nav scroll ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('on', scrollY > 50), { passive:true });

/* ── Parallax ── */
const hbg = document.getElementById('hbg');
window.addEventListener('scroll', () => {
  if (scrollY < innerHeight) hbg.style.transform = `translateY(${scrollY * 0.28}px)`;
}, { passive:true });

/* ── Scroll reveal ── */
const io = new IntersectionObserver(entries =>
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } }),
  { threshold:0.08 }
);
document.querySelectorAll('[data-a]').forEach(el => io.observe(el));

/* ── Gallery slider ── */
let cur = 0; const total = 3;
const track = document.getElementById('galTrack');
const dots  = document.querySelectorAll('.gdot');
function goTo(n) {
  cur = (n + total) % total;
  track.style.transform = `translateX(-${cur * 100}%)`;
  dots.forEach((d,i) => d.classList.toggle('on', i === cur));
}
document.getElementById('galNext').addEventListener('click', () => goTo(cur+1));
document.getElementById('galPrev').addEventListener('click', () => goTo(cur-1));
dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));
setInterval(() => goTo(cur+1), 5000);
let touchX = 0;
track.addEventListener('touchstart', e => touchX = e.touches[0].clientX, { passive:true });
track.addEventListener('touchend',   e => {
  const diff = touchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goTo(diff > 0 ? cur+1 : cur-1);
}, { passive:true });

/* ══════════════════════════════════════════
   PAGE-WIDE THEME SYSTEM
   Default: Professional Navy (index 0)
══════════════════════════════════════════ */
const root = document.documentElement;

const THEMES = [
  /* 0 — DEFAULT */
  {
    id:'navy-pro', name:'Professional',
    nav:'#1A3E6E',
    hero:['rgba(232,238,246,.52)','rgba(200,214,235,.62)','rgba(148,174,207,.72)','rgba(244,247,251,1)'],
    vars:{
      '--p1':'#E8EEF6','--p2':'#C8D6EB','--p3':'#94AECF','--p4':'#5A82B4',
      '--p5':'#2D5F9A','--p6':'#1A3E6E','--p7':'#0D2245',
      '--bg':'#F4F7FB','--bg2':'#EBF0F8',
      '--ink':'#0D1B2E','--ink2':'#2A3F5C','--ink3':'#6A85A8',
      '--bdr':'rgba(90,130,180,0.16)',
    }
  },
  {
    id:'blush-pink', name:'Blush Pink',
    nav:'#9B3A54',
    hero:['rgba(253,238,241,.52)','rgba(250,215,222,.62)','rgba(248,200,212,.72)','rgba(255,249,250,1)'],
    vars:{
      '--p1':'#FDEEF1','--p2':'#FAD7DE','--p3':'#F4AEBB','--p4':'#E8839A',
      '--p5':'#C85C78','--p6':'#9B3A54','--p7':'#6E2039',
      '--bg':'#FFF9FA','--bg2':'#FEF3F5',
      '--ink':'#230F17','--ink2':'#5E2E3C','--ink3':'#AA7888',
      '--bdr':'rgba(232,131,154,0.18)',
    }
  },
  {
    id:'gold-cream', name:'Gold & Cream',
    nav:'#8B6914',
    hero:['rgba(255,248,230,.52)','rgba(255,237,180,.62)','rgba(255,224,140,.72)','rgba(255,252,240,1)'],
    vars:{
      '--p1':'#FFF8E6','--p2':'#FDECC8','--p3':'#F8D68A','--p4':'#E8B84B',
      '--p5':'#C49020','--p6':'#8B6914','--p7':'#5C440A',
      '--bg':'#FFFDF5','--bg2':'#FFF9E8',
      '--ink':'#2A1F05','--ink2':'#5A4510','--ink3':'#9A8050',
      '--bdr':'rgba(232,184,75,0.2)',
    }
  },
  {
    id:'rose-gold', name:'Rose Gold',
    nav:'#8B4A5C',
    hero:['rgba(255,235,238,.52)','rgba(255,210,218,.62)','rgba(245,180,192,.72)','rgba(255,245,247,1)'],
    vars:{
      '--p1':'#FFEBEE','--p2':'#FFD2DA','--p3':'#F5B4C0','--p4':'#E88498',
      '--p5':'#C8566C','--p6':'#8B4A5C','--p7':'#5E2E3C',
      '--bg':'#FFF7F8','--bg2':'#FFEFF2',
      '--ink':'#2A0F14','--ink2':'#5E2A34','--ink3':'#AA7888',
      '--bdr':'rgba(232,132,152,0.18)',
    }
  },
  {
    id:'sky-blue', name:'Sky & Lilac',
    nav:'#4A5E8B',
    hero:['rgba(230,238,255,.52)','rgba(208,220,255,.62)','rgba(190,205,250,.72)','rgba(245,248,255,1)'],
    vars:{
      '--p1':'#E8EEFF','--p2':'#D0DCFF','--p3':'#A8BCFF','--p4':'#7898F0',
      '--p5':'#4A6CD4','--p6':'#2A4A9B','--p7':'#162E6E',
      '--bg':'#F5F8FF','--bg2':'#EEF3FF',
      '--ink':'#0A1230','--ink2':'#2A3860','--ink3':'#7080AA',
      '--bdr':'rgba(120,152,240,0.18)',
    }
  },
  {
    id:'sage-green', name:'Sage & Mint',
    nav:'#3A6B4A',
    hero:['rgba(230,245,234,.52)','rgba(200,235,210,.62)','rgba(170,218,185,.72)','rgba(240,250,243,1)'],
    vars:{
      '--p1':'#E8F5EC','--p2':'#C8EBD2','--p3':'#96D4A8','--p4':'#5CB87A',
      '--p5':'#2E9456','--p6':'#1E6B3A','--p7':'#0F4224',
      '--bg':'#F4FBF6','--bg2':'#EAF6EE',
      '--ink':'#0A200F','--ink2':'#1E4A28','--ink3':'#6A9878',
      '--bdr':'rgba(92,184,122,0.18)',
    }
  },
  {
    id:'lavender', name:'Lavender',
    nav:'#5E3A8B',
    hero:['rgba(243,236,255,.52)','rgba(230,215,255,.62)','rgba(210,188,252,.72)','rgba(250,246,255,1)'],
    vars:{
      '--p1':'#F3ECFF','--p2':'#E6D7FF','--p3':'#C8AAFF','--p4':'#A07AEE',
      '--p5':'#7848D4','--p6':'#5030A0','--p7':'#32186E',
      '--bg':'#FAF7FF','--bg2':'#F4EEFF',
      '--ink':'#1A0830','--ink2':'#3A1860','--ink3':'#8870AA',
      '--bdr':'rgba(160,122,238,0.18)',
    }
  },
  {
    id:'peach-coral', name:'Peach Coral',
    nav:'#8B4A2A',
    hero:['rgba(255,240,232,.52)','rgba(255,220,198,.62)','rgba(255,195,165,.72)','rgba(255,248,244,1)'],
    vars:{
      '--p1':'#FFF0E8','--p2':'#FFDCC6','--p3':'#FFBB96','--p4':'#F0906A',
      '--p5':'#D4623A','--p6':'#9B3E1E','--p7':'#6E2010',
      '--bg':'#FFF9F6','--bg2':'#FFF3EC',
      '--ink':'#2A1208','--ink2':'#5E2C18','--ink3':'#AA7865',
      '--bdr':'rgba(240,144,106,0.18)',
    }
  },
  {
    id:'midnight', name:'Midnight Rose',
    nav:'#C84878',
    hero:['rgba(30,10,20,.72)','rgba(60,15,30,.82)','rgba(80,20,40,.88)','rgba(15,5,10,1)'],
    vars:{
      '--p1':'#3A1525','--p2':'#4E1E30','--p3':'#8B3A5A','--p4':'#C45A80',
      '--p5':'#E87AA0','--p6':'#F4A0BC','--p7':'#FDD0E0',
      '--bg':'#0F0508','--bg2':'#1A0810',
      '--ink':'#FDE8F0','--ink2':'#F0C0D4','--ink3':'#C890A8',
      '--bdr':'rgba(196,90,128,0.25)',
    }
  },
  {
    id:'ocean', name:'Ocean Breeze',
    nav:'#1A5A7A',
    hero:['rgba(220,240,250,.52)','rgba(180,220,242,.62)','rgba(140,200,232,.72)','rgba(235,248,255,1)'],
    vars:{
      '--p1':'#DCF0FA','--p2':'#B4DCF2','--p3':'#78BEE0','--p4':'#3A9AC8',
      '--p5':'#1A78A8','--p6':'#0E5278','--p7':'#063248',
      '--bg':'#F0FAFF','--bg2':'#E4F4FC',
      '--ink':'#051828','--ink2':'#1A3E54','--ink3':'#6898B0',
      '--bdr':'rgba(58,154,200,0.18)',
    }
  },
];

/* Build preview cards */
const grid = document.getElementById('tpGrid');
THEMES.forEach((t, idx) => {
  const ho = t.hero;
  const card = document.createElement('div');
  card.className = 'tp-card' + (idx === 0 ? ' active' : '');
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="tp-preview">
      <div class="tp-nav-stripe" style="background:${t.nav}">
        <div class="tp-nav-dot"></div><div class="tp-nav-dot"></div><div class="tp-nav-dot"></div>
      </div>
      <div class="tp-hero-stripe" style="background:linear-gradient(to bottom,${ho[0]},${ho[1]},${ho[2]},${ho[3]})"></div>
      <div class="tp-body-stripe" style="background:${t.vars['--bg2'] || '#f5f5f5'}">
        <div class="tp-body-bar" style="width:40%;background:${t.vars['--p3']}"></div>
        <div class="tp-body-bar" style="width:25%;background:${t.vars['--p2']}"></div>
      </div>
    </div>
    <div class="tp-name">${t.name}</div>`;
  card.addEventListener('click', () => applyTheme(t.id));
  grid.appendChild(card);
});

function applyTheme(id) {
  const t = THEMES.find(x => x.id === id);
  if (!t) return;
  Object.entries(t.vars).forEach(([k,v]) => root.style.setProperty(k, v));
  const ho = t.hero;
  const hov = document.getElementById('hov');
  hov.style.background = `linear-gradient(to bottom,${ho[0]} 0%,${ho[1]} 40%,${ho[2]} 72%,${ho[3]} 100%)`;
  document.querySelectorAll('.tp-card').forEach(c => c.classList.toggle('active', c.dataset.id === id));
}

/* Panel toggle */
const themePanel  = document.getElementById('themePanel');
const themeToggle = document.getElementById('themeToggle');
const themeClose  = document.getElementById('themeClose');
themeToggle.addEventListener('click', e => { e.stopPropagation(); themePanel.classList.toggle('open'); });
themeClose.addEventListener('click',  () => themePanel.classList.remove('open'));
document.addEventListener('click',    e => {
  if (!themePanel.contains(e.target) && e.target !== themeToggle) themePanel.classList.remove('open');
});
