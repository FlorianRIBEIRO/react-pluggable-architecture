import { MY_FIRST_ACTION, MY_SECOND_ACTION } from './../../actions/actionsType'

const initialState = {
    name: 'myPlugin',
    count: 0,
}

function myReducer(state = initialState, action) {
    switch (action.type) {
        case MY_FIRST_ACTION:
            return {
                ...state,
                count: state.count + 1
            };
        case MY_SECOND_ACTION:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default {
    name: "myReducer",
    reducer: myReducer
}