import React from 'react'
import classNames from 'classnames'
import { DateRange as BaseDateRange } from 'mireco'
import type { DateRangeProps } from 'mireco'

export type { DateRangeProps }

export const DateRange: React.FC<DateRangeProps> = (props) => (
  <BaseDateRange
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)
