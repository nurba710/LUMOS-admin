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
    border: 1px solid lightgrey;
    border-bottom: none;
	`

export const CalendarPanelDateStyle = styled.div<{}>
	`
		margin-top: 8px;
    text-align: center;
	`

export const CalendarPanelItemStyle = styled.div<{
	cursor?: string,
	opacity?: string,
	background?: string,
	color?: string
}>
	`
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    color: ${({ color }) => color};
    padding: 4px;
    opacity: ${({ opacity }) => opacity};;
    display: flex;
    cursor: ${({ cursor }) => cursor};
    justify-content: flex-end;
    background: ${({ background }) => background};
    align-items: flex-start;
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

export const CalendarPanelItemDate = styled.div<{
	opacity?: string | number;
	background?: string;
	borderRadius?: string;
	cursor?: string;
}>
	`
    border-radius: 50%;
    background: ${({ background }) => background};
    width: 30px;
    opacity: ${({ opacity }) => opacity};
    height: 30px;
    padding: 3px;
    text-align: center;
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

