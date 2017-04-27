import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../Dispatcher/todoDispatcher';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return ["get milk", "buy eggs", "pay e-bill"];
  }

  reduce(todos, action) {
    switch (action.type) {
      case 'ADD_TODO':
        todos = todos.slice();
        todos.push(action.todo);
        return todos;

      case 'DELETE_TODO':
        todos = todos.slice();
        todos.splice(todos.indexOf(action.todo), 1);
        return todos;

      default:
        return todos;
    }
  }
}

export default new TodoStore();