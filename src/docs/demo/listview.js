import React, { Component } from 'react'
import { ListView, Spin } from '../../components/index'
import Ajax from 'axios'
import './listview.less'

class ListViewDemo extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      dataSource,
      listData: [],
      isLoading: false,
      height: window.innerHeight,
      pageNum: 0,
      finish: false
    }
  }

  componentDidMount() {
    document.body.style.overflowY = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod/i
    )
      ? 'hidden'
      : 'auto'

    // simulate initial Ajax
    this.getRequestData()
  }

  getRequestData() {
    const { listData, pageNum, dataSource } = this.state

    this.setState(
      {
        isLoading: true,
        pageNum: pageNum + 1
      },
      () => {
        Ajax({
          url: 'http://61.129.129.137:8090/api/Fortune/GetHotAuthorList',
          method: 'post',
          data: {
            AccountType: '',
            PageSize: 15,
            PageIndex: pageNum
          }
        })
          .then(res => (res = res.data))
          .then(res => {
            if (listData.length >= res.Result.TotalCount) {
              this.setState({
                finish: true,
                isLoading: false
              })
              return
            }
            this.setState(
              {
                isLoading: false,
                listData: this.state.listData.concat(res.Result.Result)
              },
              () => {
                this.setState({
                  dataSource: dataSource.cloneWithRows(this.state.listData)
                })
              }
            )
          })
      }
    )
  }

  onEndReached = () => {
    const { finish, isLoading } = this.state

    if (isLoading || finish) {
      return
    }
    this.setState({ isLoading: true }, () => {
      this.getRequestData()
    })
  }

  render() {
    const { onEndReached } = this
    const { height, isLoading, dataSource } = this.state

    // 头模板
    const headerRender = () => (
      <div className="cstm-list-header">
        <span className="cstm-list-header-col1">产品名称</span>
        <span className="cstm-list-header-col2">最新净值</span>
        <span className="cstm-list-header-col3">今年以来</span>
      </div>
    )

    // 行模板
    const rowRender = rowItem => (
      <div className="cstm-list-view-item">
        <span className="cstm-list-item-main">
          <span className="cstm-list-item-title">{rowItem.AccountName}</span>
          <span className="cstm-list-item-subtitle">
            {rowItem.QualificationInfo}
          </span>
        </span>
        <span className="cstm-list-item-col1">{rowItem.ArticleCount}</span>
        <span className="cstm-list-item-col2">{rowItem.CaiFuHaoType}</span>
      </div>
    )

    return (
      <div className="cstm-list-view">
        {headerRender()}
        <ListView
          dataSource={dataSource}
          isLoading={isLoading}
          height={height}
          renderRow={rowData => rowRender(rowData)}
          onEndReached={onEndReached}
        />
      </div>
    )
  }
}

export default ListViewDemo
