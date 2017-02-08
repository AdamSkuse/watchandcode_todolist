var todoList = {
	todos: [],
	displayTodos: function() {
		console.log("My todos: ", this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(index, todo) {
		this.todos[index] = todo;
		this.displayTodos();
	},
	deleteTodo: function(index) {
		this.todos.splice(index, 1);
		this.displayTodos();
	}
};


