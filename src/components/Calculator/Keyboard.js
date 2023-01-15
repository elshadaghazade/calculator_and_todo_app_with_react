
import style from './style.module.css';

export default function Keyboard ({children}) {
    return (
        <>
            <div className={style.keyboard}>
                {children}
            </div>
        </>
    );
}