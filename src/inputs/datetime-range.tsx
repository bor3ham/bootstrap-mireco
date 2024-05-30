import React from 'react'
import classNames from 'classnames'
import { DatetimeRange as BaseDatetimeRange } from 'mireco'
import type { DatetimeRangeProps } from 'mireco'

export type { DatetimeRangeProps }

export const DatetimeRange: React.FC<DatetimeRangeProps> = (props) => (
  <BaseDatetimeRange
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)
