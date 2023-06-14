import React, { forwardRef } from 'react'
import type { CheckboxProps } from 'mireco'

import { CheckboxInput } from './checkbox-input'

export type { CheckboxProps }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, ...inputProps } = props
  return (
    <div className="custom-control custom-checkbox">
      <CheckboxInput
        ref={ref}
        {...inputProps}
      />
      <label className="custom-control-label" htmlFor={inputProps.id}>{children}</label>
    </div>
  )
})
