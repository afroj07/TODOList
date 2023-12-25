
let todoList = [
    {
       
    }
];



function addToDo(){
    let InputElement = document.querySelector('#todo-input');
    let dateInput = document.querySelector("#todo-date");
     let todoItem = InputElement.value;
     let dueDate =  dateInput.value;
     todoList.push({item:todoItem, date:dueDate});
     InputElement.value='';
     dateInput.value='';
     displayItem();
}
function displayItem(){
    let itemContainer = document.querySelector('.todo-container');
    let itemBox='';
    for(let i=1; i<todoList.length; i++){
        let {item,date} = todoList[i];
        itemBox +=  `<span>${item}</span> 
        <span>${date}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItem();">Delete</button>
        <hr>
      `;
    }
    itemContainer.innerHTML = itemBox;
}
