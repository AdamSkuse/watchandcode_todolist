var todoList = {
	todos: [],
	displayTodos: function() {
		console.log("My todos:");
		if (this.todos.length < 1) {
			console.log("No todos!");
		} else {
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed) {
					console.log("(x)", this.todos[i].todoText); 
				} else {
					console.log("( )", this.todos[i].todoText);
				}
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
	},
	toggleAll: function() {
	
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		for(var i = 0; i < totalTodos; i++) {
			if(this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		if (completedTodos === totalTodos) {
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
				}
			} else {
			for(var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};


