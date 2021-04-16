import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { CheckboxInput } from 'mireco/inputs'

function BootstrapCheckboxInput(props) {
  return (
    <CheckboxInput
      {...props}
      className={classNames(props.className, 'custom-control-input')}
    />
  )
}
BootstrapCheckboxInput.propTypes = {
  className: PropTypes.string,
}

export default BootstrapCheckboxInput
