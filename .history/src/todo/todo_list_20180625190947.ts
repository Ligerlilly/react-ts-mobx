import { computed, observable, } from "mobx"

interface ITodo {
    readonly finished: boolean
}

class TodoList {
    @observable public todos: ReadonlyArray<ITodo> = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

export default TodoList