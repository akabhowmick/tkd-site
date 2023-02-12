function myFunction() {
  var btnToggle = document.getElementById("myTopnav");
  let list = document.getElementById("expanded-navbar");
  console.log(list);
  let expanded = btnToggle.getAttribute('aria-expanded')==='true' || false;
  btnToggle.setAttribute('aria-expanded', !expanded);
  if (btnToggle.className === "mobile-menu") {
    btnToggle.className += "responsive";
    list.className = "show";
  } else {
    btnToggle.className = "mobile-menu";
    list.className = "hide";
  }
}

// Modal
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const root = document.documentElement;

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

for(const elem of openModal){
  elem.addEventListener('click', function(){
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  })
}

for(const elem of closeModal){
  elem.addEventListener('click', function(){
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  })
}

document.addEventListener('click', (e)=>{
  if(e.target === document.querySelector('.modal.is-visible')){
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

document.addEventListener('keyup', (e)=>{
  if(e.key === 'Escape'){
    console.log(document.querySelector('.full-site-modal.is-visible'));
    document.querySelector('.full-site-modal.is-visible').classList.remove(isVisible);
  }
})