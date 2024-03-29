import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { DatetimeRange as BaseDatetimeRange } from 'mireco'
import type { DatetimeRangeProps } from 'mireco'

export type { DatetimeRangeProps }

export const DatetimeRange = forwardRef<HTMLDivElement, DatetimeRangeProps>((props, ref) => (
  <BaseDatetimeRange
    ref={ref}
    {...props}
    startDateTextClassName={classNames(props.startDateTextClassName, 'form-control')}
    startTimeTextClassName={classNames(props.startTimeTextClassName, 'form-control')}
    endDateTextClassName={classNames(props.endDateTextClassName, 'form-control')}
    endTimeTextClassName={classNames(props.endTimeTextClassName, 'form-control')}
    clearButtonClassName={classNames(props.clearButtonClassName, 'btn btn-light')}
  />
))
