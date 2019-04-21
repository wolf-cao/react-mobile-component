import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectListChild from './selectListChild'

class SelectListBox extends Component {

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    let styleObj = {
      color: '#fff',
      background: this.context.color
    }
    const { data } = this.props

    const resetBtn = () => {
      this.props.resetBtn(data, true)
    }
    const confirmBtn = () => {
      this.props.confirmBtn()
    }

    const stopPropagation = e => {
      e.stopPropagation()
      e.nativeEvent.stopImmediatePropagation()
    }

    return (
      <div
        className="pf-select-list-box"
        onClick={event => stopPropagation(event)}
      >
        <div className="pf-select-wrap">
          {data.map(item => (
            <SelectListChild
              key={item.id}
              data={item}
              selects={item.selects}
              foldMode={true}
            />
          ))}
        </div>
        <div className="pf-select-btn-box">
          <p onClick={resetBtn}>重置</p>
          <p onClick={confirmBtn} style={ styleObj }>确定</p>
        </div>
      </div>
    )
  }
}

SelectListBox.propTypes = {
  data: PropTypes.array
}

SelectListBox.defaultProps = {
  data: [
    {
      id: 'id',
      value: '默认标题',
      children: [],
      selects: false
    }
  ]
}

export default SelectListBox
