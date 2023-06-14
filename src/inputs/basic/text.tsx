import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Text as BaseText } from 'mireco'
import type { TextProps } from 'mireco'

export type { TextProps }

export const Text = forwardRef<HTMLInputElement, TextProps>((props, ref) => (
  <BaseText
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
