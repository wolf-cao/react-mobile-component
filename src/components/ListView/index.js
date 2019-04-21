import React, { Component } from 'react'
import Icon from '../Icon/index'
import RListView from 'rmc-list-view'
import Zscroller from 'rmc-list-view/lib/Zscroller'
import PropTypes from 'prop-types'

function noop() {}

class ListView extends Component {
  static DataSource = RListView.DataSource

  render() {
    const {
      dataSource,
      isLoading,
      loadingText,
      height,
      renderHeader,
      renderRow,
      onEndReached,
      pageSize,
      ...restProps
    } = this.props

    return (
      <div className="pf-list-view">
        <RListView
          ref={el => (this.lv = el)}
          dataSource={dataSource}
          style={{ height }}
          renderScrollComponent={props => <Zscroller {...props} />}
          renderHeader={renderHeader}
          renderRow={renderRow}
          renderFooter={() => {
            if (isLoading) {
              return (
                <div className="pf-list-view-loading">
                  <Icon name="loading" className="loading-animate" />
                  {loadingText}
                </div>
              )
            }
            return null
          }}
          scrollerOptions={{ scrollbars: true }}
          onEndReached={onEndReached}
          onEndReachedThreshold={10}
          scrollRenderAheadDistance={30}
          pageSize={pageSize}
          initialListSize={pageSize}
          {...restProps}
        />
      </div>
    )
  }
}

ListView.propTypes = {
  dataSource: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string,
  height: PropTypes.number.isRequired,
  renderHeader: PropTypes.func,
  renderRow: PropTypes.func.isRequired,
  onEndReached: PropTypes.func,
  pageSize: PropTypes.number
}

ListView.defaultProps = {
  dataSource: [],
  isLoading: true,
  loadingText: '数据加载中',
  onEndReached: noop,
  pageSize: 15
}

export default ListView
