import { connectRouter } from 'connected-react-router';

// Reducers
import pluginsActions from './reducers/pluginsActions';
import defaultReducer from './reducers/default'

export const createRootReducer = (history) => ({
    router: connectRouter(history),
    defaultReducer,
    pluginsActions
})