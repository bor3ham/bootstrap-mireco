import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Time as BaseTime } from 'mireco'
import type { TimeProps } from 'mireco'

export type { TimeProps }

export const Time = forwardRef<HTMLInputElement, TimeProps>((props, ref) => (
  <BaseTime
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
