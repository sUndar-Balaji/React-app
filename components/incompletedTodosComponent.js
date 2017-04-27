import React from 'react';
import TodoDispatcher from '../Dispatcher/todoDispatcher';

export class InCompletedTodos extends React.Component {
	constructor(props) {
		super();
	}

	deleteTodo = (todo) => {
		TodoDispatcher.dispatch({type: "DELETE_TODO", todo: todo});
	}

	render = () => {
		let todos, searchTerm = this.props.searchTerm, markTodoCompletion = this.props.markTodoCompletion, component = this, deleteTodoFn = this.deleteTodo;

		todos = this.props.todos.map(function (todo, index) { 
			
			if (todo.indexOf(searchTerm) >= 0) {
				
				return (<li key = {index}>
							
							<span>{todo}</span>
							
							<a onClick = {markTodoCompletion.bind(component, todo)} 
									className = 'markAsCompleted'>
								Mark as Completed
							</a>
							
							<a className = 'delete-btn' onClick = {deleteTodoFn.bind(component, todo)}>
								Delete
							</a>

						</li>);

			}
			
		});

		return <ol>{todos}</ol>
	}
}