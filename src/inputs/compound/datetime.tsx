import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Datetime as BaseDatetime } from 'mireco'
import type { DatetimeProps } from 'mireco'

export type { DatetimeProps }

export const Datetime = forwardRef<HTMLDivElement, DatetimeProps>((props, ref) => (
  <BaseDatetime
    ref={ref}
    {...props}
    dateTextClassName={classNames(props.dateTextClassName, 'form-control')}
    timeTextClassName={classNames(props.timeTextClassName, 'form-control')}
    clearButtonClassName={classNames(props.clearButtonClassName, 'btn btn-light')}
  />
))
