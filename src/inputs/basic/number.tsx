import React from 'react'
import classNames from 'classnames'
import { Number as BaseNumber } from 'mireco'
import type { NumberProps } from 'mireco'

export type { NumberProps }

const NumberInput: React.FC<NumberProps> = (props) => (
  <BaseNumber
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)

export { NumberInput as Number }
