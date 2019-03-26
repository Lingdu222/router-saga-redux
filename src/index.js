import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from "react-redux"

// import Counter from '../src/saga/index'
// import store from '../src/saga/store'
import Check from '../src/checkBox'
// import Check2 from '../src/checkBox/index2'
import Table3 from '../src/checkBox/index2'
import RoleApplicationTable from '../src/checkBox2/RoleApplicationTable'
// import RoleApplicationTable from '../src/checkBox2/table'
import RoleApplicationTable2 from '../src/checkBox2/index'
// import App from "./table/router"
// import App from "./button/app"
// import Testpaper from './step/index'
// import TemperatureContainer from './zi-fu/fu'
// import Test from './state/test6'
// import FormLayoutDemo from './step/step5'
// import WrappedHorizontalLoginForm from './step/step6'
// import store from './react-redux/store'
// import App from './react-redux/index'
// import Zyh from './zyh/index'
import Modals from './modal/index'
import AddRole from './table9/index'
// import App3 from './Model/index'
// import Reduxer from './redux3/index'
// import store from './redux3/store'
// import CCCC from './moreRedux4/index'
// import store from './moreRedux4/store'
// import App from "./saga2/index"
// import store from './saga2/store'
// import EditableTable from './table'
// import Wrap from './table/index'
// import { Button } from 'antd';
import "../node_modules/antd/dist/antd.css"
// import hellosaga from "./saga/index"
// import Deskmark from '../src/deskMark/components/Deskmark/index'
// import DeskMark2 from '../src/deskMark2/deskMark/index'


/**
 * 1:只用redux时的写法
 *  const el = document.getElementById("root")
    const render = () => {
        return ReactDOM.render(<App />, el)
    }
    render()
 * 
 * 
 **/



/**
 * react-redux 写法：只需要通过provider 把store传递给每一个组件
 */
// const el = document.getElementById("root")
// const render = () => {
//     return ReactDOM.render(
// <Wrap />
// <App />
// <Testpaper />
// < Zyh />
// <Modals title="hello jbone" />
// <App3 />
// <Provider store={store}>
//     <CCCC />
// </Provider>
// <DeskMark2 />
// <TemperatureContainer />
// <Test />
// <FormLayoutDemo />
// <WrappedHorizontalLoginForm />
//         , el)
// }
// render()


/**
 * react-redux 写法：只需要通过provider 把store传递给每一个组件
 */
const el = document.getElementById("root")
const render = () => {
    return ReactDOM.render(
        // <Provider store={store}>
        // < Counter />
        <div>
            {/* <Check /> */}
            {/* <Check2 /> */}
            <Table3 />
            <RoleApplicationTable />
            {/* <RoleApplicationTable2 /> */}
            {/* <AddRole /> */}
        </div>

        // </Provider>
        , el)
}
render()