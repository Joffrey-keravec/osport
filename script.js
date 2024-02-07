console.log('hello world');
const icone = document.querySelector('.fa-bars');
const modal = document.querySelector('.modal');
const home = document.querySelector('.fa-house')
console.log(modal)

icone.addEventListener('click', function () {
    modal.classList.toggle('show-modal');
    icone.classList.toggle('fa-times');
    home.style.display = home.style.display ? '' : 'none';
})