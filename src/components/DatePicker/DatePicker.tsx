import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {
	DateCellsItem,
	dayOfTheWeek,
	getCurrentMonthDays, getDateFromInputValue,
	getDaysAmountInAMonth, getInputValueFromDate,
	getNextMonthDays, getPreviousMonthDays,
	isInRange, isToday,
	months,
} from './consts'
import {
	CalendarButtonStyle, CalendarButtonStyleLeft,
	CalendarButtonStyleRight, CalendarHeaderStyle,
	CalendarPanelDateStyle, CalendarPanelItemStyle,
	CalendarPanelStyle, CalendarPanelWeekItemStyle,
	CalendarPanelWrapperStyle, DatePickerPopupContentWrapper,
} from './style'

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
	borderHover?: string;
	borderRadius?: string;

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
	useLayoutEffect(() => {
		setInputValue(getInputValueFromDate(value))
	}, [value])

	const updateValueOnPopupCloseAction = () => {
		const date = getDateFromInputValue(inputValue)

		setShowPopup(false)

		if (!date) {
			setInputValue(getInputValueFromDate(value))
			return
		}

		const isDateInRange = isInRange(date, min, max)
		if (!isDateInRange) {
			return
		}
		onChange(date)
	}

	const latestUpdateValueFromInput = useLatest(updateValueOnPopupCloseAction)

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
			latestUpdateValueFromInput.current()
		}
		document.addEventListener('click', onDocumentClick)

		return () => {
			document.removeEventListener('click', onDocumentClick)
		}
	}, [latestUpdateValueFromInput])

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

	const [inputValueDate, isValidInputValue] = useMemo(() => {
		const date = getDateFromInputValue(inputValue)

		if (!date) {
			return [undefined, false]
		}
		const isDateInRange = isInRange(date, min, max)

		return [date, isDateInRange]
	}, [inputValue, min, max])

	const onKeyDown = (e: React.KeyboardEvent) => {
		if (e.key !== 'Enter') {
			return
		}
		setShowPopup(false)
		updateValueOnPopupCloseAction()
	}
	return <CalendarPanelWrapperStyle ref={elementRef}>
		<Input
			borderColor={isValidInputValue ? undefined : 'red'}
			color={isValidInputValue ? undefined : 'red'}
			onKeyDown={onKeyDown}
			onMouseDown={onInputClick}
			value={inputValue}
			onChange={onInputValueChange} />
		{showPopup && (
			<DatePickerPopupContentWrapper>
				<DatePickerPopupContent inputValueDate={inputValueDate}
																selectedValue={value}
																onChange={handleChange}
																min={min}
																max={max} />
			</DatePickerPopupContentWrapper>
		)}
	</CalendarPanelWrapperStyle>
}
const DatePickerPopupContent: React.FC<DatePickerPopupProps> = (
	{
		inputValueDate,
		selectedValue,
		onChange,
		min,
		max,
		borderHover = '1px solid #4CAF50',
		borderRadius = '25%',

	}) => {
	const [panelYear, setPanelYear] = useState(() => selectedValue.getFullYear())
	const [panelMonth, setPanelMonth] = useState(() => selectedValue.getMonth())
	const todayDate = useMemo(() => new Date(), [])

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
		<CalendarHeaderStyle>
			<CalendarPanelDateStyle>
				{months[panelMonth]} {panelYear}
			</CalendarPanelDateStyle>
			<CalendarButtonStyle>
				<CalendarButtonStyleLeft>
					<Button fontWeight='400' fontSize='12px' width='70px'
									height='30px' name='Prev Year' onClick={prevYear} />
					<Button fontWeight='400' fontSize='12px' width='70px'
									height='30px' name='Prev Month' onClick={prevMonth} />
				</CalendarButtonStyleLeft>
				<CalendarButtonStyleRight>
					<Button fontWeight='400' fontSize='12px' width='70px'
									height='30px' name='Next Month' onClick={nextMonth} />
					<Button fontWeight='400' fontSize='12px' width='70px'
									height='30px' name='Next Year' onClick={nextYear} />
				</CalendarButtonStyleRight>
			</CalendarButtonStyle>
			<CalendarPanelStyle>
				{dayOfTheWeek.map(weekDay => (<CalendarPanelWeekItemStyle key={weekDay}>
					{weekDay}</CalendarPanelWeekItemStyle>))}
				{dateCells.map(cell => {
					const isSelectedDate =
						cell.year === year && cell.month === month && cell.date === day
					const isTodayDate = isToday(cell, todayDate)
					const isNotCurrent = cell.type !== 'current'
					const isDateInRange = isInRange(new Date(cell.year, cell.month, cell.date), min, max)

					return (<CalendarPanelItemStyle
							borderRadius={borderRadius}
							borderHover={borderHover}
							cursor={isDateInRange ? 'pointer' : 'not-allowed'}
							opacity={isNotCurrent ? 0.4 : ''}
							background={isSelectedDate ? '#4CAF50' : ''}
							color={isSelectedDate ? 'white' : '' || isTodayDate ? '#3e8e41' : ''}
							fontWeight={isTodayDate ? '600' : '' || isSelectedDate ? '400' : ''}
							key={`${cell.date}-${cell.month}-${cell.year}`}
							onClick={() => isDateInRange && onDateSelect(cell)}>
							{cell.date}
						</CalendarPanelItemStyle>
					)
				})}
			</CalendarPanelStyle>
		</CalendarHeaderStyle>
	)
}

export default DatePicker