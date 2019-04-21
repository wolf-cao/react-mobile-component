import React, { Component } from 'react'
import PropTypes from 'prop-types'

function noop() {}

class TitleBar extends Component {
  render() {
    const { preCls, title, extra, onClick } = this.props
    return (
      <div className={preCls} onClick={onClick}>
        <div className={`${preCls}-title`}>{title}</div>
        <div className={`${preCls}-extra`}>{extra}</div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string, PropTypes.element),
  extra: PropTypes.element,
  onClick: PropTypes.func
}

TitleBar.defaultProps = {
  preCls: 'pf-title-bar',
  onClick: noop
}

export default TitleBar
