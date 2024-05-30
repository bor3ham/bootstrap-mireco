import React, { forwardRef } from 'react'
import { MultiSelect as BaseMultiSelect } from 'mireco'
import type { MultiSelectProps } from 'mireco'
import classNames from 'classnames'

export type { MultiSelectProps }

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>((props, ref) => (
  <BaseMultiSelect
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
