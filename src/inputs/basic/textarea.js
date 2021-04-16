import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Textarea } from 'mireco/inputs'

function BootstrapTextarea(props) {
  return (
    <Textarea
      {...props}
      className={classNames(props.className, 'form-control')}
    />
  )
}
BootstrapTextarea.propTypes = {
  className: PropTypes.string,
}

export default BootstrapTextarea
