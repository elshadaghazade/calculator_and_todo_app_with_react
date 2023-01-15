
import style from './style.module.css';


export default function TodoApp ({children}) {
    return (
        <>
            <div className={style.todoApp}>{children}</div>
        </>
    );
}