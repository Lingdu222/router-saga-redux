import React from 'react'
import Icon from '../Icon'
import Portal from '../Portal'
import Button from '../Button'
import PropTypes from 'prop-types'
import classNames from 'classname'
import './index.less'

const Fragment = React.Fragment;

export default class Dialog extends React.Component {
  static defaultProps = {
    prefixCls: 'pope-modal'
  }

  static propTypes = {
    visible: PropTypes.bool
  }

  state = {
    visible: this.props.visible
  }

  handleClick = (type, e) => {
    let event = this.props[`on${type}`];
    event && event(e);
    e.stopPropagation();
  }

  componentWillReceiveProps(nextProps) {
    let { visible } = this.props;
    if (nextProps.visible !== visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  render() {
    let { title, children, className, prefixCls } = this.props;
    let { visible } = this.state;

    let display = visible ? 'block' : 'none';

    let cls = classNames(prefixCls, className)

    return (
      <Portal>
        <Fragment>
          <div className="pope-modal-mask"></div>
          <div className="pope-modal-wrapper" style={{ display }}>
            <div className={cls}>
              <div className="pope-modal-content">
                <button className="pope-modal-close" onClick={(e) => this.handleClick('Cancel', e)}>
                  <Icon type="close" />
                </button>
                <div className="pope-modal-header">
                  <div className="pope-modal-title">{title}</div>
                </div>
                <div className="pope-modal-body">
                  {children}
                </div>
                <div className="pope-modal-footer">
                  <Button type="primary" onClick={(e) => this.handleClick('Success', e)}>完成</Button>
                  <Button onClick={(e) => this.handleClick('Cancel', e)} >取消</Button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </Portal>
    )
  }
}

