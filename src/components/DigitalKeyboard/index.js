import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'
import onClickOutside from 'react-onclickoutside'

function noop() {}
class DigitalKeyboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleClickOutside = evt => {
    this.setState({
      visible: false
    })
  }

  addnumber = e => {
    const { type, maxlength, onChange } = this.props
    let { value } = this.props
    value = value.toString()
    let number = e.target.innerText
    // 当是钱数的类型，只保留两位的小数
    if (
      type === 'money' &&
      value.indexOf('.') != -1 &&
      value.split('.')[1].length === 2
    ) {
      return
    }

    if (number) {
      // 当开始就有小数点的情况,转化为0
      if (number === '.' && number.length === 1 && !value) {
        value = '0.'
        if (onChange) {
          onChange(value)
        }

        return
      }

      // 当连续出现多个小数点的情况，不能在继续输入
      if (number === '.' && value.indexOf('.') != -1) {
        return
      }

      // 当开始为0，不能连续输入多个零的情况
      if (
        number === '0' &&
        value.indexOf('0.') === -1 &&
        value.indexOf('0') === 0
      ) {
        return
      }

      // 当开始为0，且继续输入数字的情况
      if (
        number != '0' &&
        number != '.' &&
        value.indexOf('0') === 0 &&
        value.indexOf('0.') === -1
      ) {
        value = ''
        value = value += number
        if (onChange) {
          onChange(value)
        }
        return
      }
      number = value += number
      if (type === 'money') {
        if (number.indexOf('.') != -1 && number.split('.')[1].length > 2) {
          number = Number(number).toFixed(2)
        }
      } else {
        number = number.substring(0, maxlength)
      }

      if (onChange) {
        onChange(number)
      }
    }
  }



  deletenumber = e => {
    const { type, maxlength, onChange, className, value } = this.props
    let number = value.toString()
    if (!number) {
      return
    }
    number = number.substring(0, number.length - 1)
    if (onChange) {
      onChange(number)
    }
  }

  handleSubmit = () => {
    const { onConfirm, value } = this.props
    this.setState(
      {
        visible: false
      },
      () => {
        if (onConfirm) {
          onConfirm(value)
        }
      }
    )
  }

  appear = () => {
    this.setState({
      visible: true
    })
  }

  hideKeyboard = () => {
    this.setState({
      visible: false
    })
  }

  deleteAll = () => {
    const { onChange } = this.props
    if (onChange) {
      onChange('')
    }
  }

  render() {
    const { visible } = this.state
    const { type, placeholder, className, value } = this.props

    const keyBoardinput = classNames(`pf-digkeyboard-wrap ${className}`)
    const visibleBox = classNames(
      'pf-digkeyboard-box',
      visible ? '' : 'is-digkeyboard-hidden'
    )

    const pointDisplay = classNames(
      'pf-number-keyboard-item',
      type === 'int' ? 'pf-pointDisplay' : ''
    )

    const inputBox = classNames('pf-input-inputBox', visible ? 'focus' : '')
    return (
      <div className={keyBoardinput}>
        <div
          role="textbox"
          className="pf-number-keyBoard-input"
          onClick={this.appear}
        >
          <div className="pf-list-line">
            {!value && <div className="pf-input-control">{placeholder}</div>}

            <div className={inputBox}>
              {value}
              {value && (
                <Icon
                  onClick={this.deleteAll}
                  className="pf-input-delete"
                  name="shibai"
                />
              )}
            </div>
          </div>
        </div>

        <div className={visibleBox}>
          <div className="pf-keyBoard-box">
            <table cellspacing="1" className="pf-keyBoard-table">
              <tr>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  1
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  2
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  3
                </td>
                <td
                  className="pf-number-keyboard-delete"
                  onClick={this.deletenumber}
                  rowspan="2"
                >
                  <Icon className="icon_backspace" name="icon_backspace" />
                </td>
              </tr>
              <tr>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  4
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  5
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  6
                </td>
              </tr>
              <tr>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  7
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  8
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  9
                </td>
                <td
                  className="pf-number-keyboard-sure"
                  rowspan="2"
                  onClick={this.handleSubmit}
                >
                  确定
                </td>
              </tr>
              <tr>
                <td
                  className={pointDisplay}
                  onClick={type === 'int' ? noop : this.addnumber}
                >
                  .
                </td>
                <td
                  className="pf-number-keyboard-item"
                  onClick={this.addnumber}
                >
                  0
                </td>
                <td
                  className="pf-number-keyboard-hide"
                  onClick={this.hideKeyboard}
                >
                  <Icon className="icon_backspace" name="jianpan" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

DigitalKeyboard.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  onConfirm: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

DigitalKeyboard.defaultProps = {
  placeholder: '请输入内容',
  onChange: noop,
  maxlength: 10,
  type: 'number',
  onConfirm: noop,
  className: '',
  value: ''
}

export default onClickOutside(DigitalKeyboard)
