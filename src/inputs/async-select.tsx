import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { AsyncSelect as BaseAsyncSelect } from 'mireco'
import type { AsyncSelectProps } from 'mireco'

export type { AsyncSelectProps }

export const AsyncSelect = forwardRef<HTMLInputElement, AsyncSelectProps>((props, ref) => (
  <BaseAsyncSelect
    ref={ref}
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
))
