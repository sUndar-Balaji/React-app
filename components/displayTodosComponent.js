import React from 'react';

export class DisplayTodos extends React.Component {
	constructor(props) {
		super();
	}

	render = () => {
		return (<ol>
			 {
			 	this.props.todos.map(function (todo, index) {
			 		return <li key = {index}>{todo}</li>
			 	})
			 }
			</ol>);
	}
}