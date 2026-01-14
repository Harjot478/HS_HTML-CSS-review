// Theme toggle with localStorage
(function(){
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const setTheme = (theme)=>{
    if(theme==='dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme',theme);
    toggle.textContent = theme==='dark' ? '☀️' : '🌙';
  };
  const saved = localStorage.getItem('theme');
  if(saved) setTheme(saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

  toggle.addEventListener('click',()=>{
    const isDark = root.getAttribute('data-theme')==='dark';
    setTheme(isDark? 'light': 'dark');
  });

  // Simple enhancement: smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
})();
