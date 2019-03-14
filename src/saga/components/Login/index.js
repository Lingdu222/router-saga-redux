import React, { Component } from 'react'


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.username = React.createRef()
        this.password = React.createRef()
    }
    Login = (event) => {
        event.preventDefault()

        let name = this.username.current.value
        let pwd = this.password.current.value
        this.props.login(name, pwd)

    }
    Logot = (event) => {
        event.preventDefault()
        this.props.logout()
    }


    render() {
        const loginForm = (
            <form>
                <label>用户名</label>
                <input ref={this.username} />
                <label>密码</label>
                <input ref={this.password} />
                <button onClick={this.Login}>登录</button>
            </form>
        )
        const logoutForm = (
            <form>
                <h2>token:{this.props.token}</h2>
                <button onClick={this.Logot}>退出</button>
            </form>
        )
        return (
            this.props.token ? logoutForm : loginForm
        )
    }
}
