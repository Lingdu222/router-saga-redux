/**
 * 子路由
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
// const List = (props) => (
//     <div>
//         {
//             props.match.url
//         }
//     </div>
// )
class List extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {match}=this.props
       return (
        <div>
            <h1>我是列表页：</h1>
            {/* 链接 */} {/* Link 要用match的URL */}
            <Link to={`${match.url}/detail`}>详情1</Link>
            <Link to={`${match.url}/detail2`}>详情2</Link>
            <Link to={`${match.url}/detail3`}>详情3</Link>
            {/* 组件 */} {/* Route 要用match的path */}
            <Route exact path={`${match.path}/detail`} component={Detail}></Route>
            <Route  path={`${match.path}/detail2`} component={Detail2}></Route>
            <Route  path={`${match.path}/detail3`} component={Detail3}></Route>
           
        </div>
       )
    }
}
const List2 = () => <div>我是列表页2</div>
const Page404 = () => <div>Not Fount</div>
const Detail = () => <div>我是详情页</div>
const Detail2 = () => <div>我是详情页2</div>
const Detail3 = () => <div>我是详情页3</div>
export default App;
