import { observable, computed } from "mobx"

class TodoList {
    @observable public todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}