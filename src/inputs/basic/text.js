import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from 'mireco/main'

function BootstrapText(props) {
  return (
    <Text
      {...props}
      className={classNames(props.className, 'form-control')}
    />
  )
}
BootstrapText.propTypes = {
  className: PropTypes.string,
}

export default BootstrapText
