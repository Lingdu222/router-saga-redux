/**
 * 路由，Link，NavLink,包容性路由，exact
 */



import React, { Component } from 'react';
// import Dragger from 'react-dragger-r'  
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import {HashRouter as Router, 
    Route, 
    Link, 
    NavLink//高亮
} from "react-router-dom"
 import "./router.css";
class App extends Component {
    render() {
        return(
            <div>
                {/* <Dragger style={{ left: 50 }}>
                        <div>普通的拖拽组件</div>
                </Dragger> */}
                <Router>
                    <div>
                        <div>
                            {/* <Link to="/">home</Link>
                            <Link to="/list">list</Link>
                            <Link to="about">about</Link>
                            <br/>这两组的效果是一样的，就只是URL写的不一样，a标签需要#，而Link不需要
                            <a href="#/">home</a>
                            <a href="#/list">list</a>
                            <a href="#/about">about</a> */}
 
                            {/* 可以高亮 */}
                            <NavLink to="/" exact activeClassName="active">home</NavLink><br/>
                            <NavLink to="/list" activeClassName="active">list</NavLink><br/>
                            <NavLink to="/about" activeClassName="active">about</NavLink><br/>

                        </div>
                        <Route  exact path = "/" component ={ Home }></Route>
                        <Route path = "/about" component ={ About }></Route>

                        {/* 包容性路由 :一样的路径，渲染两个不同的组件，只要匹配，就可以全部加载过来*/}
                        <Route path = "/list" component ={ List }></Route>
                        {/* <Route path = "/list" component ={ List2 }></Route> */}
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
export default App;
