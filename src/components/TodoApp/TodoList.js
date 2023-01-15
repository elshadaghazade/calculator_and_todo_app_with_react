import { useContext } from 'react';
import { todoAppContext } from '../../contexts/TodoApp';
import style from './style.module.css';
import TodoItem from './TodoItem';

export default function TodoList () {
    
    const [state, dispatch] = useContext(todoAppContext);

    return (
        <>
            <div className={style.todoList}>
                {Object.values(state.todos).filter(todo => (state.show === 'active' && todo.isActive) || (state.show === 'completed' && !todo.isActive) || state.show === 'all').map(todo => (
                    <TodoItem {...todo} key={`todo-item-${todo.id}`} />
                ))}
            </div>
        </>
    );
}