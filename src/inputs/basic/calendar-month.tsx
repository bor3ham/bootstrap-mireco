import React from 'react'
import classNames from 'classnames'
import { CalendarMonth as BaseCalendarMonth } from 'mireco'
import type { CalendarMonthProps } from 'mireco'

export type { CalendarMonthProps }

export const CalendarMonth: React.FC<CalendarMonthProps> = (props) => (
  <BaseCalendarMonth
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)
