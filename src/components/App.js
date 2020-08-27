import React, { Component } from "react";

// Router
import getRoutes from '@utils/getRoutes'
import history from '@utils/history'
import { ConnectedRouter } from 'connected-react-router';

// Redux
import { Provider } from "react-redux";
import configureStore from '@redux/store'
import { addActions } from '@redux/actions/pluginsActions'

const store = configureStore(history);

class App extends Component {
    constructor() {
        super();

        this.state = {
            pluginsLoading: true,
            plugins: []
        };

        const plugins = ["MyPlugin"];

        const loading = plugins.map(plugin => {
            const loadChunk = () => import(`@plugins/${plugin}/${plugin}`)
                .then(module => module)
                .catch((err) => {
                    console.log("Loading plugin failed : ", err);
                });

            return new Promise(resolve => {
                loadChunk().then(file => {
                    resolve({ name: plugin, data: file });
                })
            })
        });

        Promise.all(loading).then(res => {
            const plugins = res.reduce((prev, current) => prev.concat(current), []);

            plugins.forEach(({ data }) => {
                if (data.actions) {
                    store.dispatch(addActions(data.actions))
                }
                if (data.reducers && data.reducers.length > 0) {
                    data.reducers.forEach(reducer => {
                        store.attachReducers({
                            plugins: {
                                [`${reducer.name}`]: reducer.reducer,
                            },
                        });
                    });
                }
            })

            this.setState({ pluginsLoading: false, plugins: plugins });
        });
    }

    render() {
        return (
            this.state.pluginsLoading ? (
                <div>Loading</div>
            ) : (
                    <Provider store={store}>
                        <ConnectedRouter history={history}>
                            {getRoutes(this.state.plugins)}
                        </ConnectedRouter>
                    </Provider>
                ))
    }
}

export default App;