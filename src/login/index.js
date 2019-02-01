import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.css';

export class Login extends Component {

    onclickLi = () => {

    }
    render() {
        return (
            <div className="login">
                <ul className="login-ul">
                    <li className='active'>
                        手机快速登录
                    </li>
                    <li>
                        密码快速
                    </li>
                </ul>
                {/* <div>
                    <p>
                        <Icon type="edit" />
                        <input></input>
                    </p>
                    <p>
                        <Icon type="edit" />
                        <input></input>
                    </p>
                    <p>
                        <Icon type="edit" />
                        <input></input>
                    </p>

                </div> */}

            </div>
        )
    }
}

export default Login
