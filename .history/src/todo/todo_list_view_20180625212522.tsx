import * as react from 'react';
import { observer } from 'mobx-react';

@observer
class TodoListView extends Component {
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