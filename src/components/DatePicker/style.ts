import styled from 'styled-components'

export const CalendarPanelStyle = styled.div<{}>`
  width: 700px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  border: 1px solid lightgray;

`

export const CalendarPanelItemStyle = styled.div<{background?: string}>`
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
	background: ${({ background }) => background};
`

export const CalendarButtonStyle = styled.div<{}>`
  display: flex;
  margin: 12px 0;
  gap: 8px;
`


