import styled from 'styled-components'

export const FormContainer = styled.form`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 300px;
	height: 500px;
	border-radius: 10px;
	background: gray;
	padding-top: 80px;
`

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 200px;
	height: 200px;
	align-items: center;
	text-align: center;
	border-radius: 10px;
`

export const InputTitle = styled.p`
	font-size: 20px;
`

export const FormTitle = styled.p`
	font-size: 30px;
	font-weight: bold;
	color: dodgerblue;
`

export const Error = styled.div`
	font-size: 14px;
	color: red;
	font-weight: inherit;
`
