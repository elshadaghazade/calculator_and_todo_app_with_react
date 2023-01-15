import {createContext, useReducer} from 'react';

export const todoAppContext = createContext([]);

const initialState = {
    todos: {},
    lastIndex: 0,
    show: 'all'
}

function reducer (state, action) {
    switch(action.type) {
        case 'add':
            if (!action.payload?.trim()) {
                return state;
            }

            var todos = {...state.todos};
            var lastIndex = state.lastIndex + 1;

            todos[lastIndex] = {
                task: action.payload,
                id: lastIndex,
                isActive: true,
                isEditable: false
            }

            return {
                ...state,
                todos,
                lastIndex
            }
        case 'remove':
            var todos = {...state.todos};
            delete todos[action.payload];

            return {
                ...state,
                todos
            }
        case 'complete':
            var todos = {...state.todos};

            todos[action.payload].isActive = false;
            
            return {
                ...state,
                todos
            }
        case 'uncomplete':
            var todos = {...state.todos};

            todos[action.payload].isActive = true;
            
            return {
                ...state,
                todos
            }
        case 'open_edit_form':
            state.todos[action.payload].isEditable = true;
            return {
                ...state
            }
        case 'close_edit_form':
            state.todos[action.payload].isEditable = false;
            return {
                ...state
            }
        case 'save_change':
            var todos = {...state.todos};

            todos[action.payload.id].task = action.payload.task;
            todos[action.payload.id].isEditable = false;

            return {
                ...state,
                todos
            }
        case 'remove_completed_tasks':
            var todos = Object.fromEntries(Object.entries(state.todos || {}).filter(todo => todo.isActive));

            return {
                ...state,
                todos
            }
        case 'set_visibility':
            return {
                ...state,
                show: action.payload
            }
        default:
            return state;
    }
}

export default function TodoApp ({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <todoAppContext.Provider value={[state, dispatch]}>{children}</todoAppContext.Provider>
    );
}