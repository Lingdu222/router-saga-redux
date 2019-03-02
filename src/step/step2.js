
import React from 'react'
import {
    Form, Select, Radio, Input,
    Button, Icon
} from 'antd';
import './step2.css'
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
// const CheckboxGroup = Checkbox.Group
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['all', 'Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['all', 'Nanjing', 'Suzhou', 'Zhenjiang'],
};
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subjectData: [],
            subject: [],
            Options: [],


            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],

            questionType: [{ type: '填空题', value: 0 }, { type: '简答题', value: 0 }, { type: '选择题', value: 0 }],
            id: '',

        }
    }
    handelReduce = (index) => {

        const { questionType } = this.state
        const value = questionType[index][`value`]
        let value2 = questionType[index][`value`] -= 1
        value === 0 ? value : value2
        // 这个时候并不会更新视图, 需要 setState更新 arr 
        // (注意 setState 是一步操作, 不要轻易去根据 setstate 的状态去做接下来的事情), 非要这样的话可以给 setState 传递一个函数`this.setState(() => {})`进行操作
        this.setState({
            questionType: questionType
        })

    }
    handelPlus = (index) => {
        const { questionType } = this.state
        questionType[index][`value`] += 1
        this.setState({
            questionType: questionType
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.select = this.state.subjectData
                const arr = []
                this.state.questionType.forEach((item) => {
                    arr.push(item.value)
                })
                values.showTag = arr
                console.log('Received values of form: ', values);
                this.props.next({}, values)
            }
        });
    }
    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }
    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    }
    handelclick = () => {
        const selectData = this.state.subject.join('-')
        this.setState({
            subjectData: [...this.state.subjectData, selectData]
        })
    }
    handelSelect = (value) => {
        this.setState({
            subject: [value]
        })
    }
    handelSelect2 = (value) => {
        if (value !== 'all') {
            this.setState({
                subject: [...this.state.subject, value]
            })
        }
    }
    handeremove(index) {
        const beforremoveData = this.state.subjectData
        this.state.subjectData.splice(index, 1)
        this.setState({
            subjectData: beforremoveData
        })

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { questionType, cities } = this.state
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 17 },
        };
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormItem
                    {...formItemLayout}
                    label="所交学科"
                >
                    {getFieldDecorator('radio')(
                        <RadioGroup>
                            <RadioButton value="数学">数学</RadioButton>
                            <RadioButton value="语文">语文</RadioButton>
                            <RadioButton value="科学">科学</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="所交班级"
                >
                    {getFieldDecorator('button2')(
                        <RadioGroup>
                            <RadioButton value="一班">一班</RadioButton>
                            <RadioButton value="二班">二班</RadioButton>
                            <RadioButton value="三班">三班</RadioButton>
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="作业名称"
                >
                    {getFieldDecorator('button3')(
                        <Input
                            style={{
                                border: 0,
                                width: '300px',
                                borderBottom: '1px solid #ccc'

                            }}
                        ></Input>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="请选择课程"

                >
                    {getFieldDecorator('select')(
                        <div>
                            <Select
                                defaultValue='请选择章节'
                                style={{ width: 120 }}
                                onChange={this.handleProvinceChange}
                                onSelect={this.handelSelect}
                            >
                                {provinceData.map(province => <Option key={province}>{province}</Option>)}
                            </Select>
                            <Select
                                style={{ width: 120 }}
                                value={this.state.secondCity}
                                onChange={this.onSecondCityChange}
                                onSelect={this.handelSelect2}
                            >
                                {cities.map(city => <Option key={city}>{city}</Option>)}
                            </Select>
                            <Button onClick={this.handelclick}>确定添加</Button>
                        </div>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="所选学科"
                >
                    {getFieldDecorator('radio-button55')(
                        <RadioGroup>
                            {this.state.subjectData && this.state.subjectData.map((item, index) => {

                                return <RadioButton
                                    value={item}
                                    key={item}
                                    index={index}
                                    onClick={this.handeremove.bind(this, index)} >
                                    {item}
                                    <Icon type='minus-circle-o' style={{ color: 'red' }} />
                                </RadioButton>
                            })}
                        </RadioGroup>
                    )}
                </FormItem>
                <FormItem
                    label="题型选择"
                    {...formItemLayout}
                >
                    {getFieldDecorator('showTag')(
                        <ul className='wrap-1'>
                            {
                                questionType.map((item, index) => {
                                    return <li key={index}>
                                        <div className='wrap-2'>
                                            <span className={item.value > 0 ? 'active' : 'default'}>{item.type}</span>
                                            <p className='calculation'>
                                                <span className='reduce' onClick={() => { this.handelReduce(index) }}> - </span>
                                                <span className='number'>{item.value}</span>
                                                <span className='plus' onClick={() => { this.handelPlus(index) }}>+</span>
                                            </p>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>

                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Radio.Group"
                >
                    {getFieldDecorator('radio-group')(
                        <div style={{ marginBottom: 16 }}>
                            <Input addonAfter="分钟" defaultValue="" type='number' style={{ width: 150 }} />
                        </div>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 11 }}
                >
                    <Button type="primary" htmlType="submit"> 查看试题</Button>
                </FormItem>
            </Form >
        )
    }
}
const Step2 = Form.create()(Demo);
export default Step2
