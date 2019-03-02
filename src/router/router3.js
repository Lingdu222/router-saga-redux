/**
 * Switch:排他性路由，只匹配第一个，
 * Redirect：错误页处理
 */



import React, { Component } from 'react';
// import Dragger from 'react-dragger-r'  
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import {HashRouter as Router, 
    Route, 
    Link, 
    NavLink,//高亮
    Switch,
    Redirect
} from "react-router-dom"
import './router.css'; 
 
class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <div>
                            {/* 可以高亮 */}
                            <NavLink to="/" exact activeClassName="active">home</NavLink><br/>
                            <NavLink to="/list" activeClassName="active">list</NavLink><br/>
                            <NavLink to="/about" activeClassName="active">about</NavLink><br/>
                        </div>
                        <Switch>
                            <Route  exact path = "/" component ={ Home }></Route>
                            <Route path = "/about" component ={ About }></Route>
                            {/* Switch,具有排他性，即：如果路径一样，组件不一样，那么只加载第一个匹配 */}
                            <Route path = "/list" component ={ List }></Route>
                            <Redirect to="/page404"></Redirect>{/*错误页，没有次路由的*/}
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
const Home = () => <div>我是首页</div>
const About = () => <div>我是about 页</div>
const List = () => <div>我是列表页</div>
const List2 = () => <div>我是列表页2</div>
const Page404 = () => <div>Not Fount</div>
export default App;
