import React from 'react'
import { connect } from 'react-redux'
import * as actions from './state/action'
import Login from './components/Login'
function Counter(props) {
    return (
        <div>
            <p>
                {props.number}
            </p>
            <button onClick={props.reduce}>-</button>
            <button onClick={props.asyncreduce}>saga-</button>
            <button onClick={props.add}>+</button>
            <button onClick={props.asyncadd}>saga+</button>




            <br />
            <br />
            <br />
            <br />
            <Login />
        </div>
    )
}



export default connect(state => state, actions)(Counter)
