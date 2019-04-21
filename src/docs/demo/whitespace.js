import React, { Component } from 'react'
import { WhiteSpace, WingSpace, Button } from '../../components/index'

export default class WhiteSpaceDemo extends Component {
  render() {
    return (
      <div>
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="xs" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="sm" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="md" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="lg" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
        <WhiteSpace size="xl" />
        <WingSpace size="lg">
          <Button type="primary">test</Button>
        </WingSpace>
      </div>
    )
  }
}
