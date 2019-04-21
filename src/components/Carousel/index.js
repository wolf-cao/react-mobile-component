import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCarousel from 'bee-carousel'
import 'bee-carousel/build/Carousel.css'

const noop = () => {}

export default class Carousel extends Component {
  render() {
    const { images, ...nestProps } = this.props
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      effect: 'coverflow',
      loop: true,
      on: {
        click: () => {
          images[this.cabox.swiper.realIndex].click
            ? images[this.cabox.swiper.realIndex].click()
            : noop()
        }
      }
    }

    const imageElements = images.map(item => (
      <div>
        <img src={item.url} />
      </div>
    ))

    if (images.length < 2) {
      return (
        <div
          className="pf-swipper-single"
          onClick={() => {
            images[0].click ? images[0].click() : noop()
          }}
        >
          <img src={images[0].url} />
        </div>
      )
    }

    return (
      <ReactCarousel ref={el => (this.cabox = el)} {...params} {...nestProps}>
        {imageElements}
      </ReactCarousel>
    )
  }
}

Carousel.propTypes = {
  images: PropTypes.array
}

Carousel.defaultProps = {}
