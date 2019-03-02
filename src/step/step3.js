import React, { Component } from 'react'

export class Step3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Step3Data: {}
        }
    }
    render() {
        return (
            <div className='step3'>
                <span className='title'>
                    一、选择题
                    </span>
                <ul>

                    <li>
                        <p className='content'>
                            考试题1
                        </p>
                        <p >
                            <span className='btn-select'>换题</span>
                            <span className='btn-delect'>移除</span>
                        </p>

                    </li>
                    {/* <li>
                        <p>
                            考试题2
                        </p>
                        <span>换题</span>
                        <span>移除</span>
                    </li> */}

                </ul>
                {/* <ul>
                    <span className='title'>
                        二、 简答题
                    </span>
                    <li>
                        <p>
                            考试题1
                        </p>
                        <span>换题</span>
                        <span>移除</span>
                    </li>
                    <li>
                        <p>
                            考试题2
                        </p>
                        <span>换题</span>
                        <span>移除</span>
                    </li>

                </ul> */}
            </div>
        )
    }
}

export default Step3

