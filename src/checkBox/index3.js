import React, { Component } from 'react'
// import { checkbox } from './components'
import classNames from 'classname'
import './index.css'
export default class Table3 extends Component {
    state = {
        isActive: false
    }
    color = () => {
        this.setState(preState => ({
            isActive: !preState.isActive
        }))
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr >
                            <th></th>
                            <th><input type="checkbox" name="checkItem" />查看</th>
                            <th><input type="checkbox" name="checkItem" />下载</th>
                            <th><input type="checkbox" name="checkItem" />修改</th>
                            <th><input type="checkbox" name="checkItem" />删除</th>
                            <th><input type="checkbox" name="checkItem" />新增</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr'>
                            <td><input type="checkbox" name="checkItem" />教师管理</td>
                            <td className={this.state.isActive ? 'active' : ''} onClick={() => this.color()} name="t-add"><span>∨</span></td>
                            <td className={this.state.isActive ? 'active' : ''} onClick={() => this.color()} name="t-down"><span>∨</span></td>
                            {/* <td><input type="checkbox" name="checkItem" /></td> */}
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>

                        </tr>
                        <tr className='tr'>
                            <td><input type="checkbox" name="checkItem" />学生管理</td>
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>
                            <td><input type="checkbox" name="checkItem" /></td>

                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
