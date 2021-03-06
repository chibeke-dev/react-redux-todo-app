import { ADD_TODO, MARK_DONE, FILTER_TODO, REMOVE_TODO, } from "../actions/Type";
const init = {
    todos:[{
        "title": "House Fellowship",
        "description": "I want to attend house fellowship in the evening",
        "isComplete": false,
        "id": 1563217752827,
        "duration": 1
        },
        {
        "title": "Zoom Meeting",
        "description": "Noon zoom meeting with the team",
        "isComplete": true,
        "id": 1563217752858827,
        "duration": 3
        }],
    filter:'ALL'
}
const Todos = (state=init, action) => {
    switch (action.type) {
        case ADD_TODO : {
            let todos = [...state.todos];
            todos = [action.payload, ...todos]
            return {
                ...state,
                todos
            };
        }
        case MARK_DONE : {
            let todos = [...state.todos];
            todos = todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.isComplete=!todo.isComplete
                }
                return todo
            })
            return {
                ...state,
                todos
            }
        }

        case FILTER_TODO : {
            return {
                ...state,
                filter:action.payload
            }
        }

        case REMOVE_TODO : {
            const todos = removeTodo(state.todos, action.payload)
            return {
                ...state,
                todos
            }
        }

        default: return state;
    }
}

export default Todos;

function removeTodo(todos, id) {
    return todos = todos.filter(todo => todo.id !== id)
}