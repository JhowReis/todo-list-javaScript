const inputTask = document.querySelector('.input-task')//INPUT
const btnAddTask = document.querySelector('.btn-add-task')//BTN
const tasks = document.querySelector('.tasks')//UL

btnAddTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    console.log(inputTask.value);
});