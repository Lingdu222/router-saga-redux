/**
 * 跳转路由，history(history.push),location(location.hash)
 */
import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link,
    NavLink,//高亮
    Switch,
    Redirect
} from "react-router-dom"

import Wrap from './index'
import Details from './details'
class App extends Component {
    render() {
        // console.log(this.props.match)
        // debugger
        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={Wrap}></Route>
                    {/* Switch,具有排他性，即：如果路径一样，组件不一样，那么只加载第一个匹配 */}

                    {/* 这个定义是id，那个在详情页面就以id的形式接手参数*/}
                    <Route path="/detail/:id" component={Details}></Route>
                    {/* <Redirect to="/page404"></Redirect>错误页，没有次路由的 */}
                </Switch>
            </Router>

        )
    }
}
export default App;
