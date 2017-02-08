var todoList = {
	todos: [],
	displayTodos: function() {
		console.log("My todos:");
		if (this.todos.length < 1) {
			console.log("No todos!");
		} else {
			for (var i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(index, todoText) {
		this.todos[index].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(index) {
		this.todos.splice(index, 1);
		this.displayTodos();
	},
	toggleCompleted: function(index) {
		var todo = this.todos[index];
		todo.completed = !todo.completed;
		this.displayTodos();
	}

};


