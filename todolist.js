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
		for (var i = 0; i < totalTodos; i++) {
		    if (this.todos[i].completed === true) {
			completedTodos++;
			}
		    }
		    if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
			    this.todos[i].completed = false;
			    }
		    } else {
		        for(var i = 0; i < totalTodos; i++) {
			    this.todos[i].completed = true;
			}
		}
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
    deleteTodo: function(){
        deleteTodoPosition = document.getElementById("deleteTodoPosition");
        todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
        deleteTodoPosition.value = "";
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
   
        for (var i = 0; i < todoList.todos.length; i++){
           var todoLi = document.createElement("li");
           var todo = todoList.todos[i];
           var todoTextWithCompletion = "";
           if (todo.completed === true) {
              todoTextWithCompletion = todo.todoText + " (x) ";
              } else {
              todoTextWithCompletion = todo.todoText + " () ";
         }

        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUl.appendChild(todoLi);
    }
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    }

};

    
