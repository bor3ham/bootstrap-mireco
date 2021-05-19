import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Duration } from 'mireco/inputs'

function BootstrapDuration(props) {
  return (
    <Duration
      {...props}
      className={classNames(props.className, 'form-control')}
    />
  )
}
BootstrapDuration.propTypes = {
  className: PropTypes.string,
}

export default BootstrapDuration
