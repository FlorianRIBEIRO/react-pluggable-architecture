import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// Components
import Default from '@components/Default'

export default (plugins) => {
    let pluginRoutes = [];
    plugins.map(({ data }) => {
        if (typeof data.routes === 'undefined') {
            return;
        }

        if (data.routes && data.routes.length > 0) {
            data.routes.map(route => pluginRoutes.push(route));
        }
    });

    const routes = pluginRoutes.concat([
        // Your routes
        {
            path: '/404',
            component: Default,
        },
    ]);

    let result = (
        <Switch>
            {
                routes.map((route, index) => {
                    return (
                        <Route key={index} exact path={route.path} component={route.component} />
                    )
                })
            }
            <Redirect to="/404" />
        </Switch>
    );

    return result;
}