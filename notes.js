let activeBtn = document.querySelector('#active');
let allBtn = document.querySelector('#all');
let doneBtn = document.querySelector('#done');
let progressBar = document.querySelector('.sort__progress-bar')

progressBar.addEventListener('click', function (event) {
    parseClassList (event.target)
    event.target.classList.toggle('sort--selected-bar')

})

function parseClassList (element) {
    let x = element.previousElementSibling.classList.contains('sort--selected-bar')
    let y = element.nextElementSibling.classList.contains('sort--selected-bar')
    if (x) {
        element.previousElementSibling.classList.remove('sort--selected-bar')
    }
    else if (y) {
        element.nextElementSibling.classList.remove('sort--selected-bar')
    }
}