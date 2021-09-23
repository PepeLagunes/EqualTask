//Selectores
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo')
let opcionesValor= document.querySelector('.opciones-valor')

//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener("click", filterTodo)


//funciones
function addTodo(event){
    event.preventDefault();
    //Generando Elementos de lista contenidos en div
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Generando Lista
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoDiv.style.fontFamily = 'Indie Flower';
    //Marca de checado
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Close boton
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Agregando a la lista
    todoList.appendChild(todoDiv);
    
    //Agregar opcines de valor de tarea
    let opcionValor = document.createElement('select');
    opcionValor.classList.add('opciones-valor')
    for (let i=0; i<5; i++){
        let opcionesItem = document.createElement('option');
        opcionesItem.classList.add('opciones-item');
        opcionesItem.innerText = i+1;
        opcionesItem.value = i+1;
        opcionValor.appendChild(opcionesItem)
    }
    todoDiv.appendChild(opcionValor)
    //Limpiar el input
    todoInput.value = "";
}

function deleteCheck(event){
    let item = event.target;
    //borrar
    if(item.classList[0] === 'trash-btn'){
        let todo = item.parentElement;
        //animacion de caida
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //Checkmark
    if(item.classList[0] === 'completed-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodo(e){
    let todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }            
    })
}