import React from 'react'
import classNames from 'classnames'
import { Date as BaseDate } from 'mireco'
import type { DateProps } from 'mireco'

export type { DateProps }

const DateInput: React.FC<DateProps> = (props) => (
  <BaseDate
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)

export { DateInput as Date }
