import { ADD_ACTIONS } from './actionType'

export const addActions = function (content) {
    return {
        type: ADD_ACTIONS,
        data: content,
    }
};