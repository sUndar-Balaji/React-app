import React from 'react';
import { Container } from 'flux/utils';
import { SearchTodos } from './searchTodosComponent';
import { InCompletedTodos } from './inCompletedTodosComponent';
import { CompletedTodos } from './completedTodosComponent';
import TodoStore from '../store/TodoStore';
import TodoDispatcher from '../Dispatcher/todoDispatcher';

class AppContainer extends React.Component {

	constructor() {
		super();
		this.state = {todos: ["get milk", "buy eggs"], 'searchTerm': '', completedTodos: []};
	}

	static getStores() {
    	return [TodoStore];
	}

	static calculateState(prevState) {
	    return {
	      todos: TodoStore.getState(),
	    };
  	}

	search = (searchTerm) => {
		this.setState({searchTerm: searchTerm});
	}

	markCompletedTodos = (completedTodo) => {
		let todoIndex = this.state.todos.indexOf(completedTodo), completedTodos = this.state.completedTodos.slice();
		
		completedTodos.push(this.state.todos.slice(todoIndex)[0]);
		
		this.setState({ todos: this.state.todos.slice(0, todoIndex).concat(this.state.todos.slice(todoIndex + 1, this.state.todos.length)),
						completedTodos: completedTodos });

		TodoDispatcher.dispatch({type: "DELETE_TODO", todo: completedTodo});
	}

	render() {
		return (<div className = "col-md-12 col-sm-12 app-container">
					<div className = 'col-md-6 col-sm-6 divider todos'>
						
						<div className = 'headerContainer'>
							<h4>To-Do List</h4>
							<SearchTodos search = {this.search}
								todos = {this.state.todos}>
							</SearchTodos>
						</div>

						<h1>{this.searchTerm}</h1>	
						
						<InCompletedTodos todos = {this.state.todos} 
							searchTerm = {this.state.searchTerm} 
							markTodoCompletion = {this.markCompletedTodos}>
						</InCompletedTodos>

					</div>
					<div className = 'col-md-6 col-sm-6 todos'>
						
						<CompletedTodos todos = {this.state.completedTodos}></CompletedTodos>

					</div>
			 	</div>)
	}
}

export default Container.create(AppContainer);