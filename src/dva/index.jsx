import React from 'react'
import dva from 'dva'

let app = dva()
app.modal({
    namespace: 'count',
    state: { nameber: 0 },
    reducers: {
        add: ({ number }) => ({ number: number + 1 }),
        minus: (number) => ({ number: number - 1 })
    }
})
const Counter = () => {
    return (
        <div>
            <p></p>
            <button>+</button>
            <button>-</button>
        </div>
    )
}
app.router(() => <Counter />)
app.start()