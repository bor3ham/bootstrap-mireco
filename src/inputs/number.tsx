import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Number as BaseNumber } from 'mireco'
import type { NumberProps } from 'mireco'

export type { NumberProps }

const NumberInput = forwardRef<HTMLInputElement, NumberProps>((props, ref) => (
  <BaseNumber
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))

export { NumberInput as Number }
