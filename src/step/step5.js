import React from 'react'
import {
    Form, Select, InputNumber, Radio, Input,
    Button, Checkbox, Icon, Col
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group
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

            value: '',
            value2: '',
            value3: '',
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        }
    }
    handerchange = (value) => {
        this.setState({
            value: value,
        })
    }
    handerchange2 = (value) => {
        this.setState({
            value2: value,
        })
    }
    handerchange3 = (value) => {
        this.setState({
            value3: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.select = this.state.subjectData
                console.log('Received values of form: ', values);
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
        if (value != 'all') {
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
        const { value, value2, value3, cities } = this.state
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
                        <Input></Input>
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
                    {...formItemLayout}
                    label="习题难度"
                >
                    {getFieldDecorator('radio-button')(
                        <CheckboxGroup>
                            <Checkbox value='简单'>简单</Checkbox>
                            <Checkbox value='较易'>较易</Checkbox>
                            <Checkbox value='一般'>一般</Checkbox>
                            <Checkbox value='较难'>较难</Checkbox>
                            <Checkbox value='困难'>困难</Checkbox>
                        </CheckboxGroup>
                    )}
                </FormItem>
                <Col
                    span={24}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                    <FormItem
                        label="题型选择"
                        style={{ display: 'flex' }}
                    >
                        {getFieldDecorator('showTag')(
                            <div>
                                <span className={value > 0 ? 'active' : 'default'}>选择题</span>
                                <InputNumber min={0} onChange={this.handerchange}></InputNumber>
                            </div>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('showTag2')(
                            <div className='yingyong'>
                                <span className={value2 > 0 ? 'active' : 'default'}>应用题</span>
                                <InputNumber min={0} onChange={this.handerchange2}></InputNumber>
                            </div>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('showTag3')(
                            <div className='jianda'>
                                <span className={value3 > 0 ? 'active' : 'default'}>简答</span>
                                <InputNumber min={0} onChange={this.handerchange3}></InputNumber>
                            </div>
                        )}
                    </FormItem>
                </Col>
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
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form >
        );
    }
}

const WrappedDemo = Form.create()(Demo);
export default WrappedDemo