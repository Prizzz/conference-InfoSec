import './styles/main.sass';
AOS.init();

const accordeon = document.querySelector('.schedule');

accordeon.addEventListener('click', (e) => {
  const t = e.target;
  if (t.classList.contains('schedule-plus')) {
    const details = t.previousElementSibling.lastElementChild;
    t.classList.toggle('active-plus');
    if (details.style.maxHeight) {
      details.style.maxHeight = null;
      details.style.animation = 'margin 0.3s forwards';
    } else {
      details.style.maxHeight = details.scrollHeight + 'px';
      details.style.marginTop = '30px';
      details.style.animation = null;
    }
  }
});
