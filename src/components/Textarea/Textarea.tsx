import React from 'react'
import { TextareaStyle } from './style'

export interface TextareaProps {
	width?: string
	height?: string
	background?: string
	name?: string
	placeholder?: string
	onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
	value: string
	onBlur?: (e: React.FormEvent<HTMLElement>) => void
	label?: string
	id?: string
}

const Textarea: React.FC<TextareaProps> = ({
	width = '100%',
	height = '100px',
	background = '#f8f8f8',
	onBlur,
	label,
	name,
	onChange,
	value,
	placeholder,
	id,
}) => {
	return (
		<>
			<label id={id}>{label}</label>
			<TextareaStyle
				onBlur={onBlur}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				name={name}
				width={width}
				height={height}
				background={background}
				id={id}></TextareaStyle>
		</>
	)
}

export default Textarea
