import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'
import debounce from 'lodash.debounce'
function noop() {}
class Search extends Component {
  constructor(props) {
    super(props)
    this.debouncePrint = debounce(this.print, 300)
  }

  valueChange = e => {
    const value = e.target.value
    const target = e.target
    this.debouncePrint(target, value)
  }

  print = (target, value) => {
    const { onChange } = this.props
    if (onChange) {
      setTimeout(() => onChange(target, value))
    }
  }

  render() {
    const { placeholder, ...restProps } = this.props
    const onClear = () => {
      this.searchInput.value = ''
      this.props.onChange('')
    }

    return (
      <div className="pf-search">
        <Icon className="pf-btn-search" name={'sm-icon-search'} />
        <input
          {...restProps}
          ref={ref => (this.searchInput = ref)}
          className="pf-search-input"
          type="text"
          autocorrect="off"
          placeholder={placeholder}
          onChange={this.valueChange}
        />
        {this.searchInput && this.searchInput.value && (
          <Icon onClick={onClear} className="pf-btn-delete" name="shibai" />
        )}
      </div>
    )
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

Search.defaultProps = {
  placeholder: '请输入',
  onChange: noop
}

export default Search
