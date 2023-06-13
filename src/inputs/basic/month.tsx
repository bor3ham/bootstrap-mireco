import React from 'react'
import classNames from 'classnames'
import { Month as BaseMonth } from 'mireco'
import type { MonthProps } from 'mireco'

export type { MonthProps }

export const Month: React.FC<MonthProps> = (props) => (
  <BaseMonth
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)
