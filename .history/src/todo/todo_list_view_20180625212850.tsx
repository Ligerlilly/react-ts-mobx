import * as React from 'react';
import { observer } from 'mobx-react';
import { Todo } from "./todo"

interface TodoListViewProps {
    readonly todoList: ReadonlyArray<Todo>
}

@observer
class TodoListView extends React.Component {
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