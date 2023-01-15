
import { useContext } from 'react';
import { calculatorContext } from '../../contexts/Calculator';
import style from './style.module.css';

export default function Screen () {

    const [state, dispatch]= useContext(calculatorContext);

    if (!state.sol?.length || state.result) {
        return (
            <>
                <div className={style.screen}>{state.result || 0}</div>
            </>
        );
    }

    return (
        <>
            <div className={style.screen}>
                {state.sol} {state.operator?.toLowerCase()} {state.sag}
            </div>
        </>
    );
}