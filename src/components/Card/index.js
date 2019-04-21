import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TouchFeedback from 'rmc-feedback'
import { Icon } from '../index'

const noop = () => {}

export default class Card extends Component {
  render() {
    const {
      preCls,
      arrow,
      type,
      avator,
      title,
      subTitle,
      content,
      footer,
      flow,
      pictureClassName,
      onClick
    } = this.props

    let cardTemplate = null

    switch (type) {
      case 'news': {
        const footerElement = footer.map(item => {
          return <div className={`${preCls}-footer-item-news`}>{item}</div>
        })

        const wrapperClass = classNames(`${preCls}-content-wrapper-news`, {
          [`${preCls}-content-wrapper-left`]: flow === 'left'
        })

        const imageClassName = classNames(
          `${preCls}-avator-news`,
          pictureClassName
        )

        cardTemplate = (
          <div className={`${preCls} ${preCls}-card-news`} onClick={onClick}>
            <TouchFeedback activeClassName={`${preCls}-area-feedback-active`}>
              <div className={wrapperClass}>
                {flow === 'left' && (
                  <img className={imageClassName} src={avator} />
                )}
                <div className={`${preCls}-content-news`}>
                  <div className={`${preCls}-title-news`}>{title}</div>
                  <div className={`${preCls}-footer-news`}>{footerElement}</div>
                </div>
                {flow === 'right' && (
                  <img className={imageClassName} src={avator} />
                )}
              </div>
            </TouchFeedback>
          </div>
        )
        break
      }
      default: {
        const footerElement = footer.map(item => {
          return <div className={`${preCls}-footer-item`}>{item}</div>
        })

        const imageClassName = classNames(`${preCls}-avator`, pictureClassName)

        cardTemplate = (
          <div className={preCls}>
            <TouchFeedback activeClassName={`${preCls}-area-feedback-active`}>
              <div className={`${preCls}-wrapper`} onClick={onClick}>
                <Icon name="tiaozhuan" className={`${preCls}-link-arrow`} />
                <div className={`${preCls}-header`}>
                  <img className={imageClassName} src={avator} />
                  <div className={`${preCls}-title`}>{title}</div>
                  <div className={`${preCls}-subTitle`}>{subTitle}</div>
                </div>
                {content && (
                  <div className={`${preCls}-content`}>{content}</div>
                )}
                {footer.length > 0 && (
                  <div className={`${preCls}-footer`}>{footerElement}</div>
                )}
              </div>
            </TouchFeedback>
          </div>
        )
      }
    }

    return cardTemplate
  }
}

Card.propTypes = {
  type: PropTypes.string,
  avator: PropTypes.string,
  pictureClassName: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  flow: PropTypes.string,
  footer: PropTypes.array,
  onClick: PropTypes.func,
  arrow: PropTypes.bool
}

Card.defaultProps = {
  preCls: 'pf-card',
  type: '',
  flow: 'right',
  footer: [],
  onClick: noop,
  arrow: false
}
