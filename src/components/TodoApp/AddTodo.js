
import { useCallback, useContext, useRef } from 'react';
import { todoAppContext } from '../../contexts/TodoApp';
import style from './style.module.css';

export default function AddTodo () {

    const inpRef = useRef();
    const [state, dispatch] = useContext(todoAppContext);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        dispatch({
            type: 'add',
            payload: inpRef.current.value
        });

        inpRef.current.value = '';
    }, []);

    return (
        <form onSubmit={onSubmit} className={style.addTodo}>
            <input type={'text'} className={style.addTodoInput} placeholder="Todo..." ref={inpRef} />
            <button className={style.addTodoBtn}>Add</button>
        </form>
    );
}