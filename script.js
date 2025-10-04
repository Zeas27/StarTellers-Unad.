
document.addEventListener('DOMContentLoaded', function(){
  const pages = Array.from(document.querySelectorAll('.page'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const indicator = document.getElementById('page-indicator');
  let current = 0;
  const total = pages.length;

  function show(idx){
    pages.forEach((p,i)=>{
      if(i===idx){
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
    indicator.textContent = (idx+1) + ' / ' + total;
    // toggle buttons
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === total - 1;
  }

  prevBtn.addEventListener('click', ()=>{
    if(current>0){ current--; show(current); }
  });
  nextBtn.addEventListener('click', ()=>{
    if(current<total-1){ current++; show(current); }
  });

  // enable keyboard navigation (left/right)
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'ArrowLeft') prevBtn.click();
  });

  // show first page
  show(0);
});
