import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Number } from 'mireco/inputs'

function BootstrapNumber(props) {
  return (
    <Number
      {...props}
      className={classNames(props.className, 'form-control')}
    />
  )
}
BootstrapNumber.propTypes = {
  className: PropTypes.string,
}

export default BootstrapNumber
