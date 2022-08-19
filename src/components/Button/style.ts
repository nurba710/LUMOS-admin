import styled from 'styled-components'

export const ButtonStyle = styled.button<{
	background?: string
	color?: string
	margin?: string
	backgroundHover?: string
	width?: string
	height?: string
	transitionDurationHover?: string
	fontSize?: string
}>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};
	border-radius: 9.2px;
	background: ${({ background }) => background};
	border: none;
	color: ${({ color }) => color};
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	font-size: ${({ fontSize }) => fontSize};

	&:hover {
		background: ${({ backgroundHover }) => backgroundHover};
		transition-duration: ${({ transitionDurationHover }) => transitionDurationHover};
	}
`
