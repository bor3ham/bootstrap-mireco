import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Checkbox,
  Text,
  Textarea,
  Select,
  AsyncSelect,
  Date as DateInput,
  Datetime,
} from 'bootstrap-mireco/inputs'

const SELECT_OPTIONS = [
  {value: 'closed', label: 'Closed'},
  {value: 'pending', label: 'Pending Investigation'},
  {value: 'conflict_interest', label: 'Conflict of Interest'},
  {value: 'transferred', label: 'Transferred to Another Department'},
  {value: 'solved', label: 'Solved'},
  {value: 'bungled', label: 'Ruined'},
  {value: 'false_alarm', label: 'False Alarm'},
  {value: 'cold', label: 'Cold'},
  {value: 'brief', label: 'Brief'},
]
function loadResults(searchTerm) {
  const keyedTerm = searchTerm.toLowerCase().trim().replace(' ', '_')
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([
        {
          value: `${keyedTerm}_rusted`,
          label: `${searchTerm} Rusted`,
        },
        {
          value: `${keyedTerm}`,
          label: `${searchTerm} (500)`,
        },
        {
          value: `new_${keyedTerm}`,
          label: `New ${searchTerm}`,
        },
        {
          value: 'unfiltered_result',
          label: 'Result to test filtering is not happening',
        },
      ])
    }, 1000)
  })
}

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
  const [select, setSelect] = useState(null)
  const [asyncSelect, setAsyncSelect] = useState(null)
  const [date, setDate] = useState(null)
  // const [datetime, setDatetime] = useState(null)

  return (
    <>
      <div className="form-group">
        <Checkbox
          id="disable"
          value={disabled}
          onChange={setDisabled}
          label="Disable form"
        />
      </div>
      <div className="form-group">
        <Checkbox
          id="block"
          value={block}
          onChange={setBlock}
          label="Block mode"
        />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <Checkbox
              id="check"
              value={checkbox}
              onChange={setCheckbox}
              label="Checkbox"
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <Text
              id="text"
              placeholder="Text"
              value={text}
              onChange={setText}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Textarea</label>
            <Textarea
              id="textarea"
              placeholder="Textarea"
              value={textarea}
              onChange={setTextarea}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="clearable-select">Select</label>
            <Select
              id="clearable-select"
              placeholder="Case Status"
              value={select}
              onChange={(newValue, wasBlur) => setSelect(newValue)}
              options={SELECT_OPTIONS}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="async-select">Async Select</label>
            <AsyncSelect
              id="async-select"
              placeholder="Favourite Movie"
              value={asyncSelect}
              onChange={(newValue, wasBlur) => setAsyncSelect(newValue)}
              getOptions={loadResults}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <DateInput
              id="date"
              placeholder="Date"
              value={date}
              onChange={setDate}
              {...fieldProps}
            />
          </div>
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
