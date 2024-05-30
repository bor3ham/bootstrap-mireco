import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { Duration as BaseDuration } from 'mireco'
import type { DurationProps } from 'mireco'

export type { DurationProps }

export const Duration = forwardRef<HTMLInputElement, DurationProps>((props, ref) => (
  <BaseDuration
    ref={ref}
    {...props}
    className={classNames(props.className, 'form-control')}
  />
))
