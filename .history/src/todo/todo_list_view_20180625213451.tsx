import * as React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from "./todo"
import TodoView from "./todo_view"

interface ITodoListView {
    todoList {
        readonly todos: ReadonlyArray<ITodo>
    }
}

@observer
class TodoListView extends React.Component<ITodoListView, {}> {
    public render(): JSX.Element {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

export default TodoListView