const allBtn = document.querySelector('#all'); // раздел all
const activeBtn = document.querySelector('#active');
const doneBtn = document.querySelector('#done');
let progressBar = document.querySelector('.sort__progress-bar')
const allButtons = document.querySelectorAll('.sort__bar')
const doneNotes = document.querySelectorAll('.output__note--done') // выполненные заменки
const activeNotes1 = document.querySelectorAll('.output__note--basic') // активные заметки
const activeNotes2 = document.querySelectorAll('.output__note--important') // активные заметки

function start () { // дефолтная сортировка all
    allBtn.classList.toggle('sort--selected-bar')
}

start(); // дефолтная сортировка all

function sort (event) { // сортировщик
    if (event.target === activeBtn) { // если активна вкладка active
        doneNotes.forEach(DoneNotes => DoneNotes.style.display = 'none')
        activeNotes1.forEach(ActiveNotes1 => ActiveNotes1.style.display = 'block')
        activeNotes2.forEach(ActiveNotes2 => ActiveNotes2.style.display = 'block')
    }
    else if (event.target === doneBtn) {
        activeNotes1.forEach(ActiveNotes1 => ActiveNotes1.style.display = 'none')
        activeNotes2.forEach(ActiveNotes2 => ActiveNotes2.style.display = 'none')
        doneNotes.forEach(DoneNotes => DoneNotes.style.display = 'block')
    }
    else if (event.target === allBtn) {
        doneNotes.forEach(DoneNotes => DoneNotes.style.display = 'block')
        activeNotes1.forEach(ActiveNotes1 => ActiveNotes1.style.display = 'block')
        activeNotes2.forEach(ActiveNotes2 => ActiveNotes2.style.display = 'block')

    }
}

progressBar.addEventListener('click', function (event) { // смена состояния кнопок фильтра
allButtons.forEach(n => n.classList.remove('sort--selected-bar')) // очищаю класс перед запуском
    event.target.classList.toggle('sort--selected-bar')
    sort(event)
})