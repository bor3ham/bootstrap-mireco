import React from 'react'
import PropTypes from 'prop-types'

import BootstrapCheckboxInput from './checkbox-input.js'

function BootstrapCheckbox(props) {
  const { label, ...inputProps } = props
  return (
    <div className="custom-control custom-checkbox">
      <BootstrapCheckboxInput
        {...inputProps}
      />
      <label className="custom-control-label" htmlFor={inputProps.id}>{label}</label>
    </div>
  )
}
BootstrapCheckbox.propTypes = {
  label: PropTypes.string,
}

export default BootstrapCheckbox
