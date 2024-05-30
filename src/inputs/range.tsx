import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Range as BaseRange } from 'mireco'
import type { RangeProps } from 'mireco'

export type { RangeProps }

export const Range = forwardRef<HTMLInputElement, RangeProps>((props, ref) => (
  <BaseRange
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-range')}
  />
))
