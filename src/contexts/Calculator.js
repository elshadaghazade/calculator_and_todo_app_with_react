import {createContext, useReducer} from 'react';

export const calculatorContext = createContext();

const initialState = {
    sol: [],
    sag: [],
    operator: null,
    result: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'number':
            var sol = [...state.sol];
            var sag = [...state.sag];
            if (state.operator === null) {
                sol.push(action.payload);
            } else {
                sag.push(action.payload);
            }

            return {
                ...state,
                sag,
                sol
            }
        case 'operator':
            return {
                ...state,
                operator: action.payload
            }
        case 'calculate':
            var sol = parseFloat(state.sol.join(''));
            var sag = parseFloat(state.sag.join(''));
            let result = null;
            switch(state.operator) {
                case 'X':
                    result = sag * sol;
                    break;
                case '-':
                    result = sol - sag;
                    break;
                case '+':
                    result = sol + sag;
                    break;
                case '/':
                    result = sol / sag;
                    break;
                default: 
                    return state;
            }
            
            return {
                ...state,
                result
            }
        case 'erase':
            return {
                ...initialState
            }
        default:
            return state;
    }
}


export default function Calculator ({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <calculatorContext.Provider value={[state, dispatch]}>
            {children}
        </calculatorContext.Provider>
    );
}