import React from 'react'
import { MultiSelect as BaseMultiSelect } from 'mireco'
import type { MultiSelectProps } from 'mireco'

export type { MultiSelectProps }

export const MultiSelect: React.FC<MultiSelectProps> = (props) => (
  <BaseMultiSelect {...props} />
)
