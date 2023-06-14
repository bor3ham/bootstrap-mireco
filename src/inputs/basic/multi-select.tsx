import React, { forwardRef } from 'react'
import { MultiSelect as BaseMultiSelect } from 'mireco'
import type { MultiSelectProps } from 'mireco'

export type { MultiSelectProps }

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>((props, ref) => (
  <BaseMultiSelect
    ref={ref}
    {...props}
  />
))
