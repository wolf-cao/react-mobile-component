import React, { Component } from 'react'
import RCTabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar'
import 'rc-tabs/assets/index.css'
import PropTypes from 'prop-types'
class Tabs extends Component {
  state = {
    start: 0
  }

  addTabTitle = value => {
    const { tab } = this.props
    return tab.map((item, index) => {
      if (index === value) {
        return item.name
      }
    })
  }

  render() {
    const { children, tab, pageSize, tabBarPosition, ...restProps } = this.props
    let tabContent = children.map((item, index) => {
      return (
        <TabPane
          tab={this.addTabTitle(index)}
          data-extra="tabpane"
          key={`${index}`}
        >
          {item}
        </TabPane>
      )
    })

    return (
      <div className="pf-tabs">
        <RCTabs
          {...restProps}
          tabBarPosition={tabBarPosition}
          renderTabBar={() => (
            <SwipeableInkTabBar
              pageSize={pageSize || tab.length}
              speed={10}
              styles={{
                inkBar: {
                  width: '40px',
                  backgroundColor: '#e1a35e'
                }
              }}
            />
          )}
          renderTabContent={() => <TabContent />}
        >
          {tabContent}
        </RCTabs>
      </div>
    )
  }
}

Tabs.propTypes = {
  tab: PropTypes.array,
  tabBarPosition: PropTypes.string,
  pageSize: PropTypes.number
}

Tabs.defaultProps = {
  tab: [],
  tabBarPosition: 'top',
  pageSize: ''
}

export default Tabs
