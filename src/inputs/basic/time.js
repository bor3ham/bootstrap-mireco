import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Time } from 'mireco/inputs'

function BootstrapTime(props) {
  return (
    <Time
      {...props}
      textClassName={classNames(props.textClassName, 'form-control')}
    />
  )
}
BootstrapTime.propTypes = {
  textClassName: PropTypes.string,
}

export default BootstrapTime
