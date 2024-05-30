import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Datetime as BaseDatetime } from 'mireco'
import type { DatetimeProps } from 'mireco'

export type { DatetimeProps }

export const Datetime = forwardRef<HTMLDivElement, DatetimeProps>((props, ref) => (
  <BaseDatetime
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
