import { useCallback, useContext, useRef } from 'react';
import { todoAppContext } from '../../contexts/TodoApp';
import style from './style.module.css';

export default function TodoItem ({
    id,
    task,
    isEditable,
    isActive
}) {

    const [state, dispatch] = useContext(todoAppContext);
    const inpRef = useRef();

    const complete = useCallback(() => {
        dispatch({
            type: 'complete',
            payload: id
        });
    }, [isActive]);

    const uncomplete = useCallback(() => {
        dispatch({
            type: 'uncomplete',
            payload: id
        });
    }, [isActive]);

    const edit = useCallback(() => {
        dispatch({
            type: 'open_edit_form',
            payload: id
        })
    }, []);

    const save = useCallback(() => {
        dispatch({
            type: 'save_change',
            payload: inpRef.current.value
        });
    }, []);

    const cancel = useCallback(() => {
        dispatch({
            type: 'close_edit_form',
            payload: id
        });
    });

    const onSubmit = useCallback(e => {
        e.preventDefault();

        dispatch({
            type: 'save_change',
            payload: {
                id,
                task: inpRef.current.value
            }
        });
    }, []);

    const deleteTask = useCallback(() => {
        if (!window.confirm('Are you sure?')) return;

        dispatch({
            type: 'remove',
            payload: id
        })
    }, []);

    if (isEditable) {
        return (
            <>
                <div className={style.todoItemEditable}>
                    <form onSubmit={onSubmit}>
                        <input type={'text'} defaultValue={task} ref={inpRef} />
                    
                        <div>
                            <button type='submit'>SAVE</button>
                            <button type='button' onClick={cancel}>CANCEL</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }

    return (
        <>
            <div className={`${style.todoItem} ${!isActive && style.isNotActive}`}>
                <h3>{task}</h3>
                <div className={style.todoItemControlBtns}>
                    <button onClick={isActive ? complete : uncomplete}>{isActive ? 'complete' : 'uncomplete'}</button>
                    <button onClick={edit}>Edit</button>
                    <button onClick={deleteTask}>Delete</button>
                </div>
            </div>
        </>
    );
}