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
    saveTask();
}


btnAddTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    addTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('clear')) {
        element.parentElement.remove();
        saveTask();
    }
});

function saveTask() {
    const taskLi = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of taskLi) {
        let taskText = task.innerText;
        taskText = taskText.replace('Clear', '').trim();
        taskList.push(taskText);
    }
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('task', taskJSON);
}

function addSaveTask() {
    const task = localStorage.getItem('task');
    const taskList = JSON.parse(task);

    for (let task of taskList) {
        addTask(task);
    }
}
addSaveTask();