

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

        
        editBtn.addEventListener("click",()=>{
            const newText=prompt("Введите новое название",todo.text)
        
            if(!newText) newText=todo.text
            editTodo(todo.id,newText)
        })
        const deleteBtn=document.createElement("button")
        deleteBtn.className="btn btn-danger btn-sm ml-2"
        deleteBtn.textContent="Delete"

        
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



function deleteTodo(id){
    todos=todos.filter((todo)=> todo.id!==id);
    updateTodoList()
   
}




function editTodo(id,newText){
    const todoIndex = todos.findIndex((todo) =>todo.id===id)
    console.log(todoIndex)

    todos[todoIndex].text=newText
    updateTodoList()
}
