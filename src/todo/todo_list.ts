import { computed, observable, } from "mobx"
import { ITodo } from "./todo"


class TodoList {
    @observable public todos: ITodo[] = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    public addTodo(todo: ITodo): void {
        this.todos.push(todo)
    }
}

export default TodoList