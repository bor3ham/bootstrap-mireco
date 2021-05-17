import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AsyncSelect } from 'mireco/inputs'

function BootstrapAsyncSelect(props) {
  return (
    <AsyncSelect
      {...props}
      textClassName={classNames(props.textClassName, 'form-control')}
    />
  )
}
BootstrapAsyncSelect.propTypes = {
  textClassName: PropTypes.string,
}

export default BootstrapAsyncSelect
