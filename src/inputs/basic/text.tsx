import React from 'react'
import classNames from 'classnames'
import { Text as BaseText } from 'mireco'
import type { TextProps } from 'mireco'

export type { TextProps }

export const Text: React.FC<TextProps> = (props) => (
  <BaseText
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)
