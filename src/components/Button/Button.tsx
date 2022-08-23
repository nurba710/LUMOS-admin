import React from 'react'
import { ButtonStyle } from './style'

export interface ButtonProps {
	background?: string
	name: string
	color?: string
	margin?: string
	backgroundHover?: string
	width?: string
	type?: 'submit' | 'reset' | 'button'
	height?: string
	onClick?: () => void
	transitionDurationHover?: string
	disabled?: boolean
	fontSize?: string
	fontWeight?: string
}

const Button: React.FC<ButtonProps> = ({
																				 transitionDurationHover = '0.1s',
																				 width = '150px',
																				 height = '50px',
																				 margin,
																				 background = '#4CAF50',
																				 name,
																				 type,
																				 onClick,
																				 color = 'white',
																				 backgroundHover = '#3e8e41',
																				 disabled,
																				 fontSize,
	fontWeight
																			 }) => {
	return (
		<ButtonStyle
			fontWeight={fontWeight}
			type={type}
			transitionDurationHover={transitionDurationHover}
			width={width}
			margin={margin}
			height={height}
			disabled={disabled}
			backgroundHover={backgroundHover}
			background={background}
			color={color}
			onClick={onClick}
			fontSize={fontSize}
		>
			{name}
		</ButtonStyle>
	)
}
export default Button
