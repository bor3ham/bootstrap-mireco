import React, { forwardRef } from 'react'
import { WidgetBlock, type CheckboxProps } from 'mireco'

import { CheckboxInput } from './checkbox-input'

export type { CheckboxProps }

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { children, block, ...inputProps } = props
  return (
    <WidgetBlock className="form-check" block={block}>
      <CheckboxInput
        ref={ref}
        {...inputProps}
      />
      <label className="form-check-label" htmlFor={inputProps.id}>{children}</label>
    </WidgetBlock>
  )
})
