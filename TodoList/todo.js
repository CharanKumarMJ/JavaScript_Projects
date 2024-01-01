let todoList = [
    {
        item:'first task', 
        dueDate:'26-12-2023'
    },
    {
        item:'second task', 
        dueDate:'26-12-2023'
    },
];
toDoDisplay();

function addToDo() {
    let inputElement = document.querySelector('#inbox');
    let dateElement = document.querySelector('#date-box');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem, dueDate:todoDate});
    localStorage.setItem('TODO',JSON.stringify(todoList));
    inputElement.value = '';
    dateElement.value ='';
    toDoDisplay();
}

function toDoDisplay() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item,dueDate} = todoList[i]
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span> 
        <button class="delete-button" onclick="todoList.splice(${i},1);
        toDoDisplay();">Delete</button>`;
    }
    containerElement.innerHTML = newHtml; 
    
}