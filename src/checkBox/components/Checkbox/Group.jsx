import React from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types'
import shallowEqual from 'shallowequal';
import classNames from 'classname'

export default class CheckboxGroup extends React.Component {
  static defaultProps = {
    options: [],
    defaultValue: [],
    onChange() { },
  }
  static propTypes = {
    defaultValue: PropTypes.array,
    value: PropTypes.array,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
  }
  constructor(props) {
    super(props);
    let value;
    if ('value' in props) {
      value = props.value || [];
    } else if ('defaultValue' in props) {
      value = props.defaultValue || [];
    }
    this.state = { value };
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }
  getOptions() {
    const { options } = this.props;
    return options.map(option => {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  }
  toggleOption = (option) => {
    const optionIndex = this.state.value.indexOf(option.value);
    const value = [...this.state.value];
    let checked = true;
    if (optionIndex === - 1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
      checked = false;
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
    this.props.onChangeWithChecked(value, option.value, checked)
  }
  render() {
    const { className } = this.props;
    const options = this.getOptions();
    const wrapCls = classNames('pope-checkbox-group', className)
    return (
      <div className={wrapCls}>
        {
          options.map(option => {
            let checked = this.state.value.indexOf(option.value) !== -1;
            let cls = classNames('pope-checkbox-group-item', {
              'pope-checkbox-wrapper-checked': checked,
              'pope-checkbox-wrapper-optional_disabled': option.OptionalDisabled,
            })
            let content = <Checkbox disabled={'disabled' in option ? option.disabled : this.props.disabled}
              checked={checked}
              onChange={() => this.toggleOption(option)}
              className={cls} key={option.value}
            >
              {option.label}
            </Checkbox>

            return content
          }
          )
        }
      </div>
    );
  }
}

