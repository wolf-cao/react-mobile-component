import React, { Component } from 'react'
import { Carousel, WhiteSpace } from '../../components/index'
import './carousel.less'

export default class CarouselDemo extends Component {
  handleClick(url) {
    location.href = url
  }

  render() {
    const imgArrs1 = [
      {
        image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
        url: 'http://www.baidu.com'
      },
      {
        image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
        url: 'http://www.alipay.com'
      },
      {
        image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
        url: 'http://www.sina.com'
      }
    ]

    const imgArrs2 = [
      {
        image: 'http://g1.dfcfw.com/g3/201809/20180925143740.jpg',
        url: 'http://www.baidu.com'
      }
    ]

    const images1 = imgArrs1.map(item => ({
      url: item.image,
      click: () => {
        this.handleClick.call(this, item.url)
      }
    }))

    const images2 = imgArrs2.map(item => ({
      url: item.image,
      click: () => {
        this.handleClick.call(this, item.url)
      }
    }))

    return (
      <div>
        <Carousel images={images1} />
        <WhiteSpace />
        <Carousel
          images={images2}
          noSwiping={true}
          paginationCustomizedClass="no-pagination"
        />
      </div>
    )
  }
}
