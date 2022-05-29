const dateElement = document.getElementById("date");

const daily= {weekday: "long" , month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US",daily);


const todoInput = document.querySelector('.add');
const todoButton = document.querySelector('.add-btn');
const todoList = document.querySelector('.list');


todoButton.addEventListener('click' ,addAgenda);
todoList.addEventListener('click', deletetask);


function addAgenda(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newOperation = document.createElement('li');
    newOperation.innerText = todoInput.value ;
    newOperation.classList.add('item');
    todoDiv.appendChild(newOperation);


    const taskcomplete = document.createElement('button');
    taskcomplete.innerHTML = '<i class="fa fa-check"></i>';
    taskcomplete.classList.add("complete-btn");
    todoDiv.appendChild(taskcomplete);

    const trashtask = document.createElement('button');
    trashtask.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    trashtask.classList.add("trash-btn");
    todoDiv.appendChild(trashtask);
    todoList.appendChild(todoDiv);

    todoInput.value= "";
}

function deletetask(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", e => {
        todo.remove();
      });
    }
    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }
  