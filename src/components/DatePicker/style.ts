import styled from 'styled-components'

export const CalendarPanelStyle = styled.div<{}>
	`
    width: 420px;
    height: 420px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    border-top: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
	`

export const CalendarHeaderStyle = styled.div<{}>
	`
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    border-bottom: none;
	`

export const CalendarPanelDateStyle = styled.div<{}>
	`
    text-align: center;
	`

export const CalendarPanelItemStyle = styled.div<{
	cursor?: string,
	background?: string,
	color?: string,
	border?: string,
	opacity?: string | number,
	borderHover?: string,
	borderRadius?: string,
	fontWeight?: string
}>
	`
    color: ${({ color }) => color};
    padding: 4px;
    opacity: ${({ opacity }) => opacity};;
    display: flex;
    cursor: ${({ cursor }) => cursor};
    justify-content: center;
    background: ${({ background }) => background};
    align-items: center;
    border: ${({ border }) => border};
    border-radius: ${({ borderRadius }) => borderRadius};
    opacity: ${({ opacity }) => opacity};
		font-weight: ${({fontWeight}) => fontWeight};
		
    &:hover {
      border: ${({ borderHover }) => borderHover};
    }
	`

export const CalendarPanelWeekItemStyle = styled.div<{
	cursor?: string,
	background?: string,
	color?: string
}>`
  color: ${({ color }) => color};
  padding: 4px;
  display: flex;
  cursor: ${({ cursor }) => cursor};
  justify-content: center;
  background: ${({ background }) => background};
  align-items: center;
`

export const CalendarButtonStyleLeft = styled.div<{}>
	`
    display: flex;
    column-gap: 8px;
	`

export const CalendarButtonStyleRight = styled.div<{}>
	`
    display: flex;
    column-gap: 8px;
	`

export const CalendarButtonStyle = styled.div<{}>
	`
    display: flex;
    margin: 12px 10px;
    justify-content: space-between;
	`

export const CalendarPanelWrapperStyle = styled.div<{}>
	`
    position: relative;
    display: inline-block;
	`

export const DatePickerPopupContentWrapper = styled.div<{}>
	`
    position: absolute;
    top: 100%;
    left: 0;
	`

