const taskBtn = document.getElementById("taskBtn");
const resetBtn = document.getElementById("resetBtn");
const inputTask = document.getElementById("inputTask");
let listItems = document.getElementById("listItems");
let taskCount = 0;

taskBtn.onclick = function(){
    if(inputTask.value == ""){
        alert("Enter a task");
    }
    else{
        taskCount += 1;
        let task = inputTask.value;
        listItems.innerHTML += `<p><input type="checkbox" name="taskCompleted" id="list${taskCount}"> ${task}</p>`;
        inputTask.value = "";
    }
}

resetBtn.onclick = function(){
    if(inputTask == ""){
        alert("The list is already empty")
    }
    else{
        taskCount = 0;
        listItems.innerHTML = "";
        inputTask.value = "";
    }
}