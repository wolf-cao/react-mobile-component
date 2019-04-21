import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'

function noop() {}

class Message extends Component {
  handleClick = () => {
    this.props.onClick && this.props.onClick(this.messageBox)
  }

  render() {
    const { children, icon, color, backgroundColor, mode, action } = this.props

    const iconType = {
      close: 'cha',
      link: 'tiaozhuan'
    }

    const messageClass = classNames('pf-message', {
      [`pf-message-warning`]: mode === 'warning',
      [`pf-message-action`]: action
    })

    return (
      <div
        ref={box => (this.messageBox = box)}
        className={messageClass}
        style={{ color, backgroundColor }}
        onClick={this.handleClick}
      >
        <span className="pf-message-content">
          <Icon name={icon} className="pf-message-icon" color={color} />
          {children}
        </span>
        {action ? (
          <Icon
            name={iconType[action]}
            className="pf-message-action-icon"
            color={color}
          />
        ) : null}
      </div>
    )
  }
}

Message.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  mode: PropTypes.string,
  action: PropTypes.string,
  onClick: PropTypes.func
}

Message.defaultProps = {
  mode: '',
  color: '',
  action: '',
  backgroundColor: '',
  onClick: noop
}

export default Message
