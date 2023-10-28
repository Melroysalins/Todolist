document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    taskList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        }
    });

    function addTask(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${text}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);
    }
});
