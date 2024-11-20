const taskInput = document.getElementById('taskInput');
const taskDisplay = document.getElementById('taskDisplay');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearTasksBtn = document.getElementById('clearTasksBtn');


addTaskBtn.addEventListener('click', addTask);


clearTasksBtn.addEventListener('click', clearTasks);


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

   
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '×';
    removeBtn.addEventListener('click', () => listItem.remove());

    
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    listItem.appendChild(removeBtn);
    taskDisplay.appendChild(listItem);

    
    taskInput.value = '';
}


function clearTasks() {
    if (confirm('Tem certeza de que deseja limpar todas as tarefas?')) {
        taskDisplay.innerHTML = '';
    }
}
