import * as React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from "./todo"
import TodoView from "./todo_view"

interface ITodoListView {
    readonly todoList: {
        readonly todos: ITodo[]
        readonly unfinishedTodoCount: number
        readonly addTodo: (todo: ITodo) => void
    }
}

interface TodoListState {
    readonly todo: ITodo
}

@observer
class TodoListView extends React.Component<ITodoListView, TodoListState> {
    constructor(props: ITodoListView) {
        super(props)
        this.state = {
            todo: {
                finished: false,
                id: Math.random(),
                title: "",
            }
        }

    }

    public addTodo(todo: ITodo): void {
        this.props.todoList.addTodo(todo)
    }

    public onChange(event: React.ChangeEvent<HTMLSelectElement>>): void {
        this.setState({ todo: { ...this.state.todo, title: event.target.value } })
    }

    public render(): JSX.Element {
    return <div>
        <ul style={{ listStyle: "none" }}>
            {this.props.todoList.todos.map(todo =>
                <TodoView todo={todo} key={todo.id} />
            )}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
        <input type="text" onChange={this.onChange} />
    </div>
}
}

export default TodoListView