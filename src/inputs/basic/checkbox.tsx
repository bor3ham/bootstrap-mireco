import React from 'react'
import type { CheckboxProps } from 'mireco'

import { CheckboxInput } from './checkbox-input'

export type { CheckboxProps }

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { children, ...inputProps } = props
  return (
    <div className="custom-control custom-checkbox">
      <CheckboxInput
        {...inputProps}
      />
      <label className="custom-control-label" htmlFor={inputProps.id}>{children}</label>
    </div>
  )
}
