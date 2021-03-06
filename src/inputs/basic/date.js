import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Date as DateInput } from 'mireco/inputs'

function BootstrapDate(props) {
  return (
    <DateInput
      {...props}
      textClassName={classNames(props.textClassName, 'form-control')}
    />
  )
}
BootstrapDate.propTypes = {
  textClassName: PropTypes.string,
}

export default BootstrapDate
