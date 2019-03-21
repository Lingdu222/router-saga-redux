import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './iconfont'
import './index.less'

export default class Icon extends PureComponent {

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    prefix: 'pope'
  }

  render() {
    const defaultCls = 'icon ';
    let { type, className = '', prefix } = this.props;

    let cls = defaultCls + className;
    let useType = `#${prefix}-${type}`;

    return (
      <svg {...this.props} className={cls} aria-hidden="true" >
        <use xlinkHref={useType}></use>
      </svg >
    )
  }
}
