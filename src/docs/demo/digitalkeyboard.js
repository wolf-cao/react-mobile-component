import React, { Component } from 'react'
import { DigitalKeyboard, Button } from '../../components/index'

class DigitalKeyBoard extends Component {
  state = {}

  render() {
    const { value } = this.state

    return (
      <div>
        <div>{value}</div>
        <DigitalKeyboard
          onChange={val => {
            this.setState({
              value: val
            })
          }}
          value={value}
          className=""
          onConfirm={val => {
            console.log(val, 'value')
          }}
        />
        <Button
          onClick={() => {
            this.setState(
              {
                value: 30
              },
              () => {
                console.log(this.state.value)
              }
            )
          }}
        >
          123
        </Button>
      </div>
    )
  }
}
export default DigitalKeyBoard
