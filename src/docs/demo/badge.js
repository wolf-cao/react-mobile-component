import React, { Component } from 'react'
import { Badge, WhiteSpace, WingSpace, List } from '../../components/index'

export default class BadgeDemo extends Component {
  render() {
    return (
      <div>
        <WingSpace>
          <WhiteSpace />
          <Badge size="large" value="99" />
          &nbsp;
          <Badge size="large" type="error" value="99" />
          &nbsp;
          <Badge size="large" type="success" value="99" />
          &nbsp;
          <Badge size="large" type="warning" value="99" />
          <WhiteSpace />
          <Badge value="99" />
          &nbsp;
          <Badge type="error" value="99" />
          &nbsp;
          <Badge type="success" value="99" />
          &nbsp;
          <Badge type="warning" value="99" />
          <WhiteSpace />
          <Badge size="mini" value="99" />
          &nbsp;
          <Badge size="mini" type="error" value="99" />
          &nbsp;
          <Badge size="mini" type="success" value="99" />
          &nbsp;
          <Badge size="mini" type="warning" value="99" />
          <WhiteSpace />
        </WingSpace>

        <List>
          <List.Item
            extra={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>未读消息</span>
                <Badge size="mini" type="error" value="99" />
              </div>
            }
          >
            消息中心
          </List.Item>
        </List>
      </div>
    )
  }
}
