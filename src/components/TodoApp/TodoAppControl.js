
import { useCallback, useContext, useRef } from 'react';
import { todoAppContext } from '../../contexts/TodoApp';
import style from './style.module.css';

export default function TodoAppControl () {

    const [state, dispatch] = useContext(todoAppContext);

    const showAll = useCallback(e => {
        e.preventDefault();

        dispatch({
            type: 'set_visibility',
            payload: 'all'
        });
    });

    const showActive = useCallback(e => {
        e.preventDefault();

        dispatch({
            type: 'set_visibility',
            payload: 'active'
        });
    });

    const showCompleted = useCallback(e => {
        e.preventDefault();

        dispatch({
            type: 'set_visibility',
            payload: 'completed'
        });
    });

    const removeCompletedTasks = useCallback(e => {
        e.preventDefault();

        dispatch({
            type: 'remove_completed_tasks'
        });
    }, []);

    return (
        <>
            <div className={style.todoAppControlWrapper}>
                <a href='' onClick={showAll} className={state.show === 'all' && style.selected}>All</a>
                <a href='' onClick={showActive} className={state.show === 'active' && style.selected}>Active</a>
                <a href='' onClick={showCompleted} className={state.show === 'completed' && style.selected}>Completed</a>
                <a href='' onClick={removeCompletedTasks}>remove completed tasks</a>
            </div>
        </>
    );
}