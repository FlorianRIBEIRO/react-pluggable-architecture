import { MY_FIRST_ACTION, MY_SECOND_ACTION } from './actionsType'

export const myFirstAction = function (content) {
    return {
        type: MY_FIRST_ACTION,
        data: content,
    }
};

export const mySecondAction = function (content) {
    return {
        type: MY_SECOND_ACTION,
        data: content,
    }
};