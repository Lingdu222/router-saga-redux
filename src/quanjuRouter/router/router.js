import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const lazyComponents = {//定义好的组件
    Home: () => import('../src/containers/Home'),
    NoMatch: () => import('../src/containers/NoMatch')
}

//其实这一步可有可无在我看来，无非就是把它变成AsyncHome, AsyncNoMatch
Object.keys(lazyComponents).forEach(key => {
    lazyComponents[`Async${key}`] = Loadable({
        loader: lazyComponents[key],
        loading: () => null
    })
})

const { AsyncHome, AsyncNoMatch } = lazyComponents;

const routes = [
    {
        path: '/home',
        component: AsyncHome,
        // routes: [
        //   {
        //     path: '/home/nomatch',
        //     component: AsyncHome
        //   }
        // ]
    },
    {
        path: '/*',
        exact: false,
        component: AsyncNoMatch
    }
]

function RouteWithSubRoutes(route) {
    let ret = [];
    if (route.path) {
        ret.push((
            <Route
                exact
                {...route}
            />
        ))
    }
    if (route.routes) {
        route.routes.forEach(route => {
            ret.push(RouteWithSubRoutes(route))
        })

    }
    return ret;
}

function RouteConfig() {
    return (
        <Switch>
            <Redirect exact from="/" to="/home" />
            {
                RouteWithSubRoutes({ routes })
            }
        </Switch>
    )

}

export default RouteConfig;
