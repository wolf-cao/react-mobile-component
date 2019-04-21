import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function TabTag(props) {
  const tabClassName = classNames('pf-tab-tag', {
    [`pf-tab-tag-active`]: props.data.state
  })

  let styleObj = {
    color: props.color,
    borderTopColor: props.color
  }

  const tabClick = () => {
    if (props.active) {
      props.tabScreenClicks(props.data)
      return
    }
    props.tabClicks(props.data)
  }

  const tagText = () => {
    if(props.data.showValue){
      return props.data.showValue
    }
    if(props.data.value){
      return props.data.value
    }
    return '筛选'
  }

  return (
    <div
      className={tabClassName}
      onClick={tabClick}
      style={props.data.state ? styleObj : null}
    >
      <span style={props.data.state ? styleObj : null}>{tagText()}<i style={props.data.state ? styleObj : null}></i></span>
    </div>
  )
}

TabTag.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
  color: PropTypes.string
}

TabTag.defaultProps = {
  data: {
    value: '筛选',
    state: false,
    id: 'shaixuan'
  },
  active: false,
  color: '#a98b31'
}

export default TabTag
