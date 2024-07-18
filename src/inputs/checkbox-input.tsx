import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { CheckboxInput as BaseCheckboxInput } from 'mireco'
import type { CheckboxInputProps } from 'mireco'

export type { CheckboxInputProps }

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>((props, ref) => (
  <BaseCheckboxInput
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-check-input')}
  />
))
