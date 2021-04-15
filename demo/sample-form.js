import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Checkbox, Text, Textarea, Select, Date, Datetime } from 'bootstrap-mireco'

const CLEARABLE_SELECT_OPTIONS = [
  {value: 'closed', label: 'Closed'},
  {value: 'pending', label: 'Pending Investigation'},
  {value: 'conflict_interest', label: 'Conflict of Interest'},
  {value: 'transferred', label: 'Transferred to Another Department'},
  {value: 'solved', label: 'Solved'},
  {value: 'bungled', label: 'Ruined'},
  {value: 'false_alarm', label: 'False Alarm'},
]
const REQUIRED_SELECT_OPTIONS = [
  {value: 'red', label: 'Furious Red'},
  {value: 'green', label: 'Forest Green'},
  {value: 'blue', label: 'Sky Blue'},
]

function SampleForm() {

  // form state
  const [disabled, setDisabled] = useState(false)
  const [block, setBlock] = useState(true)
  const fieldProps = {
    disabled,
    block,
  }

  // form values
  const [checkbox, setCheckbox] = useState(false)
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [clearableSelect, setClearableSelect] = useState(null)
  const [requiredSelect, setRequiredSelect] = useState(REQUIRED_SELECT_OPTIONS[0].value)
  const [date, setDate] = useState(null)
  const [datetime, setDatetime] = useState(null)

  return (
    <>
      <div className="form-group form-check">
        <Checkbox
          id="disable"
          value={disabled}
          onChange={setDisabled}
          label="Disable form"
        />
      </div>
      <div className="form-group form-check">
        <Checkbox
          id="block"
          value={block}
          onChange={setBlock}
          label="Block mode"
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="form-group form-check">
            <Checkbox
              id="check"
              value={checkbox}
              onChange={setCheckbox}
              label="Checkbox"
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <Text
              placeholder="Text"
              value={text}
              onChange={setText}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <Textarea
              placeholder="Textarea"
              value={textarea}
              onChange={setTextarea}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <Select
              placeholder="Clearable Select"
              value={clearableSelect}
              onChange={(newValue, wasBlur) => setClearableSelect(newValue)}
              options={CLEARABLE_SELECT_OPTIONS}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <Select
              placeholder="Required Select"
              value={requiredSelect}
              onChange={(newValue, wasBlur) => setRequiredSelect(newValue)}
              options={REQUIRED_SELECT_OPTIONS}
              nullable={false}
              {...fieldProps}
            />
          </div>
          {/* <div className="form-group"> */}
          {/*   <Date */}
          {/*     placeholder="Date" */}
          {/*     block */}
          {/*     value={date} */}
          {/*     onChange={setDate} */}
          {/*     {...fieldProps} */}
          {/*   /> */}
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/*   <Datetime */}
          {/*     placeholder="Datetime" */}
          {/*     block */}
          {/*     value={datetime} */}
          {/*     onChange={setDatetime} */}
          {/*     {...fieldProps} */}
          {/*   /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

const mount = document.querySelector('div.demo-mount-sample-form')
if (mount) {
  ReactDOM.render(<SampleForm />, mount)
}
