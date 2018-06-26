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

interface ITodoListState {
    readonly todo: ITodo
}

@observer
class TodoListView extends React.Component<ITodoListView, ITodoListState> {
    constructor(props: ITodoListView) {
        super(props)
        this.onChange = this.onChange.bind(this)
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

    public onChange(event: React.ChangeEvent<HTMLInputElement>): void {
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
            <br />
            <br />
            <input type="text" onChange={this.onChange} />
            <br />
            <br />
            <button onClick={() => this.addTodo(this.state.todo)}>submit</button>
        </div>
    }
}

export default TodoListView