import React from 'react';
import TodoDispatcher from '../Dispatcher/todoDispatcher';

export class SearchTodos extends React.Component {
	constructor() {
		super();

		this.addBtn = false;
	}

	componentDidMount() {
		let searchBox = this.todoSearch.value;
		this.addBtn = true;
	}

	addNewTodo = () => {
		let duplicate = false, searchBox = this.todoSearch.value;
		this.props.todos.forEach(function (todo) {
			if (todo === searchBox) {
				duplicate = true;
			}
		})

		if (duplicate === false) {
			TodoDispatcher.dispatch({type: "ADD_TODO", todo: searchBox});
			this.todoSearch.value = '';
			this.searchTodos();
		}
	}

	searchTodos = () => {
		let searchBox = this.todoSearch.value, addBtn = true;
		this.props.search(this.todoSearch.value);

		this.props.todos.forEach(function (todo) {
			if (todo.indexOf(searchBox) >= 0) {
				addBtn = false
			}
		})

		if (this.addBtn === true && searchBox === "") {
			addBtn = false;
		}

		this.addBtn = addBtn;
	}

	render = () => {
		return (<div>
					<input className = 'search-box text-center' onKeyUp = {this.searchTodos} ref = { (inputData) => { this.todoSearch = inputData; } } />
					{
						(() => {
							if (this.addBtn === true) {
								return <input type = "button" className = 'add-btn' value = "Add" onClick = {this.addNewTodo} />;
							}
						})()
					}
				</div>
				)
	}
}