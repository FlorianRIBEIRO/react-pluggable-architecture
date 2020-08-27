import { ADD_ACTIONS } from "../../actions/actionType"

const initialState = {
    actions: {}
    // set initial state
}

export default function pluginAction(state = initialState, action) {
    switch (action.type) {
        case ADD_ACTIONS:
            return {
                actions: { ...state.actions, ...action.data }
            };
        default:
            return state;
    }
}