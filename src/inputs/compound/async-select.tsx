import React from 'react'
import classNames from 'classnames'
import { AsyncSelect as BaseAsyncSelect } from 'mireco'
import type { AsyncSelectProps } from 'mireco'

export type { AsyncSelectProps }

export const AsyncSelect: React.FC<AsyncSelectProps> = (props) => (
  <BaseAsyncSelect
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)
