// import React, { Component } from 'react'

// export class Counter extends Component {
//     render() {
//         const { count, add, reduce } = this.props
//         return (
//             <div>
//                 <span>{count}</span>
//                 <button onClick={add}>+</button>
//                 <button onClick={reduce}>-</button>
//             </div>
//         )
//     }
// }

// export default Counter
import React from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
    <div>
        <button onClick={onIncrement}>
            增加
    </button>
        <button onClick={onIncrementAsync}>
            1s后增加
    </button>
        <button onClick={onDecrement}>
            减少
    </button>
        <hr />
        <div>
            数量: {value}
        </div>
    </div>

export default Counter