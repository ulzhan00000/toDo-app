console.log("hello alert")
//создаем массив с обЪектами (содержающие id(Уникальное значение потому что берется текущее время .now()) и текст)
let todos=[
    {
        id:Date.now(),
        text:"jump"
    },
    {
        id:Date.now(),
        text:"jump"
    },
    {
        id:Date.now(),
        text:"jump"
    },
]

function updateTodoList(){
    const todoList=document.getElementById("todoList")

    //это команда,  очищает содержимое HTML-элемента с идентификатором todoList.
    //чтоб когда через инпут будем добавлять новые листэлементы старые итемы не добавились
    todoList.innerHTML="";


    todos.forEach((todo)=>{
        const listItem=document.createElement("li");
        listItem.className="list-group-item d-flex justify-content-between align-items-center"
        
        const span=document.createElement("span")
        span.textContent=todo.text

        const div =document.createElement("div")
        div.className="d-flex gap-2"

        const editBtn=document.createElement("button")
        editBtn.className="btn btn-primary btn-sm ml-2"
        editBtn.textContent="Edit"

        //Задание 4
        editBtn.addEventListener("click",()=>{
            const newText=prompt("Введите новое название",todo.text)
            //если нажали на edit и ввели пустое значение то новый текст будет равен старому значению и ничего не поменяется
            if(!newText) newText=todo.text
            editTodo(todo.id,newText)
        })
        const deleteBtn=document.createElement("button")
        deleteBtn.className="btn btn-danger btn-sm ml-2"
        deleteBtn.textContent="Delete"

        //Задание 3
        deleteBtn.addEventListener("click",()=>{
        deleteTodo(todo.id)
    })
        
        div.append(editBtn)
        div.append(deleteBtn)

        listItem.append(span)
        listItem.append(div)

        todoList.append(listItem)

    })
}
updateTodoList()


// Задание 2
//Повесить на button Add event listner, который 
//при нажатии вызывает функцию добавление todo
function addTodo(){
    const inputValue=document.getElementById("input").value

    if (inputValue.trim()==="") return;

    const newTodo={
        id:Date.now(),
        text:inputValue,
    
    }

   
    todos.push(newTodo);
    updateTodoList();

}
document.getElementById("addBtn").addEventListener("click",addTodo)

// Задание 3
//Создать удаления "todo". Создать функцию которая
//принимает id, Найти данный элемент в массиве
// и удалить его из него , Использовать filter на массив

function deleteTodo(id){
    todos=todos.filter((todo)=> todo.id!==id);
    updateTodoList()
   
}



//Задание 4
// Создать изменение "todo". Создать функцию
//которая принимает (id,text). И изменяет элемент в массиве
//у которого id=id,на новый текст . Использовать findIndex на массив и prompt
function editTodo(id,newText){
    const todoIndex = todos.findIndex((todo) =>todo.id===id)
    console.log(todoIndex)

    todos[todoIndex].text=newText
    updateTodoList()
}

//console-> application -> local storage там есть ключ-значения которые никогда е удаляются даже если обновить браузер
localStorage.setItem("cat","Tom")
localStorage.setItem("mode","Dark")
// 1 вариант удаления это очистить кэш браузер второй спасоб как в строке 119
localStorage.removeItem("cat")
//запомни зачения всегда должна быть str тип данных