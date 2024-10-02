document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input
    } else {
        alert('Please enter a task!');
    }
});
