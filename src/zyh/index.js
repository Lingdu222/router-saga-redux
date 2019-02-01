import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.css';
export class Zyh extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    onclickLi = (index) => {
        this.setState((state) => ({
            index
        }))
    }

    render() {
        const { index } = this.state
        return (
            <div className="login">
                <ul className="login-ul">
                    <li className={index === 0 ? "active" : ""} onClick={() => this.onclickLi(0)}>
                        手机登录
                    </li>
                    <li className={index === 1 ? "active" : ""} onClick={() => this.onclickLi(1)}>
                        密码快速
                    </li>
                </ul>
                <div>
                    <p>
                        <Icon type="user" />
                        <input placeholder="手机号/用户名"></input>
                    </p>
                    {
                        index === 1 && <p>
                            <Icon type="lock" />
                            <input placeholder="输入密码"></input>
                        </p>
                    }
                    {
                        index === 0 && <p>
                            <Icon type="edit" />
                            <input placeholder="请输入验证码"></input>
                        </p>
                    }
                    {
                        index === 0 &&
                        <p>
                            <Icon type="edit" />
                            <input placeholder="请输入动态密码"></input>
                        </p>
                    }
                    <button className='login-btn'>登录</button>
                </div>
            </div>
        )
    }
}

export default Zyh
