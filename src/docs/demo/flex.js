import React, { Component } from 'react'
import { Flex } from '../../components/index'

export default class FlexDemo extends Component {
  render() {
    return (
      <Flex>
        <Flex.Item>123</Flex.Item>
        <Flex.Item>asdf</Flex.Item>
      </Flex>
    )
  }
}
