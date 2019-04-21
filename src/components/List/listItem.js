import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import Icon from '../Icon/index'

function noop() {}

class ListItem extends Component {
  render() {
    const {
      extra,
      brief,
      children,
      arrow,
      long,
      onClick,
      leftIcon,
      leftIconColor,
      fullRow,
      fullText,
      result,
      noLine
    } = this.props

    const listItemClass = classNames('pf-list-item', {
      [`pf-list-item-full`]: fullRow,
      [`pf-list-item-full-text`]: fullText,
      [`pf-list-item-result`]: result
    })

    const listInlineClassName = classNames('pf-list-inline', {
      [`pf-list-inline-long`]: long,
      [`pf-list-inline-no-line`]: noLine
    })

    return (
      <TouchFeedback activeClassName="pf-list-item-feedback-active">
        <div className={listItemClass} onClick={onClick}>
          <div className={listInlineClassName}>
            {leftIcon ? (
              <Icon
                name={leftIcon}
                color={leftIconColor}
                className="pf-list-image-left"
              />
            ) : null}
            <div className="pf-list-content">
              {children}
              {brief && <div className="pf-list-brief">{brief}</div>}
            </div>
            {extra ? <div className="pf-list-extra">{extra}</div> : null}
            {arrow ? (
              <div className="pf-list-arrow">
                <Icon name="tiaozhuan" />
              </div>
            ) : null}
          </div>
        </div>
      </TouchFeedback>
    )
  }
}

ListItem.propTypes = {
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  long: PropTypes.bool,
  arrow: PropTypes.bool,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string,
  fullRow: PropTypes.bool,
  result: PropTypes.bool,
  noLine: PropTypes.bool
}

ListItem.defaultProps = {
  extra: '',
  long: false,
  arrow: false,
  onClick: noop,
  leftIcon: '',
  fullRow: false,
  result: false,
  noLine: false
}

export default ListItem
