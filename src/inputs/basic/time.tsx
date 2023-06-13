import React from 'react'
import classNames from 'classnames'
import { Time as BaseTime } from 'mireco'
import type { TimeProps } from 'mireco'

export type { TimeProps }

export const Time: React.FC<TimeProps> = (props) => (
  <BaseTime
    {...props}
    textClassName={classNames(props.textClassName, 'form-control')}
  />
)
