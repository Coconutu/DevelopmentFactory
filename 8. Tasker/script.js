const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener('click', doSubmitButton);

function doSubmitButton(event) {
    event.preventDefault();
    var taskInputText = document.querySelector(".input-task").value;
   if (taskInputText.trim() === "") {
        alert("Please enter a task.");
        return;
    }   
    const lista=document.querySelector(".lista");
    const newTask = document.createElement("li");
    newTask.textContent = taskInputText;
    lista.appendChild(newTask);
    newTask.classList.add("task-item");
    newTask.addEventListener('click', function() {
        newTask.textContent = "Completed: " + taskInputText;
    
        newTask.classList.add("completed-task");
    });   
    
}
const clearListBtn = document.querySelector(".clear-list-btn");
clearListBtn.addEventListener('click', doClearListButton);
function doClearListButton(event) {
    event.preventDefault();
    const lista=document.querySelector(".lista");
    lista.innerHTML = '';
}
