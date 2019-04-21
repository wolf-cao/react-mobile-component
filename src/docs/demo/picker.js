import React, { Component } from 'react'
import { Picker, List } from '../../components/index'

export default class PickerDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pickerChoice: null
    }
  }

  submitButton = value => {
    console.log(value)
    this.setState({
      pickerChoice: value
    })
  }

  getLabelByValue(value, myArray) {
    return myArray.filter(item => item.value === value)[0].label
  }

  render() {
    const data = [
      [
        {
          value: '340000',
          label: '安徽省'
        },
        {
          value: '820000',
          label: '澳门特别行政区'
        },
        {
          value: '110000',
          label: '北京'
        }
      ],
      [
        {
          value: '340001',
          label: '安徽省'
        },
        {
          value: '820001',
          label: '澳门特别行政区'
        },
        {
          value: '110001',
          label: '北京'
        }
      ]
    ]

    const { pickerChoice } = this.state

    const extraValue =
      pickerChoice && pickerChoice.length > 0
        ? `${this.getLabelByValue(
            pickerChoice[0],
            data[0]
          )}, ${this.getLabelByValue(pickerChoice[1], data[1])}`
        : ''

    return (
      <div>
        <List>
          <List.Item extra={extraValue}>现在选择的是</List.Item>
        </List>
        <Picker
          data={data}
          title="星巴克咖啡"
          value={
            pickerChoice ||
            [].concat([data[0][0].value]).concat([data[1][0].value])
          }
          onOk={this.submitButton}
        >
          <span>open1</span>
        </Picker>
      </div>
    )
  }
}
