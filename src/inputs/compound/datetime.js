import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Datetime } from 'mireco/inputs'

function BootstrapDatetime(props) {
  return (
    <Datetime
      {...props}
      dateTextClassName={classNames(props.dateTextClassName, 'form-control')}
      timeTextClassName={classNames(props.timeTextClassName, 'form-control')}
      clearButtonClassName={classNames(props.clearButtonClassName, 'btn btn-light')}
    />
  )
}
BootstrapDatetime.propTypes = {
  dateTextClassName: PropTypes.string,
  timeTextClassName: PropTypes.string,
  clearButtonClassName: PropTypes.string,
}

export default BootstrapDatetime
