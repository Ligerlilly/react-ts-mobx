import { computed, observable, } from "mobx"
import { ITodo } from "./todo"


class TodoList {
    @observable public todos: ITodo[] = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

export default TodoList