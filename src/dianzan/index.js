import React, { Component } from "react"
import store from "../store/store"
class Dianzan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false
        }
    }
    dianzan = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        return (
            <div className='wrapper'>
                {/* bind 不仅可以帮我们把事件监听方法中的 this 绑定到当前组件实例上；还可以帮助我们在在渲染列表元素的时候，把列表元素传入事件监听函数当中 */}
                <button className='like-btn' onClick={this.dianzan.bind(this, "hello")}>
                    <span className='like-text'>{this.state.isLiked ? "点赞" : "取消"}</span>
                    <span>👍</span>
                </button>
                {/* <button>{store.getState().cart.count}</button> */}
            </div>
        )
    }
}
export default Dianzan