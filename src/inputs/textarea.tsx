import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Textarea as BaseTextarea } from 'mireco'
import type { TextareaProps } from 'mireco'

export type { TextareaProps }

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => (
  <BaseTextarea
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
