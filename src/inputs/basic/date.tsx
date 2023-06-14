import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Date as BaseDate } from 'mireco'
import type { DateProps } from 'mireco'

export type { DateProps }

const DateInput = forwardRef<HTMLInputElement, DateProps>((props, ref) => (
  <BaseDate
    ref={ref}
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
))

export { DateInput as Date }
