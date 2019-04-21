import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon'

const loadingUufund = () => {
  const SpinUufundPreCls = 'pf-mask-loading'
  const loadingId = 'J_pf-mask-loading'

  const getContainer = () => {
    const wrapper = document.createElement('div')
    wrapper.setAttribute('id', loadingId)
    document.body.appendChild(wrapper)

    return wrapper
  }

  const removeContainer = () => {
    let confirmWrapper = document.getElementById(loadingId)
    if (confirmWrapper) {
      ReactDOM.unmountComponentAtNode(confirmWrapper)
      confirmWrapper.parentNode.removeChild(confirmWrapper)
      confirmWrapper = null
    }
  }

  return {
    hide: () => {
      removeContainer()
    },

    show: text => {
      ReactDOM.render(
        <div className={SpinUufundPreCls}>
          <div className={`${SpinUufundPreCls}-wrapper`}>
            <div className={`${SpinUufundPreCls}-icon`}>
              <Icon name="uufundloading" />
              <div className={`${SpinUufundPreCls}-image`} />
            </div>
            <div className={`${SpinUufundPreCls}-text`}>{text}</div>
          </div>
        </div>,
        getContainer()
      )
    }
  }
}

const SpinUU = loadingUufund

export default SpinUU
