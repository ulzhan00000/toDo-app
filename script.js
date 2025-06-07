// 1. Загружаем задачи из localStorage или создаём пустой список
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// 2. Функция отображения задач
function updateTodoList() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        const span = document.createElement("span");
        span.textContent = todo.text;

        const div = document.createElement("div");
        div.className = "d-flex gap-2";

        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-primary btn-sm";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const newText = prompt("Введите новое название", todo.text);
            if (newText) editTodo(todo.id, newText);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

        div.append(editBtn, deleteBtn);
        listItem.append(span, div);
        todoList.appendChild(listItem);
    });

    // 3. Сохраняем список в localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 4. Добавление новой задачи
function addTodo() {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (text === "") return;

    const newTodo = {
        id: Date.now(),
        text: text
    };

    todos.push(newTodo);
    input.value = "";
    updateTodoList();
}

// 5. Удаление задачи
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    updateTodoList();
}

// 6. Редактирование задачи
function editTodo(id, newText) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todos[index].text = newText;
        updateTodoList();
    }
}

// 7. Обработчик кнопки "Добавить"
document.getElementById("addBtn").addEventListener("click", addTodo);

// 8. Загружаем задачи при старте
updateTodoList();
