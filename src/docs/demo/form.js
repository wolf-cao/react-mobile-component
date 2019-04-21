import React, { Component } from 'react'
import { createForm } from 'rc-form'
import {
  List,
  InputItem,
  RadioItem,
  SelectItem,
  Button,
  WhiteSpace,
  Toast
} from '../../components/index'
import './form.less'

const Item = List.Item

class FormDemo extends Component {
  state = {
    formValue: {}
  }

  handleSubmit = () => {
    this.props.form.validateFields((error, formValue) => {
      if (error) {
        const fundNameError = error['fundName']
        const canBuyError = error['canBuy']
        const fundManagerError = error['fundManager']

        if (fundNameError) {
          Toast.fail(fundNameError.errors[0].message)
          return
        }

        if (canBuyError) {
          Toast.fail(canBuyError.errors[0].message)
          return
        }

        if (fundManagerError) {
          Toast.fail(fundManagerError.errors[0].message)
          return
        }
      }

      console.log(error, formValue)
    })
  }

  handleChange = value => {
    const tmpFormValue = this.state.formValue
    tmpFormValue.fundName = value
    this.setState(
      {
        formValue: tmpFormValue
      },
      () => {
        this.props.form.setFieldsValue(this.state.formValue)
      }
    )
  }

  handleRadioChange(value) {
    const tmpFormValue = this.state.formValue
    tmpFormValue.canBuy = value
    this.setState(
      {
        formValue: tmpFormValue
      },
      () => {
        this.props.form.setFieldsValue(this.state.formValue)
      }
    )
  }

  handleSelectChange = evt => {
    const tmpFormValue = this.state.formValue
    tmpFormValue.fundManager = evt.target.value
    this.setState(
      {
        formValue: tmpFormValue
      },
      () => {
        this.props.form.setFieldsValue(this.state.formValue)
      }
    )
  }

  render() {
    const { formValue } = this.state
    const { getFieldProps, getFieldError } = this.props.form
    const fundNameError = getFieldError('fundName')

    // radio items
    const radioItemValues = [
      {
        value: '1',
        label: '是'
      },
      {
        value: '0',
        label: '否'
      }
    ]

    // select
    const selectItemValues = [
      {
        value: '001',
        label: '王老师'
      },
      {
        value: '002',
        label: '张老师'
      },
      {
        value: '003',
        label: '陈老师'
      },
      {
        value: '004',
        label: '胡老师'
      }
    ]

    return (
      <div className="main-form">
        <List renderHeader={() => 'form表单示例'}>
          <InputItem
            {...getFieldProps('fundName', {
              trigger: ['onBlur'],
              rules: [
                { required: true, message: '基金名称不能为空' },
                {
                  max: 6,
                  message: '基金名称不能大于6个字'
                }
              ]
            })}
            value={formValue.fundName}
            error={fundNameError}
            label="基金名称"
            placeholder="请输入6位以内的名称"
            onChange={this.handleChange}
          />
        </List>
        <List renderHeader={() => '基金是否可以申赎'}>
          {radioItemValues.map(item => (
            <RadioItem
              key={item.value}
              checked={item.value === formValue.canBuy}
              label={item.label}
              onChange={() => {
                this.handleRadioChange(item.value)
              }}
            />
          ))}
          <input
            type="hidden"
            {...getFieldProps('canBuy', {
              rules: [{ required: true, message: '申赎条件为必选项' }]
            })}
            value={formValue.canBuy}
          />
        </List>
        <List>
          <SelectItem
            {...getFieldProps('fundManager', {
              rules: [{ required: true, message: '请选择基金经理' }]
            })}
            data={selectItemValues}
            label="基金经理"
            placeholder="请选择"
            value={formValue.fundManager}
            onChange={this.handleSelectChange}
          />
        </List>
        <WhiteSpace size="lg" />
        <Button
          type="primary"
          className="submit-button"
          onClick={this.handleSubmit}
        >
          提交
        </Button>

        <WhiteSpace size="xl" />
        <List renderHeader={() => '提交后详情展示'}>
          <Item extra={formValue.fundName || ''}>基金名称</Item>
          <Item extra={formValue.canBuy === '1' ? '是' : '否'}>基金申赎</Item>
          <Item
            extra={
              (formValue.fundManager &&
                selectItemValues.filter(
                  item => item.value === formValue.fundManager
                )[0].label) ||
              ''
            }
          >
            基金经理
          </Item>
        </List>
      </div>
    )
  }
}

export default createForm()(FormDemo)
