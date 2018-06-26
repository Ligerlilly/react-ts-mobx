import { observer } from 'mobx-react'

const TodoView = observer(({ todo }) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

export defalut TodoView