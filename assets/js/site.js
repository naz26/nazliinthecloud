(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  // header shadow
  const header = $('[data-sticky]');
  const onScroll = () => header && (header.style.boxShadow = window.scrollY>8 ? '0 6px 24px rgb(0 0 0/.08)' : 'none');
  document.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  // mobile nav
  const t=$('.nav-toggle'), nav=$('[data-collapsible]');
  if (t && nav) {
    const set=(open)=>{ t.setAttribute('aria-expanded', String(open)); nav.dataset.open=String(open); document.body.style.overflow=open?'hidden':''; };
    t.addEventListener('click', ()=> set(nav.dataset.open!=='true'));
    $$('a', nav).forEach(a=>a.addEventListener('click', ()=> set(false)));
  }
  // theme toggle
  const KEY='theme', root=document.documentElement, btn=$('[data-theme-toggle]');
  const apply=(val)=>{ const theme=val ?? localStorage.getItem(KEY) ?? 'auto'; root.setAttribute('data-theme', theme); btn?.setAttribute('aria-pressed', String(theme==='dark')); };
  apply(); window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', ()=>apply());
  btn?.addEventListener('click', ()=>{ const cur=root.getAttribute('data-theme')||'auto'; const next=cur==='dark'?'light':'dark'; localStorage.setItem(KEY,next); apply(next); });
  // tiny toast
  const toast=(m, ok=true)=>{ let el=$('#toast'); if(!el){ el=document.createElement('div'); el.id='toast'; Object.assign(el.style,{position:'fixed',right:'16px',bottom:'16px',padding:'10px 14px',borderRadius:'10px',border:'1px solid',background:'var(--card)',zIndex:99}); document.body.appendChild(el); } el.style.borderColor=ok?'#16a34a':'#dc2626'; el.textContent=m; clearTimeout(el._t); el._t=setTimeout(()=>el.remove(),2500); };
  $('#newsletter')?.addEventListener('submit', (e)=>{ e.preventDefault(); const v=$('#news-email').value.trim(); if(!/^\S+@\S+\.\S+$/.test(v)) return toast('Please enter a valid email', false); toast('Subscribed! (demo)'); e.target.reset(); });
  $('[data-year]')?.replaceChildren(String(new Date().getFullYear()));
})();
