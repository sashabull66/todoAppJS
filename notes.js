const allSortButton = document.querySelector('#all'); // кнопка all в сортировщике
const activeSortButton = document.querySelector('#active'); // кнопка Active в сортировщике
const doneSortButton = document.querySelector('#done'); // кнопка Done в сортировщике
const progressSortBar = document.querySelector('.sort__progress-bar'); // контейнер с кнопками для сортировки
const outputWindow = document.querySelector('.output'); // вся секция с заметками
const inputTextWindow = document.getElementById('input'); // окно ввода текста
const addNewNoteButton = document.getElementById('add'); // кнопка ADD

function pushElementsToLocalStorage(parentName) { // данная функция обновляет localStorage удаляя/добавляя элементы внутри parentName
    window.localStorage.setItem('notes', parentName.innerHTML)
}

function createElementsFromLocalStorage(parentName) { // данная функция создает элементы из localStorage внутри parentName
    parentName.innerHTML = window.localStorage.getItem('notes')
}

function createElement(parentName, inputText) { // данная функция создает базовый элемент внутри parentName при наличии данных в inputText и добавляет этот текст внутрь
    if (inputText.value !== '') {
        let newElement = document.createElement('div'); // обертка *
        newElement.classList.add('output__note--basic');
        newElement.innerHTML = '<div class="output__btn-area">' +
            '   <button class="output__btn-done">' +
            '   <img src="img/del.svg" alt=""><' +
            '/button> ' +
            '<button class="output__btn-important">NOT IMPORTANT</button> ' +
            '<button class="output__btn-basic">MARK IMPORTANT</button>' +
            '</div>'
        let span = document.createElement("span")
        span.innerText = inputText.value
        newElement.append(span)
        parentName.append(newElement)
        inputText.value = '';
    }
}

function sortElements(allBtn, actBtn, doneBtn) { // данная функция в зависимости от положения переключателя сортировщика, отображает/убирает нужные элементы
    if (allBtn.classList.contains('sort--selected-bar')) {
        console.log('all is selected')
        for (let x = 0; x <= outputWindow.children.length - 1; x++) {
            outputWindow.children[x].style.display = 'block'
        }
    } else if (actBtn.classList.contains('sort--selected-bar')) {
        console.log('active is selected')

        for (let y = 0; y <= outputWindow.children.length - 1; y++) { // данный цикл отображает всех детей outputWindow
            outputWindow.children[y].style.display = 'block'
        }
        for (let x = 0; x <= outputWindow.children.length - 1; x++) {
            if (outputWindow.children[x].classList.contains('output__note--done')) {
                outputWindow.children[x].style.display = 'none'
            }
        }
    } else if (doneBtn.classList.contains('sort--selected-bar')) {
        console.log('done is selected')

        for (let y = 0; y <= outputWindow.children.length - 1; y++) { // данный цикл убирает класс hide у всех детей outputWindow
            outputWindow.children[y].style.display = 'block'
        }

        for (let x = 0; x <= outputWindow.children.length - 1; x++) {
            if (outputWindow.children[x].classList.contains('output__note--basic') || outputWindow.children[x].classList.contains('output__note--important')) {
                outputWindow.children[x].style.display = 'none'
            }
        }
    }
}

function sortBarButtonToggle(parentName) {
    parentName.addEventListener('click', (event) => {
        let temp = parentName.children.length - 1
        for (let x = 0; x <= temp; x++) {
            parentName.children[x].classList.remove('sort--selected-bar')
        }
        event.target.classList.toggle('sort--selected-bar')
        parentName.classList.remove('sort--selected-bar')
        sortElements(allSortButton, activeSortButton, doneSortButton)
    })

}

function defaultFirstSortElements(allBtn) { // данная функция устанавливает переключатель фильтра в положение ALL и запускает фильтр
    allBtn.classList.toggle('sort--selected-bar')
    sortElements(allSortButton, activeSortButton, doneSortButton)


}

function childrenClassListSwitcher(parentName) {
    parentName.addEventListener('click', (event) => {
        console.log(event.target.closest('.output__btn-done'))

        // по клику на блок с заметкой придаю ему статус выполненного:
        if (event.target.classList.contains('output__note--important') || event.target.classList.contains('output__note--basic')) {
            event.target.classList = 'output__note--done';
            pushElementsToLocalStorage(outputWindow)
        }

        // по клику на мусорку удалить этот элемент из dom
        else if (event.target.closest('.output__btn-done')) {
            if (event.target.closest('.output__note--important')) {
                event.target.closest('.output__note--important').remove()
                pushElementsToLocalStorage(outputWindow)
            } else if (event.target.closest('.output__note--basic')) {
                event.target.closest('.output__note--basic').remove()
                pushElementsToLocalStorage(outputWindow)
            }
        }
    })
}

childrenClassListSwitcher(outputWindow)


createElementsFromLocalStorage(outputWindow);

sortBarButtonToggle(progressSortBar);

defaultFirstSortElements(allSortButton)

addNewNoteButton.addEventListener('click', () => {
    createElement(outputWindow, inputTextWindow)
    pushElementsToLocalStorage(outputWindow)
})