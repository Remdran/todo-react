import React from "react";

const Todos = ({ todos, deleteTodo }) => {
	// If the todoList has something in it, map over and render them
	// if not render the p tag
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.do}>
					<span
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's left</p>
	);

	return <div className="todos collection">{todoList}</div>;
};

export default Todos;
