import React, { FocusEventHandler } from 'react'
import { InputStyle } from './style'

export interface InputProps {
	width?: string
	color?: string
	margin?: string
	height?: string
	fontSize?: string
	background?: string
	placeholder?: string
	type?: 'text' | 'password' | 'radio' | 'checkbox' | 'number' | 'email'
	placeholderColor?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	borderBottom?: string
	value: string
	name?: string
	id?: string
	label?: string
	onBlur?: FocusEventHandler<HTMLInputElement>
	borderColor?: string | undefined
	onKeyDown?: (e: React.KeyboardEvent) => void
	onClick?: () => void
	onMouseDown?: (e: React.MouseEvent) => void
}

const Input: React.FC<InputProps> = ({
																			 borderColor,
																			 width = '140px',
																			 height = '35px',
																			 margin = '2px',
																			 value,
																			 label,
																			 id,
																			 name,
																			 onChange,
																			 onClick,
																			 onKeyDown,
																			 type = 'text',
																			 placeholder,
																			 fontSize = '20px',
																			 color = 'black',
																			 background = 'white',
																			 borderBottom = '1px solid #4CAF50',
																			 placeholderColor = '#3e8e41',
																			 onBlur,
																			 onMouseDown,
																		 }) => {
	return (
		<>
			<label id={id}>{label}</label>
			<InputStyle
				onMouseDown={onMouseDown}
				onKeyDown={onKeyDown}
				borderColor={borderColor}
				value={value}
				name={name}
				onChange={onChange}
				type={type}
				onClick={onClick}
				margin={margin}
				borderBottom={borderBottom}
				placeholderColor={placeholderColor}
				placeholder={placeholder}
				width={width}
				background={background}
				height={height}
				fontSize={fontSize}
				color={color}
				onBlur={onBlur}></InputStyle>
		</>
	)
}

export default Input
