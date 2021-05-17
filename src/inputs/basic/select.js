import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Select } from 'mireco/inputs'

function BootstrapSelect(props) {
  return (
    <Select
      {...props}
      textClassName={classNames(props.textClassName, 'form-control')}
    />
  )
}
BootstrapSelect.propTypes = {
  textClassName: PropTypes.string,
}

export default BootstrapSelect
