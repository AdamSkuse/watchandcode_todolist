var todoList = {
	todos: ["item 1", "item 2", "item 3"],
	displayTodos: function() {
		console.log(this.todos);
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
}


