import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classname'
import "./index.less"

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'default'
  }

  render() {
    let { children, onClick, type } = this.props;
    let cls = classname({
      'pope-btn': true,
      [`pope-btn-${type}`]: true
    })
    return (
      <button {...{
        onClick
      }} className={cls} >
        {children}
      </button>
    )
  }
}
