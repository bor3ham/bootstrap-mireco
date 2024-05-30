import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Month as BaseMonth } from 'mireco'
import type { MonthProps } from 'mireco'

export type { MonthProps }

export const Month = forwardRef<HTMLInputElement, MonthProps>((props, ref) => (
  <BaseMonth
    ref={ref}
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
))
