import { Checkbox } from 'antd';
import React from 'react';
import './index.css'
class RoleCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        const cid = this.props.cid;
        const btnGroupId = this.props.btnGroupId;
        const appId = this.props.appId;
        this.props.onChecked(cid, btnGroupId, appId, e.target.checked);
    }

    render() {
        const checked = this.props.checked;
        const title = this.props.title;
        const cid = this.props.cid;
        return (
            <div className={title ? '' : 'check2'}>
                <Checkbox
                    checked={checked}
                    onChange={this.onChange}
                    className={title ? '' : 'checkbox'}
                />
                {title}
            </div>
        );
    }
}
export default RoleCheckbox;