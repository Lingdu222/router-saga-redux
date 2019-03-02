import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';
import { ErrorPage } from '../pages/error/error.page';

interface routerConfigModel {
    path: string,
    component?: any,
    auth?: boolean
}
export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        component: HomePage,
        auth: true,
    }, {
        path: '/home',
        component: HomePage,
        auth: true,
    }, {
        path: '/login',
        component: LoginPage,
    }, {
        path: '/404',
        component: ErrorPage
    }
];