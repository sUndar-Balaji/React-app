import React from 'react';
import { DisplayTodos } from './displayTodosComponent';

export class CompletedTodos extends React.Component {
	constructor(props) {
		super();
	}

	render = () => {
			let completedTodo = (<div> 
									<h4 className = "text-center">Completed Todo</h4>
									<DisplayTodos todos = {this.props.todos}></DisplayTodos>
					   	   		</div>);

			return completedTodo;
	}
}