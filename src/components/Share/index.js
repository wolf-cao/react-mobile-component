import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import JSONP from 'jsonp'
import classNames from 'classnames'
import Button from '../Button'

export default class Share extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      visibleClass: 'pf-share-area',
      browserPicVisible: false,
      weixinPicVisible: false
    }
    this.container = null
  }

  componentDidMount() {
    this.getShareConfig()
  }

  getShareConfig() {
    JSONP(
      `http://xxxx.xxxxxx.com/xxxxx/WX/xxxxx/3?s=${encodeURIComponent(
        window.location.href
      )}`,
      {
        param: 'cb'
      },
      (err, data) => {
        if (err) {
          console.log(err)
        } else {
          this.weixinShare(data)
        }
      }
    )
  }

  _getScript = (url, callback) => {
    var head = document.getElementsByTagName('head')[0],
      js = document.createElement('script')

    js.setAttribute('type', 'text/javascript')
    js.setAttribute('src', url)

    head.appendChild(js)

    //执行回调
    var callbackFn = function() {
      if (typeof callback === 'function') {
        callback()
      }
    }

    if (document.all) {
      //IE
      js.onreadystatechange = function() {
        if (js.readyState == 'loaded' || js.readyState == 'complete') {
          callbackFn()
        }
      }
    } else {
      js.onload = function() {
        callbackFn()
      }
    }
  }

  weixinShare(data) {
    const { config } = this.props

    this._getScript('http://res.wx.qq.com/open/js/jweixin-1.4.0.js', () => {
      wx.config({
        debug: false,
        appId: data.AppId,
        timestamp: data.Timestamp,
        nonceStr: data.NonceStr,
        signature: data.Signature,
        jsApiList: [
          'checkJsApi',
          'updateAppMessageShareData',
          'updateTimelineShareData'
        ]
      })

      wx.ready(function() {
        wx.updateAppMessageShareData(config)
        wx.updateTimelineShareData(config)
      })
    })
  }

  removeContainer = () => {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container)
      this.container.parentNode.removeChild(this.container)
      this.container = null
    }
  }

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div')
      const containerId = `J_pfShareContainer-${new Date().getTime()}`
      container.setAttribute('id', containerId)
      document.body.appendChild(container)
      this.container = container
    }
    return this.container
  }

  getWXTemplate = () => {
    return (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfsAAAEhCAMAAABP8PmpAAAC/VBMVEUAAAD///////////////////////////////////////////////////////////////////8Zyxj///////////////////8wdML///////////////////8Zyxj///////////////////////////////////////////////////////////////////////////////////////7///8Zyxj///////////////////8ZyxgwdMIwdMIwdMIwdMIwdMIwdMIwdML///8wdMIwdMIwdML///////////8Zyxj///////////////////8wdML///////////////////////////////////////////////////////////8wdML///8wdML///8wdMIwdMIZyxgwdMIZyxgZyxgZyxgZyxgZyxgZyxgZyxgZyxgwdMIZyxgZyxgwdMIZyxgZyxgZyxgZyxgZyxj///8ZyxgZyxgZyxj9//D////////q6v3/8cH/88wZyxgwdMLa9P/w+N//7LD/9dP///8wdMIZyxj/dhKb0iNTg/D5U1Fl0CBkZ/B4ntIAsf7/yRhIyAD/xg/2+Pz4NTMAqv4Ao/6RzQ1WWe//ZgB2efJDeO+m1jz/xAT8/f/5VlT/vgBwlPI4cO7/39Wr54gowf9FSO3/5I3/XACtwuKUsNqHyABGf8b/pJzt9v/r8f1OgPC9zudplM5dzhQZtv8Asv7Y4fODhfP///KHp9aNywe36pH6cnBSywWd4v+M3v9navDz+ujj9Mbc8bn/1rf//vmmqPdeYfD+wsD8rKv6bm3/jDv/hzL/cQo6vv7L1vqPkfXi6fTN2u0qZu3/5ef//+D+1NJZisq46pb/33f4QT/3Hxz/TQDh9/+76v+gu/eGqPVijfH/9PA4O+yhud7T65//v47/kIac4XD/pWT/00Sg1C+Wzxlozv7BwvlslvJrlfL/7dn/wpvM6I7/tY3/sXq84W6w21IvwAD/tABEt5K2AAAAinRSTlMAgEC/EO8wIN/PYJ+PcFCvAgRaBu37Jvfj/erm0/hm8hfaC/SjCMSKHhPivZs1aSIaDdfOrKhbUzvKwrZv+fHPvpNURkMcEQi6hX1GOCrxeE45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"
        alt=""
      />
    )
  }

  getBrowserTemplate = () => {
    return (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnwAAAHeCAMAAAA2DyYcAAAAxlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////i8P////////////////////////////////////////////////////////////////////////8OkP////////8OkP8OkP8OkP8OkP8OkP////8OkP8VfvtMRNHgAAAAP3RSTlMAQIC/EPAgMJ/PYN+vj3BQh3j69Qq2aeLEHJnTWucmu5VGTCwDpQbcqhbtO1Y0y310DteMZl5tgmOE+15P4CWy/jOZAAAhC0lEQVR42tSaabacIBCFGYpZcUn3ZP+byjFql4AKnc5LXu4fmxYH4KOqKBT/RlZK2n45J/6KrBiR81vliUSlH0MSJ6mkFyFEDCGKPy2y96fEuJy0x1WuPWmLkrjQokabJuXAAChAdAWoq5bwi0wplY8GZPWY44+AJL5eLiCLviIQ19oG88fwOQCGhAUAOzxF6IBByYeRBLS405yKwfFAbK4/poOG4luKShM839RcjpJGGGQPUF8JnzM8vjNgr+GLWhfwWWBu+0+/5MpiPGbss0hUogRDfUS3hlkDLz6WBIBlO2QxqMnsVQ0mcS/NRDVKSGWTuMxAGrLS7fBJuQ5IgxEBUz0rWfyWlyPi2s6QXwwfPDc5Xz9bAQV8HvDqUOS+PSTLouIKT5K/N/U05u2dJvG5yGzvG9bDOLD+4AO2PHVWBIIsZPkWRdcHJCBfzDEFvcMHCLEVWQ1vic+ziFumUaiunEfhU4XecLsB8PyuXPcBPnv5yhpJrdpqcfED+ITumz67V+Fx/0gkNeJ68MPwJRh7vEs1A/AsdbZqZXgzw9imK2r4NFRrXamgx17NFdmHj4e9D1+lcfgEBWB++d0h+KYb+PRxsSyL6srIA77jdtkiPGmB3moG8WcUILfmLGJIqoAI8jfgI8AXNm4SZEoW8lq7hi8h1jMR3qqXZqT5VbD8vvbC7foDAysPaUA2shft14U4DmMBSbNcQV+k9b4ZyKvr78C3VHOkD9/4XIi6FGCKsrsY+1/rUwmjo/gDkjA7ATRY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"
        alt=""
      />
    )
  }

  handleWXShareButton = () => {
    if (/MicroMessenger/i.test(navigator.userAgent)) {
      this.setState({
        weixinPicVisible: true,
        visibleClass: 'pf-share-area'
      })
      return
    }
    this.setState({
      browserPicVisible: true,
      visibleClass: 'pf-share-area'
    })
  }

  getComponent = () => {
    const { visibleClass, browserPicVisible, weixinPicVisible } = this.state

    return (
      <div className="pf-share">
        <div className="pf-share-mask" onClick={this.handleClick} />
        <div className="pf-share-image" onClick={this.handleClick}>
          {browserPicVisible && this.getBrowserTemplate()}
        </div>
        <div className="pf-share-image-wx" onClick={this.handleClick}>
          {weixinPicVisible && this.getWXTemplate()}
        </div>
        <div className={visibleClass}>
          <ul className="pf-share-buttons">
            <li
              className="pf-share-button-item"
              onClick={this.handleWXShareButton}
            >
              <span className="wechat">
                <em />
              </span>
              <p>微信好友</p>
            </li>
            <li
              className="pf-share-button-item"
              onClick={this.handleWXShareButton}
            >
              <span className="moment">
                <em />
              </span>
              <p>朋友圈</p>
            </li>
            <li
              className="pf-share-button-item"
              onClick={() => {
                this.shareTo('qzone')
              }}
            >
              <span className="qzone">
                <em />
              </span>
              <p>QQ空间</p>
            </li>
            <li
              className="pf-share-button-item"
              onClick={() => {
                this.shareTo('weibo')
              }}
            >
              <span className="weibo">
                <em />
              </span>
              <p>微博</p>
            </li>
          </ul>
          <Button
            size="md"
            onClick={() => {
              this.setState(
                {
                  visibleClass: 'pf-share-area'
                },
                () => {
                  setTimeout(() => {
                    this.setState({
                      visible: false
                    })
                  }, 200)
                }
              )
            }}
          >
            取消
          </Button>
        </div>
      </div>
    )
  }

  handleClick = () => {
    const { visible } = this.state
    const { type } = this.props

    if (type) {
      switch (type) {
        case 'timeline': {
          this.setState(
            {
              visible: !visible
            },
            () => {
              this.handleWXShareButton()
            }
          )
          break
        }
        case 'message': {
          this.setState(
            {
              visible: !visible
            },
            () => {
              this.handleWXShareButton()
            }
          )
          break
        }
        case 'qzone': {
          this.shareTo('qzone')
          break
        }
        default: {
          this.shareTo('weibo')
        }
      }
      return
    }

    //
    this.setState(
      {
        visible: !visible,
        browserPicVisible: false,
        weixinPicVisible: false
      },
      () => {
        if (this.state.visible) {
          const visibleClassName = classNames(
            'pf-share-area',
            'pf-share-area-visible'
          )

          setTimeout(() => {
            this.setState({
              visibleClass: visibleClassName
            })
          }, 0)
          return
        }
        this.setState({
          visibleClass: 'pf-share-area'
        })
      }
    )
  }

  shareTo = type => {
    const { config } = this.props

    switch (type) {
      case 'qzone': {
        let url = `http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?url=${encodeURIComponent(
          config.link
        )}&appkey=801004939`
        if (config.title) {
          url += `&title=${encodeURIComponent(config.title)}`
        }
        if (config.desc) {
          url += '&desc=' + encodeURIComponent(config.desc)
        }
        if (config.imgUrl) {
          url += `&imageUrl=${encodeURIComponent(config.imgUrl)}`
        }
        if (config.from) {
          url += `&source=${encodeURIComponent(config.from)}`
        }
        url += `&site=${encodeURIComponent('http://wap.xxxxx.com')}`

        window.location = url
        break
      }
      default: {
        // weibo
        let url = `http://service.weibo.com/share/mobile.php?url=${encodeURIComponent(
          config.link
        )}&appkey=3050999700`
        if (config.title) {
          url += `&title=${encodeURIComponent(config.title)}`
        }
        if (config.imgUrl) {
          url += `&pic=${encodeURIComponent(config.imgUrl)}`
        }
        if (config.from) {
          url += `&source=${encodeURIComponent(config.from)}`
        }
        url += `&sourceUrl=${encodeURIComponent('http://wap.xxxx.com')}`

        window.location = url
      }
    }
  }

  render() {
    const { visible } = this.state
    const { children } = this.props

    return (
      <div>
        <div onClick={this.handleClick}>{children}</div>
        {visible &&
          ReactDOM.createPortal(this.getComponent(), this.getContainer())}
      </div>
    )
  }
}
