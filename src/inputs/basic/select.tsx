import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Select as BaseSelect } from 'mireco'
import type { SelectProps } from 'mireco'

export type { SelectProps }

export const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => (
  <BaseSelect
    ref={ref}
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
))
