/**
 * 跳转路由，history(history.push),location(location.hash)
 */



import React, { Component } from 'react';
// import Dragger from 'react-dragger-r'  
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import {
    HashRouter as Router,
    Route,
    Link,
    NavLink,//高亮
    Switch,
    Redirect
} from "react-router-dom"
import "./router.css"
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div>
                            {/* 可以高亮 */}
                            <NavLink to="/" exact activeClassName="active">home</NavLink><br />
                            <NavLink to="/list" activeClassName="active">list</NavLink><br />
                            <NavLink to="/about" activeClassName="active">about</NavLink><br />
                        </div>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/about" component={About}></Route>
                            {/* Switch,具有排他性，即：如果路径一样，组件不一样，那么只加载第一个匹配 */}
                            <Route path="/list" component={List}></Route>
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
class List extends Component {
    constructor(props) {
        super(props)
    }
    goDetail() {
        console.log(this.props)
        const { history, location } = this.props
        history.push("/list/3")// 可以做跳转用
        //location.hash="#/list/3" // 不可以做跳转
    }
    // test() {
    //     console.log(this.props)
    // }
    // test2 = () => {
    //     console.log(this.props)
    // }
    render() {
        const { match } = this.props
        return (
            <div>
                <h1>我是列表页：</h1>
                {/* 链接 */} {/* Link 要用match的URL */}
                <Link to={`${match.url}/1`}>详情1</Link>
                <Link to={`${match.url}/2`}>详情2</Link>
                <Link to={`${match.url}/3`}>详情3</Link>
                <button onClick={() => this.goDetail()}>Go Detail</button>
                {/* <button onClick={() => this.test()}>测试打印</button>
                <button onClick={this.test2}>测试打印</button> */}
                {/* 组件 */} {/* Route 要用match的path */}
                {/* <Route exact path={`${match.path}/:id`} component={Detail}></Route> */}
            </div>
        )
    }
}
class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        const { match } = this.props
        return (
            <div>我是详情页面{match.params.id}</div>
        )
    }
}
export default App;
