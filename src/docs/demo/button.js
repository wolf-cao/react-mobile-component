import React, { Component } from 'react'
import { Button, WhiteSpace, WingSpace } from '../../components/index'

export default class ButtonDemo extends Component {
  render() {
    return (
      <WingSpace>
        <WhiteSpace />
        <Button>主按钮</Button>
        <WhiteSpace />
        <Button type="primary" round>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary-text">主按钮</Button>
        <WhiteSpace />
        <Button type="primary">主按钮</Button>
        <WhiteSpace />
        <Button disabled>主按钮</Button>
        <WhiteSpace />
        <Button type="normal">主按钮</Button>
        <WhiteSpace />
        <Button type="primary" icon="chenggong" iconColor="#fff">
          主按钮
        </Button>
        <WhiteSpace />
        <Button size="md" mode="text" type="primary">
          主按钮
        </Button>
        <WhiteSpace />
        <Button size="md" mode="text" type="blue">
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary" ghost>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="blue" ghost>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="blue" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary-text" size="md" inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary" size="md" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="blue" size="md" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="normal" size="mini" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary" size="mini" ghost inline>
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="blue" size="mini" ghost inline>
          主按钮
        </Button>
      </WingSpace>
    )
  }
}
