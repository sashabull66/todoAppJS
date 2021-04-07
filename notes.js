let activeBtn = document.querySelector('#active');
let allBtn = document.querySelector('#all');
let doneBtn = document.querySelector('#done');
let progressBar = document.querySelector('.sort__progress-bar')
const allButtons = document.querySelectorAll('.sort__bar')


progressBar.addEventListener('click', function (event) {
allButtons.forEach(n => n.classList.remove('sort--selected-bar')) // очищаю класс перед запуском
    event.target.classList.toggle('sort--selected-bar')

})

function parseClassList (element) { // проверка на наличие класса
    let x = element.previousElementSibling.classList.contains('sort--selected-bar')
    let y = element.nextElementSibling.classList.contains('sort--selected-bar')
    if (x) {
        element.previousElementSibling.classList.remove('sort--selected-bar')
    }
    else if (y) {
        element.nextElementSibling.classList.remove('sort--selected-bar')
    }
}

