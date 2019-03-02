import * as React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { FrontendAuth } from '../components/frontend-auth/frontend-auth.component'
import { routerConfig } from './router.config'

export class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <FrontendAuth config={routerConfig} />
                </Switch>
            </HashRouter>
        );
    }
}