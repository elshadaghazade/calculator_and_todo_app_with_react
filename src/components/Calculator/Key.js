import style from './style.module.css';
import {useContext} from 'react';
import { calculatorContext } from '../../contexts/Calculator';

export default function Key ({value, type}) {

    const [state, dispatch]= useContext(calculatorContext);

    const onClick = () => {
        
        if (type === 'operator' && value === 'C') {
            dispatch({
                type: 'erase'
            });
        } else if (type === 'operator' && value === '=') {
            dispatch({
                type: 'calculate'
            });
        } else {
            dispatch({
                type,
                payload: value
            });
        }
    }

    return (
        <>
            <button onClick={onClick} className={style.key}>
                {value}
            </button>
        </>
    );
}