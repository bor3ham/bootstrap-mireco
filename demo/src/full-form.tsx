import React, { useState, useMemo } from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  startOfWeek,
  startOfMonth,
  startOfDay,
  endOfMonth,
  addDays,
  addHours,
} from 'date-fns'

import {
  CalendarMonth,
  Checkbox,
  Date as DateInput,
  Duration,
  MultiSelect,
  Number,
  Select,
  Text,
  Textarea,
  Time,
  AsyncSelect,
  Datetime,
  DatetimeRange,
  Month,
  Range,
  DateRange,
  type TimeInputValue,
  type DurationInputValue,
  type DateInputValue,
  type DatetimeInputValue,
  type DatetimeRangeInputValue,
  type DateRangeInputValue,
  dateAsDateValue,
} from 'bootstrap-mireco'
import type { SelectOption } from 'bootstrap-mireco' 

const SELECT_OPTIONS = [
  {value: 'red', label: 'Red'},
  {value: 'orange', label: 'Orange'},
  {value: 'yellow', label: 'Yellow'},
  {value: 'green', label: 'Forest Green'},
  {value: 'blue', label: 'Blue-ish Yellow'},
  {value: 'brown', label: 'Forest Brown'},
  // more to fill it out and showcase scroll
  {value: 'aqua', label: 'Aquamarine'},
  {value: 'pink', label: 'Hot Pink'},
  {value: 'lemon', label: 'Lemon Yellow'},
]
function loadResults(searchTerm: string): Promise<SelectOption[]> {
  const keyedTerm = searchTerm.toLowerCase().trim().replace(' ', '_')
  return new Promise((resolve) => {
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

type InputWrapperProps = {
  block: boolean
  inputId?: string
  label: string
  children: React.ReactNode
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  block,
  inputId,
  label,
  children,
}) => (
  <div className="form-group">
    <label htmlFor={inputId}>{label}</label>
    {!block && ' '}
    {children}
  </div>
)

const FullForm = () => {
  // form state
  const [disabled, setDisabled] = useState(false)
  const [block, setBlock] = useState(true)
  const fieldProps = {
    disabled,
    block,
  }

  // form values
  const [text, setText] = useState<string>('')
  const [textarea, setTextarea] = useState<string>('')
  const [checkbox, setCheckbox] = useState(false)
  const [number, setNumber] = useState(null)
  const [range, setRange] = useState(null)
  const [time, setTime] = useState<TimeInputValue>(null)
  const [duration, setDuration] = useState<DurationInputValue>(null)
  const [date, setDate] = useState<DateInputValue>(null)
  const [month, setMonth] = useState(null)
  const [calendarMonth, setCalendarMonth] = useState(null)
  const [datetime, setDatetime] = useState<DatetimeInputValue>(null)
  const [dateRange, setDateRange] = useState<DateRangeInputValue>({
    start: null,
    end: null,
  })
  const [datetimeRange, setDatetimeRange] = useState<DatetimeRangeInputValue>({
    start: null,
    end: null,
  })
  const [select, setSelect] = useState(null)
  const [multiSelect, setMultiSelect] = useState<SelectOption[]>([])
  const [asyncSelect, setAsyncSelect] = useState(null)

  const dateRangeShortcuts = useMemo(() => {
    const today = new Date()
    const weekStart = startOfWeek(today, { weekStartsOn: 1 })
    const monthStart = startOfMonth(today)
    const nextMonthStart = startOfDay(addDays(endOfMonth(monthStart), 1))
    const s = []
    s.push({
      label: 'This week',
      key: 'this_week',
      value: {
        start: dateAsDateValue(weekStart),
        end: dateAsDateValue(addDays(weekStart, 6)),
      },
    })
    s.push({
      label: 'Next week',
      key: 'next_week',
      value: {
        start: dateAsDateValue(addDays(weekStart, 7)),
        end: dateAsDateValue(addDays(weekStart, 13)),
      },
    })
    s.push({
      label: 'This month',
      key: 'this_month',
      value: {
        start: dateAsDateValue(monthStart),
        end: dateAsDateValue(endOfMonth(monthStart)),
      },
    })
    s.push({
      label: 'Next month',
      key: 'next_month',
      value: {
        start: dateAsDateValue(nextMonthStart),
        end: dateAsDateValue(endOfMonth(nextMonthStart)),
      },
    })
    return s
  }, [])
  const datetimeRangeShortcuts = useMemo(() => {
    const todayStart = startOfDay(new Date())
    const weekStart = startOfWeek(todayStart, { weekStartsOn: 1 })
    const s = []
    s.push({
      label: 'This week',
      key: 'this_week',
      value: {
        start: weekStart.valueOf(),
        end: addDays(weekStart, 7).valueOf(),
      },
    })
    s.push({
      label: 'Next week',
      key: 'next_week',
      value: {
        start: addDays(weekStart, 7).valueOf(),
        end: addDays(weekStart, 14).valueOf(),
      },
    })
    s.push({
      label: 'Today workday',
      key: 'today_workday',
      value: {
        start: addHours(todayStart, 9).valueOf(),
        end: addHours(todayStart, 17).valueOf(),
      },
    })
    s.push({
      label: 'Tomorrow workday',
      key: 'tomorrow_workday',
      value: {
        start: addHours(addDays(todayStart, 1), 9).valueOf(),
        end: addHours(addDays(todayStart, 1), 17).valueOf(),
      },
    })
    return s
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
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
        >
          Disable form
        </Checkbox>
      </div>
      <div className="form-group">
        <Checkbox
          id="block"
          value={block}
          onChange={setBlock}
        >
          Block mode
        </Checkbox>
      </div>
      <form className="card" onSubmit={handleSubmit}>
        <div className="card-body">
          <InputWrapper
            block={block}
            inputId="text"
            label="Text"
          >
            <Text
              id="text"
              placeholder="Text"
              value={text}
              onChange={setText}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="textarea"
            label="Textarea"
          >
            <Textarea
              id="textarea"
              placeholder="Textarea"
              value={textarea}
              onChange={setTextarea}
              {...fieldProps}
            />
          </InputWrapper>
          <div className="form-group">
            <Checkbox
              id="check"
              value={checkbox}
              onChange={setCheckbox}
              {...fieldProps}
            >
              Checkbox
            </Checkbox>
          </div>
          <InputWrapper
            block={block}
            inputId="number"
            label="Number"
          >
            <Number
              id="number"
              placeholder="Number"
              value={number}
              onChange={setNumber}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="range"
            label="Range"
          >
            <Range
              id="range"
              value={range}
              onChange={(newValue) => setRange(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="time"
            label="Time"
          >
            <Time
              textId="time"
              placeholder="Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="duration"
            label="Duration"
          >
            <Duration
              id="duration"
              placeholder="Duration"
              value={duration}
              onChange={(newValue) => setDuration(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="date"
            label="Date"
          >
            <DateInput
              textId="date"
              placeholder="Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="month"
            label="Month"
          >
            <Month
              textId="month"
              placeholder="Month"
              value={month}
              onChange={(newValue) => setMonth(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="calendarMonth"
            label="Calendar Month"
          >
              <CalendarMonth
                textId="calendarMonth"
                placeholder="Calendar Month"
                value={calendarMonth}
                onChange={(newValue) => setCalendarMonth(newValue)}
                {...fieldProps}
              />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="datetime"
            label="Datetime"
          >
            <Datetime
              dateId="datetime"
              value={datetime}
              onChange={(newValue) => setDatetime(newValue)}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="dateRange"
            label="Date Range"
          >
            <DateRange
              startId="dateRange"
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              shortcuts={dateRangeShortcuts}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="datetimeRange"
            label="Datetime Range"
          >
            <DatetimeRange
              startDateId="datetimeRange"
              value={datetimeRange}
              onChange={(newValue) => setDatetimeRange(newValue)}
              shortcuts={datetimeRangeShortcuts}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="select"
            label="Select"
          >
            <Select
              textId="select"
              placeholder="Select"
              value={select}
              onChange={(newValue) => setSelect(newValue)}
              options={SELECT_OPTIONS}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="multiSelect"
            label="Multi Select"
          >
            <MultiSelect
              textId="multiSelect"
              placeholder="Multi Select"
              value={multiSelect}
              onChange={(newValue) => setMultiSelect(newValue)}
              options={SELECT_OPTIONS}
              {...fieldProps}
            />
          </InputWrapper>
          <InputWrapper
            block={block}
            inputId="asyncSelect"
            label="Async Select"
          >
            <AsyncSelect
              textId="asyncSelect"
              placeholder="Async Select"
              value={asyncSelect}
              onChange={(newValue) => setAsyncSelect(newValue)}
              getOptions={loadResults}
              {...fieldProps}
            />
          </InputWrapper>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}

const container = document.querySelector('div.demo-mount-full-form')
if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(<FullForm />)
}
