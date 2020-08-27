import { DEFAULT } from './../../actions/actionType';

const initialState = {
    tested: true,
}

export default function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT:
            return state;
        default:
            return state;
    }
}