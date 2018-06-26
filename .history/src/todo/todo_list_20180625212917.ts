import { computed, observable, } from "mobx"

interface Todo {
    readonly finished: boolean
}

class TodoList {
    @observable public todos: ReadonlyArray<Todo> = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

export default TodoList