var todoList = {
    todos: [],
    addTodo:    function(todoText) {
	        this.todos.push({todoText: todoText, completed: false});
        	},
    changeTodo: function(index, todoText) {
	        this.todos[index].todoText = todoText;
        	},
    deleteTodo: function(index) {
		this.todos.splice(index, 1);
        	},
    toggleCompleted: function(index) {
		var todo = this.todos[index];
		todo.completed = !todo.completed;
	        },
    toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
        this.todos.forEach(function(todo){
            if (todo.completed === true) {
                completedTodos++;
            }
        });
        
        this.todos.forEach(function(todo){
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
	}
};

var handlers = {
    addTodo: function(){
        addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
		view.displayTodos();
    },
    changeTodo: function(){
        changeTodoPosition = document.getElementById("changeTodoPosition");
        changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position){
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleTodo: function(){
        toggleTodoPosition = document.getElementById("toggleTodoPosition");
        todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
        toggleTodoPosition.value = "";
        view.displayTodos();
    },
	toggleAll: function(){
		todoList.toggleAll();
        view.displayTodos();
    }
};

var view = { 

    displayTodos: function(){

    var todosUl = document.getElementById("todoList");
    todosUl.innerHTML = ""; 
    todoList.todos.forEach(function(todo, position) {
             var todoLi = document.createElement("li");
             var todoTextWithCompletion = "";
             if (todo.completed === true) {
             todoTextWithCompletion = todo.todoText + " (x) ";
             } else {
             todoTextWithCompletion = todo.todoText + " () ";
             }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setupEventListeners: function(){
        var todosUl = document.querySelector("ul");
        todosUl.addEventListener("click", function(event){
        var elementClicked = event.target;
        if (elementClicked.className === "deleteButton") {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
        }
        });
    }
};

view.setupEventListeners();
