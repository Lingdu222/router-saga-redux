// import {
//     Form, Icon, Input, Button,
// } from 'antd';

// const FormItem = Form.Item;

// function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
// }

// class HorizontalLoginForm extends React.Component {
//     componentDidMount() {
//         // To disabled submit button at the beginning.
//         this.props.form.validateFields();
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 console.log('Received values of form: ', values);
//             }
//         });
//     }

//     render() {
//         const {
//             getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
//         } = this.props.form;

//         // Only show error after a field is touched.
//         const userNameError = isFieldTouched('userName') && getFieldError('userName');
//         const passwordError = isFieldTouched('password') && getFieldError('password');
//         return (
//             <Form layout="inline" onSubmit={this.handleSubmit}>
//                 <FormItem
//                     validateStatus={userNameError ? 'error' : ''}
//                     help={userNameError || ''}
//                 >
//                     {getFieldDecorator('userName', {
//                         rules: [{ required: true, message: 'Please input your username!' }],
//                     })(
//                         <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//                     )}
//                 </FormItem>
//                 <FormItem
//                     validateStatus={passwordError ? 'error' : ''}
//                     help={passwordError || ''}
//                 >
//                     {getFieldDecorator('password', {
//                         rules: [{ required: true, message: 'Please input your Password!' }],
//                     })(
//                         <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     <Button
//                         type="primary"
//                         htmlType="submit"
//                         disabled={hasErrors(getFieldsError())}
//                     >
//                         Log in
//           </Button>
//                 </FormItem>
//             </Form>
//         );
//     }
// }

// const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
var data = {
    100: "专车(舒适型)",
    200: "专车(行政级)",
    400: "专车(商务型)",
    500: "快车(优选型)",
    610: "快车(快车小巴)",
    800: "快车(迷你型)",
    900: "快车(优享型)",
    1000: "豪华车(全部豪华车)",
    1100: "unione(普通型-出租车, unione)",
    1402: "unione(优选型出租车)", 2100: "计程车(台湾计程车)", 2200: "香港出租车(香港出租车)"
}
console.log(data[100])
