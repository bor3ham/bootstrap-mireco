import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Checkbox,
  Date as DateInput,
  Select,
  Text,
  Textarea,
  Time,
  AsyncSelect,
  Datetime,
  DatetimeRange,
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

  // form values (basic)
  const [checkbox, setCheckbox] = useState(false)
  const [date, setDate] = useState(null)
  const [select, setSelect] = useState(null)
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [time, setTime] = useState(null)
  // form values (compound)
  const [asyncSelect, setAsyncSelect] = useState(null)
  const [datetime, setDatetime] = useState(null)
  const [datetimeRange, setDatetimeRange] = useState(null)

  const handleSubmit = (event) => {
    console.log('submitted!')
    event.preventDefault()
  }

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
      <form className="card" onSubmit={handleSubmit}>
        <div className="card-body">
          <h5 className="card-title" style={{marginTop: 0}}>Basic</h5>
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
            <label htmlFor="date">Date</label>
            <DateInput
              id="date"
              placeholder="Date"
              value={date}
              onChange={(newValue, wasBlur) => setDate(newValue)}
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
            <label htmlFor="time">Time</label>
            <Time
              id="time"
              placeholder="Time"
              value={time}
              onChange={(newValue, wasBlur) => setTime(newValue)}
              {...fieldProps}
            />
          </div>
        </div>
        <div className="card-body border-top">
          <h5 className="card-title" style={{marginTop: 0}}>Compound</h5>
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
            <label htmlFor="datetime">Datetime</label>
            <Datetime
              id="datetime"
              block
              value={datetime}
              onChange={(newValue, wasBlur) => setDatetime(newValue)}
              {...fieldProps}
            />
          </div>
          <div className="form-group">
            <label htmlFor="datetimerange">Datetime Range</label>
            <DatetimeRange
              id="datetimerange"
              block
              value={datetimeRange}
              onChange={(newValue, wasBlur) => setDatetimeRange(newValue)}
              {...fieldProps}
            />
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}

const mount = document.querySelector('div.demo-mount-sample-form')
if (mount) {
  ReactDOM.render(<SampleForm />, mount)
}
