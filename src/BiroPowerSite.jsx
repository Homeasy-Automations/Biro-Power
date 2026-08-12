import React, { useEffect } from 'react';

export default function BiroPowerSite() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap');


  :root{
    --soil:#16302A;
    --soil-2:#1E3F35;
    --gold:#4FA8C9;
    --gold-dim:#3E8CAB;
    --green:#2F6B4A;
    --green-2:#23503A;
    --steel:#5B7268;
    --parchment:#E6EFE2;
    --paper:#F4F8F1;
    --rust:#1F6F78;
    --line: rgba(22,48,42,0.14);
    --line-light: rgba(230,239,226,0.22);
    --display: 'Big Shoulders Display', sans-serif;
    --body: 'IBM Plex Sans', sans-serif;
    --mono: 'IBM Plex Mono', monospace;
  }

  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:var(--body);
    background:var(--paper);
    color:var(--soil);
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
  }
  img,svg{display:block; max-width:100%;}
  a{color:inherit;}
  ::selection{background:var(--gold); color:var(--soil);}

  a:focus-visible, button:focus-visible{
    outline: 2px solid var(--rust);
    outline-offset: 3px;
  }

  .wrap{
    max-width:1180px;
    margin:0 auto;
    padding:0 32px;
  }

  .eyebrow{
    font-family:var(--mono);
    font-size:12.5px;
    letter-spacing:0.14em;
    text-transform:uppercase;
    color:var(--rust);
    display:flex;
    align-items:center;
    gap:10px;
  }
  .eyebrow::before{
    content:"";
    width:22px; height:1px;
    background:var(--rust);
    display:inline-block;
  }

  h1,h2,h3,h4{
    font-family:var(--display);
    font-weight:800;
    letter-spacing:-0.01em;
    line-height:0.98;
    text-transform:uppercase;
  }

  /* ---------- NAV ---------- */
  header.site-nav{
    position:sticky; top:0; z-index:50;
    background:rgba(250,246,234,0.92);
    backdrop-filter:blur(6px);
    border-bottom:1px solid var(--line);
  }
  .nav-inner{
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 32px;
    max-width:1180px; margin:0 auto;
  }
  .logo{
    display:flex; align-items:center; gap:10px;
    font-family:var(--display);
    font-weight:900; font-size:22px;
    text-transform:uppercase;
    letter-spacing:0.01em;
  }
  .logo .mark{
    width:30px; height:30px;
    flex:none;
  }
  .logo .byjo{
    font-family:var(--mono); font-weight:500;
    font-size:11px; letter-spacing:0.08em;
    color:var(--rust); text-transform:uppercase;
    border:1px solid var(--rust); border-radius:3px;
    padding:2px 6px; margin-left:2px;
  }
  nav.links{
    display:flex; gap:28px;
    font-family:var(--mono);
    font-size:12.5px;
    letter-spacing:0.06em;
    text-transform:uppercase;
  }
  nav.links a{ text-decoration:none; position:relative; padding-bottom:3px;}
  nav.links a::after{
    content:""; position:absolute; left:0; bottom:0; width:0; height:1px;
    background:var(--rust); transition:width .25s ease;
  }
  nav.links a:hover::after{width:100%;}
  .nav-cta{
    font-family:var(--mono); font-size:12px; text-transform:uppercase; letter-spacing:.06em;
    background:var(--soil); color:var(--paper);
    padding:9px 16px; border-radius:2px; text-decoration:none;
    white-space:nowrap;
  }
  .menu-toggle{display:none;}

  /* ---------- HERO ---------- */
  .hero{
    position:relative;
    background:var(--soil);
    color:var(--paper);
    overflow:hidden;
    border-bottom: 6px solid var(--gold);
  }
  .hero-inner{
    max-width:1180px; margin:0 auto;
    padding:96px 32px 72px;
    display:grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap:40px;
    align-items:center;
    position:relative;
    z-index:2;
  }
  .hero h1{
    font-size:clamp(46px, 6.4vw, 88px);
    color:var(--paper);
    margin-top:18px;
  }
  .hero h1 span{ color:var(--gold); }
  .hero p.sub{
    margin-top:22px;
    font-size:18px;
    max-width:44ch;
    color:var(--parchment);
    font-weight:400;
  }
  .hero .cta-row{
    display:flex; gap:16px; margin-top:34px; flex-wrap:wrap;
  }
  .btn{
    font-family:var(--mono); font-size:13px; text-transform:uppercase; letter-spacing:.06em;
    padding:14px 22px; border-radius:2px; text-decoration:none;
    display:inline-flex; align-items:center; gap:8px;
    border:1px solid transparent;
  }
  .btn-primary{ background:var(--gold); color:var(--soil); font-weight:600;}
  .btn-primary:hover{ background:#6FC2E0; }
  .btn-ghost{ border-color:var(--line-light); color:var(--paper); }
  .btn-ghost:hover{ background:rgba(230,239,226,0.08); }

  .hero-art{ position:relative; height:100%; min-height:340px; }
  .hero-art svg{ width:100%; height:auto; }

  .field-photo{
    position:relative; overflow:hidden; border-radius:4px; background:var(--soil-2);
  }
  .field-photo img{
    width:100%; height:100%; object-fit:cover; display:block;
    filter:saturate(0.92) contrast(1.03);
  }
  .field-photo .corner{
    position:absolute; top:10px; right:10px; width:12px; height:12px;
    border-top:1.5px solid var(--gold); border-right:1.5px solid var(--gold);
  }
  .field-photo .tag{
    position:absolute; left:12px; bottom:12px;
    font-family:var(--mono); font-size:10px; text-transform:uppercase; letter-spacing:.05em;
    color:var(--paper); background:rgba(22,48,42,0.62); backdrop-filter:blur(2px);
    padding:5px 9px; border-radius:2px; border:1px solid rgba(255,255,255,.14);
  }
  .hero-photo{ aspect-ratio:4/3; border:1px solid var(--line-light); }
  .hero-gear{
    position:absolute; left:-16px; bottom:-16px; width:66px; height:66px;
    background:var(--soil); border:2px solid var(--gold); border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    box-shadow:0 6px 18px rgba(0,0,0,0.4); z-index:2;
  }
  .hero-gear svg{ width:32px; height:32px; }

  .hero-scan{
    position:absolute; inset:0;
    background-image: repeating-linear-gradient(0deg, rgba(230,239,226,0.04) 0px, rgba(230,239,226,0.04) 1px, transparent 1px, transparent 40px);
    pointer-events:none; z-index:1;
  }

  .founder-strip{
    background:var(--soil-2);
    border-top:1px solid var(--line-light);
    padding:14px 0;
  }
  .founder-strip .wrap{
    display:flex; gap:14px; align-items:baseline; flex-wrap:wrap;
    font-family:var(--mono); font-size:12.5px; color:var(--parchment);
  }
  .founder-strip strong{ color:var(--gold); font-weight:600; }

  /* ---------- STATS BAR ---------- */
  .stats{
    background:var(--parchment);
    border-bottom:1px solid var(--line);
  }
  .stats-grid{
    display:grid; grid-template-columns:repeat(3,1fr);
  }
  .stat{
    padding:34px 28px;
    border-right:1px solid var(--line);
  }
  .stat:last-child{border-right:none;}
  .stat .num{
    font-family:var(--display); font-weight:900; font-size:40px;
    color:var(--rust); line-height:1;
  }
  .stat .lbl{
    font-family:var(--mono); font-size:11.5px; text-transform:uppercase;
    letter-spacing:.06em; color:var(--soil); margin-top:8px; opacity:.75;
  }

  .gallery-grid{
    display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
  }
  .gallery-grid .field-photo{ aspect-ratio:4/5; }

  /* ---------- SECTION GENERIC ---------- */
  section{ padding:96px 0; }
  section.tight{ padding:72px 0; }
  .section-head{
    display:flex; justify-content:space-between; align-items:flex-end;
    gap:24px; margin-bottom:52px; flex-wrap:wrap;
  }
  .section-head h2{
    font-size:clamp(34px,4.2vw,56px);
    margin-top:12px;
  }
  .section-head .desc{
    max-width:38ch; font-size:15.5px; color:var(--steel);
  }

  /* ---------- ABOUT ---------- */
  .about-grid{
    display:grid; grid-template-columns: 0.95fr 1.05fr; gap:56px; align-items:start;
  }
  .about-copy p{ margin-bottom:18px; font-size:16.5px; color:#33403A; max-width:56ch; }
  .about-copy p.lead{ font-size:20px; font-weight:500; color:var(--soil); }

  .founders-lines{
    display:grid; grid-template-columns:1fr 1fr; gap:24px;
    margin-top:8px; padding-top:24px; border-top:1px solid var(--line);
  }
  .founders-lines .fname{
    display:block; font-family:var(--display); font-weight:800; font-size:18px;
    text-transform:uppercase; letter-spacing:-0.01em; color:var(--soil);
  }
  .founders-lines .frole{
    display:block; font-family:var(--mono); font-size:11px; text-transform:uppercase;
    letter-spacing:.05em; color:var(--rust); margin-top:3px; margin-bottom:10px;
  }
  .founders-lines p{ font-size:14.5px; color:#33403A; max-width:none; margin-bottom:0; }
  .mission-card{
    background:var(--soil); color:var(--paper);
    padding:36px 34px; border-radius:4px;
    border-left:5px solid var(--gold);
  }
  .mission-card .eyebrow{ color:var(--gold); }
  .mission-card .eyebrow::before{ background:var(--gold); }
  .mission-card p{ margin-top:16px; font-size:17px; color:var(--parchment); }
  .mission-card .target{
    margin-top:24px; padding-top:20px; border-top:1px solid var(--line-light);
    display:flex; gap:26px; flex-wrap:wrap;
  }
  .mission-card .target div .n{ font-family:var(--display); font-weight:800; font-size:30px; color:var(--gold); }
  .mission-card .target div .t{ font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:var(--parchment); opacity:.8; }

  .about-photos{
    display:grid; grid-template-columns:1fr 1fr; gap:20px;
    margin-top:56px;
  }
  .about-photos .field-photo{ aspect-ratio:16/10; }

  /* ---------- PRODUCTS ---------- */
  .cat-block{ margin-bottom:64px; }
  .cat-block:last-child{ margin-bottom:0; }
  .cat-head{
    display:flex; align-items:center; gap:16px; margin-bottom:26px;
    padding-bottom:14px; border-bottom:2px solid var(--soil);
  }
  .cat-head .icon{ width:38px; height:38px; flex:none; color:var(--rust); }
  .cat-head h3{
    font-size:26px; letter-spacing:0.02em;
  }
  .cat-head .cat-note{
    font-family:var(--mono); font-size:11.5px; text-transform:uppercase; color:var(--steel);
    margin-left:auto; text-align:right;
  }

  .product-grid{
    display:grid; grid-template-columns:repeat(auto-fit, minmax(230px,1fr)); gap:1px;
    background:var(--line);
    border:1px solid var(--line);
  }
  .product-card{
    background:var(--paper);
    padding:26px 24px;
    position:relative;
  }
  .product-photo{
    width:100%; aspect-ratio:4/3; overflow:hidden; border-radius:3px;
    margin-bottom:16px; background:var(--parchment); border:1px solid var(--line);
  }
  .product-photo img{
    width:100%; height:100%; object-fit:cover; display:block;
  }
  .product-card .corner{
    position:absolute; top:10px; right:10px;
    width:9px; height:9px;
    border-top:1.5px solid var(--rust); border-right:1.5px solid var(--rust);
  }
  .product-card h4{
    font-family:var(--body); text-transform:none; font-weight:600; font-size:16px;
    letter-spacing:0; margin-bottom:10px; color:var(--soil);
  }
  .product-card .price{
    font-family:var(--mono); font-size:19px; font-weight:600; color:var(--rust);
  }
  .product-card .unit{
    font-family:var(--mono); font-size:11px; color:var(--steel); text-transform:uppercase;
  }
  .product-card .flag{
    display:inline-block; margin-top:14px;
    font-family:var(--mono); font-size:10.5px; text-transform:uppercase; letter-spacing:.05em;
    color:var(--green); border:1px solid var(--green); padding:3px 8px; border-radius:2px;
  }

  /* ---------- REACH / SIGNATURE ---------- */
  .reach{
    background:var(--green);
    color:var(--paper);
    position:relative;
    overflow:hidden;
  }
  .reach-grid{
    display:grid; grid-template-columns: 1fr 1fr; gap:40px; align-items:center;
  }
  .reach h2{ color:var(--paper); }
  .reach .eyebrow{ color:var(--gold); }
  .reach .eyebrow::before{ background:var(--gold); }
  .reach p{ font-size:16.5px; color:var(--parchment); max-width:46ch; margin-top:18px; }
  .reach-figures{ display:flex; gap:40px; margin-top:32px; flex-wrap:wrap; }
  .reach-figures .n{ font-family:var(--display); font-weight:900; font-size:44px; color:var(--gold); line-height:1;}
  .reach-figures .t{ font-family:var(--mono); font-size:11.5px; text-transform:uppercase; color:var(--parchment); margin-top:6px; max-width:16ch;}
  .reach-art{ position:relative; }
  .reach-art svg{ width:100%; height:auto; overflow:visible; }

  @keyframes beaconPulse{
    0%,100%{ transform:scale(1); opacity:1; }
    50%{ transform:scale(1.3); opacity:0.75; }
  }
  @keyframes ringPing{
    0%{ transform:scale(1); opacity:0.6; }
    75%{ opacity:0; }
    100%{ transform:scale(8); opacity:0; }
  }
  @keyframes nodeTwinkle{
    0%,100%{ opacity:0.5; }
    50%{ opacity:1; }
  }
  .reach-beacon{ transform-box:fill-box; transform-origin:center; animation:beaconPulse 2.4s ease-in-out infinite; }
  .reach-ping{ transform-box:fill-box; transform-origin:center; animation:ringPing 3.6s ease-out infinite; }
  .reach-ping:nth-of-type(2){ animation-delay:1.2s; }
  .reach-ping:nth-of-type(3){ animation-delay:2.4s; }
  .villages circle{ transform-box:fill-box; transform-origin:center; animation:nodeTwinkle 3s ease-in-out infinite; }
  .villages circle:nth-child(odd){ animation-delay:.4s; }
  .villages circle:nth-child(3n){ animation-delay:.9s; }
  .villages circle:nth-child(4n){ animation-delay:1.5s; }
  .recognition{
    margin-top:30px; padding:18px 20px;
    border:1px solid var(--line-light); border-radius:3px;
    font-size:14.5px; color:var(--parchment);
    background:rgba(0,0,0,0.12);
  }
  .recognition strong{ color:var(--gold); }

  /* ---------- LEADERSHIP ---------- */
  .leaders{
    display:grid; grid-template-columns:1fr 1fr; gap:1px;
    background:var(--line); border:1px solid var(--line);
  }
  .leader-card{ background:var(--paper); padding:38px 34px; }
  .leader-card .role{
    font-family:var(--mono); font-size:11.5px; text-transform:uppercase; letter-spacing:.06em; color:var(--rust);
  }
  .leader-card h3{
    font-size:32px; text-transform:none; letter-spacing:0; margin-top:8px; font-weight:700;
  }
  .leader-card .meta{
    margin-top:16px; font-size:14.5px; color:var(--steel);
  }
  .leader-card .meta div{ margin-bottom:6px; }
  .leader-card .meta span{ font-family:var(--mono); font-size:11px; text-transform:uppercase; color:var(--soil); opacity:.55; display:inline-block; width:118px;}

  /* ---------- CORPORATE / SPEC SHEET ---------- */
  .corporate{
    background:var(--soil); color:var(--parchment);
  }
  .corporate h2{ color:var(--paper); }
  .corporate .eyebrow{ color:var(--gold);}
  .corporate .eyebrow::before{ background:var(--gold);}
  .spec-sheet{
    margin-top:12px;
    border:1px solid var(--line-light);
  }
  .spec-row{
    display:grid; grid-template-columns: 280px 1fr;
    border-bottom:1px solid var(--line-light);
    font-size:14.5px;
  }
  .spec-row:last-child{ border-bottom:none; }
  .spec-row .k{
    font-family:var(--mono); font-size:11.5px; text-transform:uppercase; letter-spacing:.05em;
    color:var(--gold); padding:16px 20px; border-right:1px solid var(--line-light);
  }
  .spec-row .v{ padding:16px 20px; color:var(--paper); }
  .spec-columns{ display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-top:40px; }
  .spec-columns h4{
    font-size:18px; text-transform:none; letter-spacing:0; color:var(--gold); margin-bottom:14px; font-weight:700;
  }

  /* ---------- CONTACT ---------- */
  .contact-grid{
    display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px;
  }
  .contact-list{ list-style:none; }
  .contact-list li{
    padding:22px 0; border-bottom:1px solid var(--line);
    display:flex; gap:20px; align-items:flex-start;
  }
  .contact-list li:first-child{ padding-top:0; }
  .contact-list .icon{ width:22px; height:22px; flex:none; margin-top:3px; color:var(--rust);}
  .contact-list .label{
    font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:.05em; color:var(--steel);
  }
  .contact-list .value{ font-size:17px; margin-top:4px; }
  .contact-list a.value{ text-decoration:none; border-bottom:1px solid var(--line); }
  .contact-list a.value:hover{ border-color:var(--rust); color:var(--rust); }

  .contact-card{
    background:var(--parchment);
    border-left:5px solid var(--rust);
    padding:32px 30px;
    border-radius:4px;
  }
  .contact-card h3{
    font-size:24px; text-transform:none; letter-spacing:0;
  }
  .contact-card p{ margin-top:12px; font-size:15px; color:#445048; }
  .contact-card .btn-primary{ margin-top:20px; background:var(--rust); color:var(--paper);}
  .contact-card .btn-primary:hover{ background:#29929D; }

  /* ---------- FOOTER ---------- */
  footer{
    background:var(--soil-2); color:var(--parchment);
    padding:44px 0 30px; border-top:6px solid var(--gold);
  }
  .footer-inner{
    display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;
  }
  .footer-inner .fmark{ display:flex; align-items:center; gap:10px; font-family:var(--display); font-weight:800; font-size:18px; text-transform:uppercase;}
  .footer-inner .fmark svg{ width:24px; height:24px; }
  footer .fine{ font-family:var(--mono); font-size:11.5px; color:var(--steel); letter-spacing:.03em;}
  .footer-bottom{
    display:flex; align-items:center; justify-content:space-between;
    margin-top:22px; flex-wrap:wrap; gap:8px;
  }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 860px){
    .nav-inner{ padding:14px 20px; }
    nav.links{ display:none; }
    .wrap{ padding:0 20px; }
    .hero-inner{ grid-template-columns:1fr; padding:64px 20px 48px; }
    .hero-art{ order:-1; min-height:220px; }
    .stats-grid{ grid-template-columns:repeat(2,1fr); }
    .stat:nth-child(2){ border-right:none; }
    .stat{ border-bottom:1px solid var(--line); }
    section{ padding:64px 0; }
    .about-grid, .reach-grid, .leaders, .contact-grid, .spec-columns{ grid-template-columns:1fr; }
    .leaders{ grid-template-columns:1fr; }
    .founders-lines{ grid-template-columns:1fr; gap:20px; }
    .spec-row{ grid-template-columns:1fr; }
    .spec-row .k{ border-right:none; border-bottom:1px solid var(--line-light); padding-bottom:8px;}
    .about-photos{ grid-template-columns:1fr; }
    .gallery-grid{ grid-template-columns:1fr; }
    .hero-photo{ aspect-ratio:4/3; }
  }

  /* ---------- ANIMATION ---------- */
  @keyframes fadeUp{
    from{ opacity:0; transform:translateY(22px); }
    to{ opacity:1; transform:translateY(0); }
  }
  @keyframes spinSlow{
    from{ transform:rotate(0deg); }
    to{ transform:rotate(360deg); }
  }
  @keyframes softPulse{
    0%,100%{ opacity:0.55; }
    50%{ opacity:1; }
  }

  .hero .eyebrow, .hero h1, .hero p.sub, .hero .cta-row, .hero-art, .founder-strip{
    animation:fadeUp .8s cubic-bezier(.16,.8,.3,1) both;
  }
  .hero h1{ animation-delay:.08s; }
  .hero p.sub{ animation-delay:.18s; }
  .hero .cta-row{ animation-delay:.28s; }
  .hero-art{ animation-delay:.2s; }
  .founder-strip{ animation-delay:.4s; }

  .hero-gear svg{ animation:spinSlow 14s linear infinite; transform-origin:50% 50%; }
  .hero-scan{ animation:softPulse 5s ease-in-out infinite; }

  .reveal{
    opacity:0;
    transform:translateY(26px);
    transition:opacity .7s cubic-bezier(.16,.8,.3,1), transform .7s cubic-bezier(.16,.8,.3,1);
  }
  .reveal.in-view{ opacity:1; transform:translateY(0); }
  .reveal:nth-child(2){ transition-delay:.09s; }
  .reveal:nth-child(3){ transition-delay:.18s; }
  .reveal:nth-child(4){ transition-delay:.27s; }
  .reveal:nth-child(5){ transition-delay:.36s; }
  .reveal:nth-child(6){ transition-delay:.45s; }
  .reveal:nth-child(7){ transition-delay:.54s; }
  .reveal:nth-child(8){ transition-delay:.63s; }

  /* interactive lift */
  .product-card, .stat, .leader-card, .mission-card, .field-photo, .contact-card, .gallery-grid .field-photo{
    transition:transform .35s cubic-bezier(.16,.8,.3,1), box-shadow .35s ease, border-color .35s ease;
  }
  .product-card:hover, .leader-card:hover, .mission-card:hover, .contact-card:hover{
    transform:translateY(-6px);
    box-shadow:0 16px 32px rgba(22,48,42,0.12);
  }
  .stat:hover{ transform:translateY(-4px); }
  .field-photo{ transition:transform .5s cubic-bezier(.16,.8,.3,1), box-shadow .35s ease; }
  .field-photo:hover{ transform:translateY(-4px); box-shadow:0 16px 30px rgba(22,48,42,0.16); }
  .field-photo img{ transition:transform .6s cubic-bezier(.16,.8,.3,1); }
  .field-photo:hover img{ transform:scale(1.06); }
  .product-photo img{ transition:transform .6s cubic-bezier(.16,.8,.3,1); }
  .product-card:hover .product-photo img{ transform:scale(1.05); }

  .btn{ transition:background .25s ease, transform .25s ease, box-shadow .25s ease; }
  .btn:hover{ transform:translateY(-2px); }
  .btn-primary:hover{ box-shadow:0 8px 18px rgba(79,168,201,0.35); }

  .logo .mark{ transition:transform .5s ease; }
  .logo:hover .mark{ transform:rotate(24deg); }

  .nav-cta{ transition:background .25s ease, transform .25s ease; }
  .nav-cta:hover{ transform:translateY(-2px); }

  @media (prefers-reduced-motion: reduce){
    html{ scroll-behavior:auto; }
    *{ animation:none !important; transition:none !important; }
    .reveal{ opacity:1 !important; transform:none !important; }
  }

      `}</style>


      <header className="site-nav">
        <div className="nav-inner">
          <div className="logo">
            <svg className="mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#1F6F78" strokeWidth="2" />
              <path d="M20 6 L20 20 L31 26" stroke="#1F6F78" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 20 A11 11 0 0 1 20 9" stroke="#4FA8C9" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Biro Power <span className="byjo">Byjo</span>
          </div>
          <nav className="links">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#gallery">Field</a>
            <a href="#reach">Reach</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="tel:+917942959837">Call +91 79429 59837</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-scan"></div>
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Patna, Bihar · Est. 2021</div>
            <h1>Machines built<br />for the <span>small<br />farmer's</span> field</h1>
            <p className="sub">Biro Power designs and manufactures smart, eco-friendly harvesting equipment, assistive mobility products, and waste-management machinery — engineered in Bihar, for rural India.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#products">See the catalog</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="field-photo hero-photo">
              <img src="https://images.pexels.com/photos/30576880/pexels-photo-30576880.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Combine harvester working a golden wheat field under a blue sky" loading="lazy" />
              <span className="tag">Byjo Series — In The Field</span>
              <div className="corner"></div>
              <div className="hero-gear">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle r="10" cx="20" cy="20" stroke="#4FA8C9" strokeWidth="2" />
                  <circle r="3" cx="20" cy="20" stroke="#4FA8C9" strokeWidth="2" />
                  <g stroke="#4FA8C9" strokeWidth="2">
                    <line x1="20" y1="6" x2="20" y2="10" />
                    <line x1="20" y1="30" x2="20" y2="34" />
                    <line x1="6" y1="20" x2="10" y2="20" />
                    <line x1="30" y1="20" x2="34" y2="20" />
                    <line x1="10.5" y1="10.5" x2="13" y2="13" />
                    <line x1="27" y1="27" x2="29.5" y2="29.5" />
                    <line x1="10.5" y1="29.5" x2="13" y2="27" />
                    <line x1="27" y1="13" x2="29.5" y2="10.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="founder-strip">
          <div className="wrap">
            <span>Founded by <strong>Rajnish Kumar</strong>, son of a farmer, with deep roots in Bihar</span>
            <span>·</span>
            <span>CIN <strong>U31900BR2021PTC049916</strong></span>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="wrap stats-grid">
          <div className="stat reveal">
            <div className="num">2021</div>
            <div className="lbl">Incorporated 6 Jan</div>
          </div>
          <div className="stat reveal">
            <div className="num">15+</div>
            <div className="lbl">Employees</div>
          </div>
          <div className="stat reveal">
            <div className="num">Top 5</div>
            <div className="lbl">National agri-tech startups</div>
          </div>
        </div>
      </div>

      <section id="about">
        <div className="wrap about-grid">
          <div className="about-copy reveal">
            <div className="eyebrow">About Biro Power</div>
            <h2 style={{ marginTop: '14px', fontSize: 'clamp(28px,3.6vw,44px)' }}>Engineering built<br />on a farmer's field</h2>
            <p className="lead">Rajnish Kumar grew up the son of a farmer in Bihar. Biro Power exists because he watched that work up close, and set out to build machines small and marginal farmers could actually afford and maintain.</p>
            <p>Registered as Biro Power Private Limited on 6 January 2021 and headquartered in Patna, the company designs smart, eco-friendly harvesting machinery under the Byjo trademark, alongside assistive mobility products and industrial recycling equipment — a deliberately wide base for a young manufacturing company still finding its scale.</p>
            <p>The team is small — 15 people — and close to the ground it builds for, working directly with rural buyers across Bihar rather than through distant intermediaries.</p>
            <div className="founders-lines">
              <div>
                <span className="fname">Rajnish Kumar</span>
                <span className="frole">Founder &amp; CEO</span>
                <p>An alumnus of the Indian Institute of Management Kashipur, Rajnish has led the company since its incorporation in January 2021, drawing on his own background as the son of a farmer in Bihar.</p>
              </div>
              <div>
                <span className="fname">Maya Ramsamujh Verma</span>
                <span className="frole">Co-Founder &amp; Director</span>
                <p>Also a director at Biputri Innovation Private Limited and Oyra (OPC) Private Limited, Maya represented Biro Power at the President's Secretariat's Independence Day "At Home" reception at Rashtrapati Bhavan.</p>
              </div>
            </div>
          </div>
          <div className="mission-card reveal">
            <div className="eyebrow">Mission</div>
            <p>Put smart, sustainable machinery within reach of the smallholder — the farmer working one or two acres, not a hundred.</p>
            <div className="target">
              <div>
                <div className="n">10,000+</div>
                <div className="t">Villages Targeted</div>
              </div>
              <div>
                <div className="n">1M</div>
                <div className="t">Farmers by 2030</div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap about-photos">
          <div className="field-photo reveal">
            <img src="https://images.pexels.com/photos/10221660/pexels-photo-10221660.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Senior farmer harvesting wheat by hand in a sunlit field" loading="lazy" />
            <span className="tag">Rooted in the field</span>
            <div className="corner"></div>
          </div>
          <div className="field-photo reveal">
            <img src="https://images.pexels.com/photos/10745253/pexels-photo-10745253.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Farmers on a tractor preparing soil for planting" loading="lazy" />
            <span className="tag">Preparing the soil</span>
            <div className="corner"></div>
          </div>
        </div>
      </section>

      <section id="products" style={{ background: 'var(--parchment)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Product Catalog</div>
              <h2>Three lines,<br />one workshop</h2>
            </div>
            <p className="desc">From the harvest itself, to getting around after an injury, to what happens to waste once it's collected — Biro Power's catalog spans agri-tech, assistive mobility, and industrial machinery.</p>
          </div>

          {/* Agri-Tech */}
          <div className="cat-block">
            <div className="cat-head">
              <svg className="icon" viewBox="0 0 40 40" fill="none"><path d="M8 30 L20 8 L32 30 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M8 30 H32" stroke="currentColor" strokeWidth="2" /><circle cx="20" cy="30" r="3" stroke="currentColor" strokeWidth="2" /></svg>
              <h3>Agri-Tech Solutions</h3>
              <span className="cat-note">Byjo™ Trademark</span>
            </div>
            <div className="product-grid">
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/byjo-drum-unit.webp" alt="Byjo-branded processing drum built by Biro Power, under incubation of ICIIT Patna" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Byjo Smart Harvester</h4>
                <span className="flag">Eco-friendly</span>
              </div>
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/byjo-e-vehicle.webp" alt="Byjo E-Vehicle, a canopied electric three-wheeler prototype by Biro Power" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Byjo E-Vehicle (GT Tricycle)</h4>
                <span className="flag">Prototype — Patent in progress</span>
              </div>
            </div>
          </div>

          {/* Assistive Mobility */}
          <div className="cat-block">
            <div className="cat-head">
              <svg className="icon" viewBox="0 0 40 40" fill="none"><circle cx="11" cy="30" r="6" stroke="currentColor" strokeWidth="2" /><circle cx="29" cy="30" r="6" stroke="currentColor" strokeWidth="2" /><path d="M11 30 L20 14 L29 30 M20 14 L16 24 H27" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
              <h3>Assistive Mobility</h3>
              <span className="cat-note">IndiaMART listing</span>
            </div>
            <div className="product-grid">
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/tricycle-motorized.webp" alt="Handicapped motorized tricycle with padded seat, backrest, and battery box" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Handicapped Motorized Tricycle</h4>
              </div>
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/tricycle-hand-operated.webp" alt="Hand-operated tricycle with padded seat and footrest" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Hand Operated Tricycle</h4>
              </div>
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/tricycle-handicapped-lever.webp" alt="Handicapped tricycle with hand-lever chain drive, padded seat and backrest" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Handicapped Tricycle</h4>
              </div>
            </div>
          </div>

          {/* Industrial */}
          <div className="cat-block">
            <div className="cat-head">
              <svg className="icon" viewBox="0 0 40 40" fill="none"><rect x="8" y="10" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="2" /><path d="M8 18 H32 M16 10 V30 M24 10 V30" stroke="currentColor" strokeWidth="1.6" /></svg>
              <h3>Industrial &amp; Waste Management</h3>
              <span className="cat-note">IndiaMART listing</span>
            </div>
            <div className="product-grid">
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/plastic-shredder-machine.webp" alt="Byjo organic and plastic shredder machine, wrapped for delivery" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Organic / Plastic Shredder Machine</h4>
              </div>
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/plastic-baler-machine.webp" alt="Byjo waste plastic baler machine on a workshop floor" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Waste Plastic Baler Machine</h4>
              </div>
            </div>
          </div>

          {/* Outdoor Fitness Equipment */}
          <div className="cat-block">
            <div className="cat-head">
              <svg className="icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="2" /><path d="M20 14 V26 M20 18 H30 M20 18 H10 M20 26 L14 34 M20 26 L26 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              <h3>Outdoor Fitness Equipment</h3>
              <span className="cat-note">IndiaMART listing</span>
            </div>
            <div className="product-grid">
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/gym-quad-spinner.webp" alt="Four-seat outdoor gym spinner / twister station" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Quad Spinner Station</h4>
              </div>
              <div className="product-card reveal">
                <div className="product-photo">
                  <img src="/images/gym-double-station.webp" alt="Double-sided outdoor gym pull-down / leg press station" loading="lazy" />
                </div>
                <div className="corner"></div>
                <h4>Double Pull-Down Station</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="tight" style={{ background: 'var(--parchment)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">In The Field</div>
              <h2>Where the<br />machines work</h2>
            </div>
            <p className="desc">From soil preparation through to harvest, Biro Power's line is built around the actual rhythm of a Bihar growing season — not a showroom floor.</p>
          </div>
          <div className="gallery-grid">
            <div className="field-photo reveal">
              <img src="https://images.pexels.com/photos/28412626/pexels-photo-28412626.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Aerial view of green crops and tilled brown soil in patchwork farmland" loading="lazy" />
              <span className="tag">Field Patterns</span>
              <div className="corner"></div>
            </div>
            <div className="field-photo reveal">
              <img src="https://images.pexels.com/photos/12442358/pexels-photo-12442358.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Aerial top view of a tractor plowing a field" loading="lazy" />
              <span className="tag">Soil Preparation</span>
              <div className="corner"></div>
            </div>
            <div className="field-photo reveal">
              <img src="https://images.pexels.com/photos/2275222/pexels-photo-2275222.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Close-up of golden wheat stalks ready for harvest" loading="lazy" />
              <span className="tag">Harvest Ready</span>
              <div className="corner"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="reach" className="reach">
        <div className="wrap reach-grid">
          <div className="reveal">
            <div className="eyebrow">Reach</div>
            <h2>From one village<br />to ten thousand</h2>
            <p>Biro Power's machinery already moves through rural Bihar. The plan is to carry it much further — village by village, not through mass distribution but through the same close, direct relationships the company started with.</p>
            <div className="reach-figures">
              <div>
                <div className="n">10,000+</div>
                <div className="t">Villages targeted for deployment</div>
              </div>
              <div>
                <div className="n">1M</div>
                <div className="t">Farmers to be served by 2030</div>
              </div>
            </div>
            <div className="recognition">
              Recognized as an emerging rural agri-tech disruptor and ranked among the <strong>top 5 startups nationally</strong> by the Startup Bihar initiative — an honor that took co-founder <strong>Maya Ramsamujh Verma</strong> to the President's Secretariat's Independence Day "At Home" reception at Rashtrapati Bhavan.
            </div>
          </div>
          <div className="reach-art reveal">
            <svg viewBox="0 0 460 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="reach-ping" cx="230" cy="200" r="6" fill="#4FA8C9" />
              <circle className="reach-ping" cx="230" cy="200" r="6" fill="#4FA8C9" />
              <circle className="reach-ping" cx="230" cy="200" r="6" fill="#4FA8C9" />
              <circle className="reach-beacon" cx="230" cy="200" r="6" fill="#4FA8C9" />
              <g stroke="#E6EFE2" strokeOpacity="0.35">
                <circle cx="230" cy="200" r="60" fill="none" />
                <circle cx="230" cy="200" r="110" fill="none" />
                <circle cx="230" cy="200" r="160" fill="none" />
              </g>
              {/* radiating village nodes */}
              <g className="villages" fill="#E6EFE2">
                <circle cx="230" cy="140" r="4" />
                <circle cx="285" cy="160" r="3.5" />
                <circle cx="310" cy="200" r="4" />
                <circle cx="290" cy="255" r="3.5" />
                <circle cx="230" cy="285" r="4" />
                <circle cx="170" cy="255" r="3.5" />
                <circle cx="150" cy="200" r="4" />
                <circle cx="170" cy="150" r="3.5" />
                <circle cx="230" cy="90" r="3" />
                <circle cx="340" cy="140" r="3" />
                <circle cx="370" cy="220" r="3" />
                <circle cx="330" cy="305" r="3" />
                <circle cx="230" cy="335" r="3" />
                <circle cx="130" cy="300" r="3" />
                <circle cx="95" cy="215" r="3" />
                <circle cx="120" cy="130" r="3" />
              </g>
              <text x="230" y="205" fill="#16302A" fontFamily="IBM Plex Mono, monospace" fontSize="10" textAnchor="middle" opacity="0.7">PATNA</text>
            </svg>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <div className="eyebrow">Contact</div>
            <h2 style={{ marginTop: '14px', fontSize: 'clamp(28px,3.6vw,44px)' }}>Talk to the workshop</h2>
            <ul className="contact-list">
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M4 5c0-1 1-1 1-1h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3s0 1-1 1c-8 0-14-6-14-14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                <div>
                  <div className="label">Phone</div>
                  <a className="value" href="tel:+917942959837">+91 79429 59837</a>
                </div>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.6" /></svg>
                <div>
                  <div className="label">Email</div>
                  <a className="value" href="mailto:biropowr@gmail.com">biropowr@gmail.com</a>
                </div>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" /></svg>
                <div>
                  <div className="label">Registered Address</div>
                  <div className="value">Indu Villa, Sanatan Colony, Bhootnath Road, B.H.C., Patna, Bihar, 800026</div>
                </div>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M7 10v7M7 7.2v.1M11.5 17v-4.5c0-1.4 1-2.5 2.4-2.5 1.3 0 2.1 1 2.1 2.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                <div>
                  <div className="label">Founder — LinkedIn</div>
                  <a className="value" href="https://www.linkedin.com/" target="_blank" rel="noopener">Rajnish Kumar</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-card reveal">
            <h3>Sourcing or partnership enquiry?</h3>
            <p>For product specifications, bulk pricing, or distribution in your district, reach the team directly by phone or email — Biro Power responds to farmers and buyers first-hand.</p>
            <a className="btn btn-primary" href="mailto:biropowr@gmail.com">Email Biro Power</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-inner">
            <div className="fmark">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" stroke="#4FA8C9" strokeWidth="2" /><path d="M20 6 L20 20 L31 26" stroke="#4FA8C9" strokeWidth="2" strokeLinecap="round" /></svg>
              Biro Power Pvt Ltd
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--steel)' }}>Patna, Bihar · CIN U31900BR2021PTC049916</div>
          </div>
          <div className="footer-bottom">
            <div className="fine">© 2026 Biro Power Private Limited.</div>
            <div className="fine">Developed by Kynyx Solution.</div>
          </div>
        </div>
      </footer>


    </>
  );
}
