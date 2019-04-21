import classnames from 'classnames'
import React from 'react'
import Notification from 'rmc-notification'
import Icon from '../Icon/index'

let messageInstance
const prefixCls = 'rmc-notification'

function getMessageInstance(mask, callback) {
  if (messageInstance) {
    messageInstance.destroy()
    messageInstance = null
  }
  Notification.newInstance(
    {
      prefixCls,
      style: {
        left: '50%',
        top: '50%',
        maxWidth: '50%',
        textAlign: 'center',
        transform: 'translateY(-50%)'
      },
      className: classnames({
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask
      })
    },
    notification => callback && callback(notification)
  )
}

function notice(content, type, onClose, duration = 2, mask = true) {
  const iconTypes = {
    info: '',
    success: 'chenggong',
    fail: 'shibai'
  }
  const iconType = iconTypes[type]

  getMessageInstance(mask, notification => {
    messageInstance = notification

    notification.notice({
      duration,
      style: {
        right: '50%'
      },
      content: !!iconType ? (
        <div
          className={`${prefixCls}-text ${prefixCls}-text-icon`}
          role="alert"
          aria-live="assertive"
        >
          <Icon name={iconType} className={`${prefixCls}-icon`} />
          <div className={`${prefixCls}-text-info`}>{content}</div>
        </div>
      ) : (
        <div className={`${prefixCls}-text`} role="alert" aria-live="assertive">
          <div>{content}</div>
        </div>
      ),
      closable: false,
      onClose() {
        if (onClose) {
          onClose()
        }
        notification.destroy()
        notification = null
        messageInstance = null
      }
    })
  })
}
export default {
  show(content, duration, mask) {
    return notice(content, 'info', () => {}, duration, mask)
  },
  info(content, onClose, duration, mask) {
    return notice(content, 'info', onClose, duration, mask)
  },
  success(content, onClose, duration, mask) {
    return notice(content, 'success', onClose, duration, mask)
  },
  fail(content, onClose, duration, mask) {
    return notice(content, 'fail', onClose, duration, mask)
  },
  hide() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
}
