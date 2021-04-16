import React from 'react'
import PropTypes from 'prop-types'
import { AsyncSelect } from 'mireco/inputs'

function BootstrapAsyncSelect(props) {
  return (
    <AsyncSelect
      {...props}
      textClassName="form-control"
    />
  )
}
BootstrapAsyncSelect.propTypes = {
  className: PropTypes.string,
  getOptions: PropTypes.func,
}

export default BootstrapAsyncSelect
