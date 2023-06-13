import React from 'react'
import classNames from 'classnames'
import { CheckboxInput as BaseCheckboxInput } from 'mireco'
import type { CheckboxInputProps } from 'mireco'

export type { CheckboxInputProps }

export const CheckboxInput: React.FC<CheckboxInputProps> = (props) => (
  <BaseCheckboxInput
    {...props}
    className={classNames(props.className, 'custom-control-input')}
  />
)
