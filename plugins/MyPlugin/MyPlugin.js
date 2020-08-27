import React from 'react'

// Components
import PluginContainer from './components/MyComponent'

// Reducers
import myReducer from './redux/reducers/reducers'

// Actions
import * as actions from './redux/actions/myAction'

export const routes = [
    {
        path: '/plugin',
        component: PluginContainer,
    },
    {
        path: '/test',
        component: () => <h1>Test plugin</h1>,
    }
]

export const reducers = myReducer

export { actions };