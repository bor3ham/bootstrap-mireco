import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'mireco/main'

function BootstrapSelect(props) {
  return (
    <Select
      {...props}
      textClassName="form-control"
    />
  )
}
BootstrapSelect.propTypes = {
  className: PropTypes.string,
}

export default BootstrapSelect
