import AppRouter from './router';
import '../common/font/iconfont';
import { routerPath } from 'CONSTANT';
import Loadable from 'react-loadable';

const NoAuth = Loadable({
  loader: () => import('../routes/noAuth'),
  loading: Loading
})

const AppIndex = Loadable({
  loader: () => import('../routes/Index'),
  loading: Loading
})

const SysIntro = Loadable({
  loader: () => import('../routes/SysIntro'),
  loading: Loading
})

const HelpCenter = Loadable({
  loader: () => import('../routes/HelpCenter'),
  loading: Loading
})

const HelpDetails = Loadable({
  loader: () => import('../routes/HelpDetail'),
  loading: Loading
})

const routes = [
  { path: '/', component: AppIndex },
  { path: '/' + routerPath.index, component: AppIndex },
  { path: '/' + routerPath.help, component: HelpCenter },
  { path: '/' + routerPath.help + '/:space_id', component: HelpDetails },
  { path: '/' + routerPath.help + '/:space_id/:catalogue_id', component: HelpDetails },
  { path: '/' + routerPath.help + '/:space_id/:catalogue_id/:xid', component: HelpDetails },
  { path: '/' + routerPath.help + '/:space_id/:catalogue_id/:xid/:article_id', component: HelpDetails },
  { path: '/' + routerPath.sysintro, component: SysIntro },
  { path: '/' + routerPath.sysintro + '/:sys_id', component: SysIntro },
  { path: '/' + routerPath.noauth, component: NoAuth },
  { path: '/*', component: NoAuth }
]

class App extends React.Component {
  render() {
    return (<Locale lang={userLang}>
      <AppRouter routes={routes} />
    </Locale>);
  }
}

export default App;
