import { computed, observable, } from "mobx"



class TodoList {
    @observable public todos: ReadonlyArray<Todo> = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

export default TodoList