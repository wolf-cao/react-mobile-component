import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function noop() {}

class Empty extends Component {
  render() {
    const { resultPreCls, type, text, renderText, onClick } = this.props
    const resultImageClass = classNames(
      `${resultPreCls}-img`,
      `${resultPreCls}-${type}`
    )

    let defaultText = ''
    if (type === 'nonetwork') {
      defaultText = '暂无网络，请重试'
    }

    if (type === 'syserr') {
      defaultText = '加载失败，点击重试'
    }

    let renderTextElement = (
      <div className={`${resultPreCls}-text`}>{text || defaultText}</div>
    )
    if (renderText) {
      renderTextElement = (
        <div className={`${resultPreCls}-text`}>{renderText()}</div>
      )
    }

    return (
      <div className={resultPreCls}>
        <div className={`${resultPreCls}-wrapper`} onClick={onClick}>
          <em className={resultImageClass} />
          {renderTextElement}
        </div>
      </div>
    )
  }
}

Empty.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  renderText: PropTypes.func,
  onClick: PropTypes.func
}

Empty.defaultProps = {
  resultPreCls: 'pf-default-page',
  text: '',
  type: '',
  onClick: noop
}

export default Empty
