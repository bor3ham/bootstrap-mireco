import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Checkbox, Text, Textarea, Date, Datetime } from 'mireco'

function BlockForm() {

  // form state
  const [disabled, setDisabled] = useState(false)
  const fieldProps = {
    disabled,
  }

  // form values
  const [checkbox, setCheckbox] = useState(false)
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [date, setDate] = useState(null)
  const [datetime, setDatetime] = useState(null)

  return (
    <div>
      <Checkbox
        label="Checkbox"
        block
        value={checkbox}
        onChange={setCheckbox}
        {...fieldProps}
      />
      <Text
        placeholder="Text"
        block
        value={text}
        onChange={setText}
        {...fieldProps}
      />
      <Textarea
        placeholder="Textarea"
        block
        value={textarea}
        onChange={setTextarea}
        {...fieldProps}
      />
      <Date
        placeholder="Date"
        block
        value={date}
        onChange={setDate}
        {...fieldProps}
      />
      <Datetime
        placeholder="Datetime"
        block
        value={datetime}
        onChange={setDatetime}
        {...fieldProps}
      />
    </div>
  )
}

const mount = document.querySelector('div.demo-mount-block-form')
if (mount) {
  ReactDOM.render(<BlockForm />, mount)
}
