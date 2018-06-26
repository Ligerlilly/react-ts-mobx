import * as React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from "./todo"
import TodoView from "./todo_view"

interface ITodoListView {
    readonly todoList: {
        readonly todos: ITodo[]
        readonly unfinishedTodoCount: number
    }
}

@observer
class TodoListView extends React.Component<ITodoListView, {}> {
    public addTodo(todo: ITodo): void {
        this.todoList(todo)
    }

    public render(): JSX.Element {
        return <div>
            <ul style={{ listStyle: "none" }}>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

export default TodoListView