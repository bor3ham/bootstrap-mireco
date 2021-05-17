import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DatetimeRange } from 'mireco/inputs'

function BootstrapDatetimeRange(props) {
  return (
    <DatetimeRange
      {...props}
      startDateTextClassName={classNames(props.startDateTextClassName, 'form-control')}
      startTimeTextClassName={classNames(props.startTimeTextClassName, 'form-control')}
      endDateTextClassName={classNames(props.endDateTextClassName, 'form-control')}
      endTimeTextClassName={classNames(props.endTimeTextClassName, 'form-control')}
      clearButtonClassName={classNames(props.clearButtonClassName, 'btn btn-light')}
    />
  )
}
BootstrapDatetimeRange.propTypes = {
  startDateTextClassName: PropTypes.string,
  startTimeTextClassName: PropTypes.string,
  endDateTextClassName: PropTypes.string,
  endTimeTextClassName: PropTypes.string,
  clearButtonClassName: PropTypes.string,
}

export default BootstrapDatetimeRange
