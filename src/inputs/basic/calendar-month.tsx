import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { CalendarMonth as BaseCalendarMonth } from 'mireco'
import type { CalendarMonthProps } from 'mireco'

export type { CalendarMonthProps }

export const CalendarMonth = forwardRef<HTMLInputElement, CalendarMonthProps>((props, ref) => (
  <BaseCalendarMonth
    ref={ref}
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
))
