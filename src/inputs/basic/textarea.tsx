import React from 'react'
import classNames from 'classnames'
import { Textarea as BaseTextarea } from 'mireco'
import type { TextareaProps } from 'mireco'

export type { TextareaProps }

export const Textarea: React.FC<TextareaProps> = (props) => (
  <BaseTextarea
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)
