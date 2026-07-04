// Scroll-reveal for sections
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, {threshold:0.15});
  reveals.forEach(el=>io.observe(el));

  // Animated stat counters
  const stats = document.querySelectorAll('.stat .num');
  const statIO = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target').replace(/[^\d]/g,'')) || 0;
        let current = 0;
        const step = Math.max(1, Math.ceil(target/60));
        const timer = setInterval(()=>{
          current += step;
          if(current >= target){ current = target; clearInterval(timer); }
          el.textContent = current.toLocaleString();
        }, 20);
        statIO.unobserve(el);
      }
    });
  }, {threshold:0.5});
  stats.forEach(el=>statIO.observe(el));
