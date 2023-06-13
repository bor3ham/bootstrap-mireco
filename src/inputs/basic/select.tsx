import React from 'react'
import classNames from 'classnames'
import { Select as BaseSelect } from 'mireco'
import type { SelectProps } from 'mireco'

export type { SelectProps }

export const Select: React.FC<SelectProps> = (props) => (
  <BaseSelect
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)
