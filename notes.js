const allBtn = document.querySelector('#all'); // раздел all
const activeBtn = document.querySelector('#active'); // раздел Active
const doneBtn = document.querySelector('#done'); // раздел Done
const progressBar = document.querySelector('.sort__progress-bar') // контейнер с кнопками для фильтра
const allButtons = document.querySelectorAll('.sort__bar') // все кнопки для фильтра
const doneNotes = document.querySelectorAll('.output__note--done') // выполненные заменки
const activeNotes1 = document.querySelectorAll('.output__note--basic') // активные заметки
const activeNotes2 = document.querySelectorAll('.output__note--important') // активные заметки

const outputWindows = document.querySelector('.output')

outputWindows.addEventListener('click', (event) => {
    console.log(event.target.classList[0]);
    if (event.target.classList[0] === 'output__btn-basic') { /* если клик был по зеленой кнопке */
        let x = event.target.closest('.output__note'); /* ближайший родитель с классом output__note */
        x.className = 'output__note' /* оставляю только общий класс */
        x.classList.add('output__note--important') /* добавляю класс отметить важным */
    }
    else if (event.target.classList[0] === 'output__btn-important') {
        let x = event.target.closest('.output__note'); /* ближайший родитель с классом output__note */
        x.className = 'output__note' /* оставляю только общий класс */
        x.classList.add('output__note--basic') /* добавляю класс отметить важным */
    }
    else if (event.target.classList[0] === undefined) {
        let x = event.target.closest('.output__note'); /* ближайший родитель с классом output__note */
        x.className = 'output__note' /* оставляю только общий класс */
        x.classList.add('output__note--done') /* добавляю класс отметить важным */
    }

})


function start() { // дефолтная сортировка all при запуске
    allBtn.classList.toggle('sort--selected-bar')
}

start(); // дефолтная сортировка all

function sort(event) { // сортировщик
    if (event.target === activeBtn) { // если активна вкладка active
        doneNotes.forEach(DoneNotes => DoneNotes.style.display = 'none')
        activeNotes1.forEach(ActiveNotes1 => ActiveNotes1.style.display = 'block')
        activeNotes2.forEach(ActiveNotes2 => ActiveNotes2.style.display = 'block')
    } else if (event.target === doneBtn) {
        activeNotes1.forEach(ActiveNotes1 => ActiveNotes1.style.display = 'none')
        activeNotes2.forEach(ActiveNotes2 => ActiveNotes2.style.display = 'none')
        doneNotes.forEach(DoneNotes => DoneNotes.style.display = 'block')
    } else if (event.target === allBtn) {
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

