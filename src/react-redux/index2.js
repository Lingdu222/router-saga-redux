import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import axios from 'axios'
// import { CssTransition, TransitionGroup } from "react-transition-group"
import { CSSTransition } from 'react-transition-group';
import Counter from './counter'
import Text from './text'
import { ADD, REDUCE, REDUCE2 } from './action'
import "./style.css"

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            nameList: [],
            value: '',
            valueList: []

        }
    }
    bianhua = () => {
        this.setState({
            show: !this.state.show
        })
    }
    handerchange = (e) => {
        this.setState({
            value: e.target.value
        })

    }
    handerPost = (prevState) => {
        this.setState((prevState) => ({
            valueList: [...prevState.valueList, prevState.value],
            value: ''
        }))
    }
    render() {
        const { count, add, reduce, reduce2 } = this.props
        const { nameList, value, valueList } = this.state
        return (
            <Fragment>
                <h3> 功能一：</h3>
                <Counter
                    count={count}
                    add={add}
                    reduce={reduce}
                    reduce2={reduce2}
                />
                <h3> 功能二：</h3>
                <div className={this.state.show ? "show" : "hide"}>hello</div>
                <CSSTransition
                    in={this.state.show}
                    timeout={300}
                    unmountOnExit
                    classNames='fade'
                    appear={true}
                    onEntered={(els) => { els.style.color = 'red' }}
                >

                    <div>张玉红</div>

                </CSSTransition>

                <button onClick={this.bianhua}>变</button>
                <h3> 功能三：</h3>
                <div>
                    <h5> 我们家成员：</h5>
                    <ul>
                        {
                            nameList.map((item, index) => {
                                return <li key={index}>
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <h3> 功能四：</h3>
                <div>
                    <input
                        type='text'
                        value={value}
                        onChange={this.handerchange}

                    />

                    <button onClick={this.handerPost}>提交数据</button>
                    <Text content={value} />
                    <ul>

                        {valueList.map((item, index) => {
                            return <li key={index}>
                                {item}

                            </li>
                        })}

                    </ul>
                </div>


            </Fragment>

        )
    }
    componentDidMount() {
        axios.get('/api/nameList')
            .then(res => {
                this.setState({
                    nameList: [...res.data.data]
                })
            })

    }
}
const mapStateToProps = (state) => {
    return {
        count: state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch(ADD())
        },
        reduce: () => {
            dispatch(REDUCE())
        },
        reduce2: () => {
            dispatch(REDUCE2())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
