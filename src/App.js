import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
	state = {
		todos: [{ id: 1, content: "buy some food" }, { id: 2, content: "Do work" }]
	};

	// id passed from Todos.js to remove todo and store new state
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});

		this.setState({ todos });
	};

	// todo passed from AddTodo.js, assigns it a unique id, and adds it // to the todos array and sets it in state
	addTodo = todo => {
		todo.id = Math.random();
		const todos = [...this.state.todos, todo];
		this.setState({ todos });
	};

	render() {
		return (
			<div className="App container">
				<h1 className="center blue-text">Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
