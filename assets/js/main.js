const inputTask = document.querySelector('.input-task')//INPUT
const btnAddTask = document.querySelector('.btn-add-task')//BTN
const tasks = document.querySelector('.tasks')//UL


function createLi() {
    const li = document.createElement('li');
    return li;
}


inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        addTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createBtnClear(li) {
    li.innerText += '';
    const clearBtn = document.createElement('button');
    clearBtn.innerText = 'Clear';
    // clearBtn.classList.add('clear');
    clearBtn.setAttribute('class', 'clear');
    clearBtn.setAttribute('title', 'Clear this task');
    li.appendChild(clearBtn);
}



function addTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createBtnClear(li);
}


btnAddTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    addTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('clear')) {
        element.parentElement.remove();
    }
});