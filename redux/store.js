import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux-dynamic-reducer';

// Middlewares
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'

// Reducer
import { createRootReducer } from './reducers/reducers';

export default function configureStore(history) {

    const middleware = [thunk, routerMiddleware(history)];
    const store = createStore(
        null,
        compose(
            applyMiddleware(...middleware),
        )
    );

    store.attachReducers(createRootReducer(history));

    return store;
}