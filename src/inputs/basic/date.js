import React from 'react'
import PropTypes from 'prop-types'
import { Date as DateInput } from 'mireco/inputs'

function BootstrapDate(props) {
  return (
    <DateInput
      {...props}
      textClassName="form-control"
    />
  )
}
BootstrapDate.propTypes = {
  className: PropTypes.string,
}

export default BootstrapDate
