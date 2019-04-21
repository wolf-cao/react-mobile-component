import React, { Component } from 'react'
import { WhiteSpace, WingSpace, Button } from '../../components'

export default class WingSpaceDemo extends Component {
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <Button type="primary">test</Button>
        <WhiteSpace size="lg" />
        <WingSpace size="xs">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="lg" />
        <WingSpace size="sm">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="lg" />
        <WingSpace size="md">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="lg" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="lg" />
        <WingSpace size="xl">
          <Button type="primary">test</Button>
        </WingSpace>
      </div>
    )
  }
}
