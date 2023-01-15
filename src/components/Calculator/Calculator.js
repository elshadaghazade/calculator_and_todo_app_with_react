import style from './style.module.css';


export default function Calculator ({children}) {
    return (
        <>
            <div className={style.calculator}>
                {children}
            </div>
        </>
    );
}