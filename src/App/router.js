const {
    Router,
    Switch,
    Route,
    Redirect,
    matchPath,
    Link
} = ReactRouterDOM;
import { createHashHistory as createHistory } from "history";

import AppLayout from './layout';
import PropTypes from 'prop-types';

class AppRouter extends React.Component {
    constructor(props, context) {
        super(props);
        // this.lang = context.lang;
    }
    render() {

        const { routes } = this.props;

        const match = matchPath(window.location.hash.slice(1), {
            path: '/users/:id',
            exact: true,
            strict: false
        })

        let history = createHistory();
        history.listen(() => {
            window.iframeStore = null;
        })

        return (
            <Router history={history}>
                <AppLayout>
                    <Switch>
                        {
                            (routes || []).map((route, index) => {
                                const exact = route.exact !== undefined ? route.exact : true;
                                return <Route exact={exact} key={index} path={route.path} component={route.component} />
                            })
                        }
                    </Switch>
                </AppLayout>
            </Router>
        );
    }
}

AppRouter.contextTypes = {
    // lang: PropTypes.string
}

export default AppRouter
