import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/index'
import WingSpace from '../WingSpace/index'
import Button from '../Button/index'

class Result extends Component {
  render() {
    const {
      preCls,
      mode,
      imageIcon,
      title,
      subTitle,
      renderContent,
      renderButton,
      buttonText,
      onClick
    } = this.props

    const resultClass = classNames(preCls, `${preCls}-${mode}`)
    let iconMode = 'shibai'

    switch (mode) {
      case 'error': {
        iconMode = 'shibai'
        break
      }
      case 'wait': {
        iconMode = 'dengdai'
        break
      }
      case 'off': {
        iconMode = 'guoqi'
        break
      }
      default: {
        iconMode = 'chenggong'
        break
      }
    }

    return (
      <div className={`${preCls}-wrapper`}>
        <WingSpace size="lg">
          <div className={resultClass}>
            <div className={`${preCls}-content`}>
              <div className={`${preCls}-pic`}>
                {imageIcon ? (
                  <img src={imageIcon} className={`${preCls}-pic-icon`} />
                ) : (
                  <Icon name={iconMode} />
                )}
              </div>
              <strong className={`${preCls}-title`}>{title()}</strong>
              {renderContent
                ? renderContent()
                : subTitle && (
                    <div className={`${preCls}-sub-title`}>{subTitle()}</div>
                  )}
            </div>
          </div>
          <div className={`${preCls}-footer`}>
            {renderButton ? (
              renderButton()
            ) : (
              <Button type="primary" onClick={onClick}>
                {buttonText}
              </Button>
            )}
          </div>
        </WingSpace>
      </div>
    )
  }
}

Result.defaultProps = {
  preCls: 'pf-result'
}

export default Result
