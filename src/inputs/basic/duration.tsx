import React from 'react'
import classNames from 'classnames'
import { Duration as BaseDuration } from 'mireco'
import type { DurationProps } from 'mireco'

export type { DurationProps }

export const Duration: React.FC<DurationProps> = (props) => (
  <BaseDuration
    {...props}
    className={classNames(props.className, 'form-control')}
  />
)
