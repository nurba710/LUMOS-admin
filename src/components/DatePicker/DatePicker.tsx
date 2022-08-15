import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
	dayOfTheWeek,
	getCurrentMonthDays,
	getDaysAmountInAMonth,
	getNextMonthDays,
	getPreviousMonthDays,
	months,
} from './consts'
import { CalendarButtonStyle, CalendarPanelItemStyle, CalendarPanelStyle } from './style'

export interface DatePickerProps {
	value: Date;
	onChange: (value: Date) => void;
	min?: Date;
	max?: Date;

}

export interface DatePickerPopupProps {
	selectedValue: Date;
	onChange: (value: Date) => void;
	inputValueDate?: Date;
	min?: Date;
	max?: Date;
}

export interface DateCellsItem {
	date: number;
	month: number;
	year: number;

	isToday?: boolean;
	isSelected?: boolean;
}

function isToday(todayDate:Date, cell:DateCellsItem) {
return todayDate.getFullYear() === cell.year&&todayDate.getMonth() === cell.month&&todayDate.getDate()===cell.date
}

const validValueRegex = /^\d{2}-\d{2}-\d{4}$/
const isValidDateString = (value: string) => {
	if (!validValueRegex.test(value)) {
		return false
	}
	const [date, month, year] = value.split('-').map(v => parseInt(v, 10))

	if (month < 1 || month > 12 || date < 1) {
		return false
	}
	const maxDaysInAMonth = getDaysAmountInAMonth(year, month - 1)
	if (date > maxDaysInAMonth) {
		return false
	}
	return true
}

const addLeadingZeroIfNeeded = (value: number) => {
	if (value > 9) {
		return value.toString()
	}
	return `0${value}`
}

const getInputValueFromDate = (value: Date) => {
	const date = addLeadingZeroIfNeeded(value.getDate())
	const month = addLeadingZeroIfNeeded(value.getMonth() + 1)
	const year = value.getFullYear()
	return `${date}-${month}-${year}`
}


function useLatest<T>(value: T) {
	const valueRef = useRef(value)
	useLayoutEffect(() => {
		valueRef.current = value
	}, [value])

	return valueRef
}


const DatePicker: React.FC<DatePickerProps> = ({
																								 value,
																								 onChange,
																								 min,
																								 max,
																							 }) => {
	const [showPopup, setShowPopup] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const elementRef = useRef<HTMLDivElement>(null)
	const latestInputValue = useLatest(inputValue)
	const latestValue = useLatest(value)
	useLayoutEffect(() => {
		setInputValue(getInputValueFromDate(value))
	}, [value])

	useEffect(() => {
		const element = elementRef.current

		if (!element) return

		const onDocumentClick = (e: MouseEvent) => {
			const target = e.target
			if (!(target instanceof Node)) {
				return
			}
			if (element.contains(target)) {
				return
			}
			const dateFromInputValue = getDateFromInputValue(latestInputValue.current)
			if (dateFromInputValue) {
				onChange(dateFromInputValue)
			} else {
				setInputValue(getInputValueFromDate(latestValue.current))
			}
			setShowPopup(false)
		}
		document.addEventListener('click', onDocumentClick)

		return () => {
			document.removeEventListener('click', onDocumentClick)
		}
	}, [latestInputValue, latestValue])

	const handleChange = (value: Date) => {
		onChange(value)
		setShowPopup(false)
	}
	const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value.trim())

	}
	const onInputClick = () => {
		setShowPopup(true)
	}

	const getDateFromInputValue = (inputValue: string) => {
		if (!isValidDateString(inputValue)) {
			return
		}
		const [date, month, year] = inputValue.split('-').map(v => parseInt(v, 10))
		const dateObj = new Date(year, month - 1, date)
		return dateObj
	}


	const inputValueDate = useMemo(() => {
		return getDateFromInputValue(inputValue)
	}, [inputValue])

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key !== 'Enter') {
			return
		}
		const date = getDateFromInputValue(inputValue)
		if (!date) {
			setInputValue(getInputValueFromDate(value))
		} else {
			handleChange(date)
		}
		setShowPopup(false)
	}
	return <div ref={elementRef} style={{ position: 'relative', display: 'inline-block' }}>
		<input onKeyDown={onKeyDown} onClick={onInputClick} value={inputValue}
					 onChange={onInputValueChange} />
		{showPopup && (
			<div style={{ position: 'absolute', top: '100%', left: 0 }}>
				<DatePickerPopupContent inputValueDate={inputValueDate} selectedValue={value} onChange={handleChange} min={min}
																max={max} />
			</div>
		)}
	</div>
}


const DatePickerPopupContent: React.FC<DatePickerPopupProps> = ({
																																	inputValueDate,
																																	selectedValue,
																																	onChange,
																																	min,
																																	max,
																																}) => {
	const [panelYear, setPanelYear] = useState(() => selectedValue.getFullYear())
	const [panelMonth, setPanelMonth] = useState(() => selectedValue.getMonth())
	const todayDate = useMemo(() => new Date(),[])

	useLayoutEffect(() => {
		if (!inputValueDate) {
			return
		}
		setPanelMonth(inputValueDate.getMonth())
		setPanelYear(inputValueDate.getFullYear())
	}, [inputValueDate])

	const [day, month, year] = useMemo(() => {
		const currentYear = selectedValue.getFullYear()
		const currentMonth = selectedValue.getMonth()
		const currentDay = selectedValue.getDate()
		return [currentDay, currentMonth, currentYear]
	}, [selectedValue])


	const dateCells = useMemo(() => {
		const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth)
		const currentMonthDays = getCurrentMonthDays(panelYear, panelMonth, daysInAMonth)
		const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth)
		const nextMonthDays = getNextMonthDays(panelYear, panelMonth)
		// console.log(daysInAMonth)

		return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
	}, [panelYear, panelMonth])


	const onDateSelect = (item: DateCellsItem) => {
		onChange(new Date(item.year, item.month, item.date))
	}

	const nextYear = () => {
		setPanelYear(year => year + 1)
	}
	const prevYear = () => {
		setPanelYear(year => year - 1)
	}
	const nextMonth = () => {
		if (panelMonth === 11) {
			setPanelMonth(0)
			setPanelYear(panelYear + 1)
		} else {
			setPanelMonth(panelMonth + 1)
		}
	}
	const prevMonth = () => {
		if (panelMonth === 0) {
			setPanelMonth(11)
			setPanelYear(panelYear - 1)
		} else {
			setPanelMonth(panelMonth - 1)
		}
	}
	return (
		<div>
			<div>
				{months[panelMonth]} {panelYear}
			</div>
			<CalendarButtonStyle>
				<button onClick={prevYear}>Prev Year</button>
				<button onClick={nextYear}>Next Year</button>
				<button onClick={prevMonth}>Prev Month</button>
				<button onClick={nextMonth}>Next Month</button>
			</CalendarButtonStyle>
			<CalendarPanelStyle>
				{dayOfTheWeek.map(weekDay => (<CalendarPanelItemStyle key={weekDay}>{weekDay}</CalendarPanelItemStyle>))}
				{dateCells.map(cell => {
					const isCurrentDate =
						cell.year === year && cell.month === month && cell.date === day
					const isTodayDate = isToday(todayDate, cell)
					return (<CalendarPanelItemStyle background={isCurrentDate ? 'red' : ''}
																					key={`${cell.date}-${cell.month}-${cell.year}`}
																					onClick={() => onDateSelect(cell)}>{cell.date}</CalendarPanelItemStyle>)
				})}
			</CalendarPanelStyle>
		</div>
	)
}

export default DatePicker