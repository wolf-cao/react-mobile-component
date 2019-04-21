import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tag from './tag'

class SelectListChild extends Component {
  static contextTypes = {
    onStateShow: PropTypes.func,
    color: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    let styleObj = {
      color: this.context.color
    }
    const { data, selects, foldMode } = this.props
    const closeBox = () => {
      this.context.onStateShow(data)
    }

    return (
      <div className="pf-select-listbox-wrap">
        <p>
          {data.title}
          {foldMode ? (
            <span
              style={data.stateShow ? null : styleObj}
              className={data.stateShow ? null : 'active'}
              onClick={closeBox}
            >
              {data.stateShow ? '展开' : '收起'}
            </span>
          ) : null}
        </p>
        {data.stateShow ? null : (
          <div className="pf-select-list">
            {data.children.map(item => (
              <Tag key={item.id} data={item} selects={selects} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

SelectListChild.propTypes = {
  data: PropTypes.object,
  select: PropTypes.bool,
  foldMode: PropTypes.bool
}

SelectListChild.defaultProps = {
  data: {
    value: '默认标题',
    children: [],
    stateShow: false
  },
  selects: false,
  foldMode: false
}

export default SelectListChild
