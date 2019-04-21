import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './listItem'

class List extends Component {
  static Item = Item
  render() {
    const { children, renderHeader, renderFooter } = this.props
    return (
      <div className="pf-list">
        {renderHeader ? (
          <div className="pf-list-header">{renderHeader()}</div>
        ) : null}
        <div className="pf-list-body">{children}</div>
        {renderFooter ? (
          <div className="pf-list-footer">{renderFooter()}</div>
        ) : null}
      </div>
    )
  }
}

List.propTypes = {
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func
}

export default List
