import styled from 'styled-components'
import exp from 'constants'

export const ProfileFormContainer = styled.form`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 30px;
	padding-top: 30px;
`

export const ProfileInputTitle = styled.label`
	font-size: 20px;
	margin-bottom: 10px;
`

export const ProfileFormTitle = styled.p`
	font-size: 30px;
	font-weight: bold;
	color: dodgerblue;
	margin-bottom: 20px;
`

export const ProfileError = styled.div`
	font-size: 14px;
	color: red;
	font-weight: inherit;
`
export const ProfileInputContainer = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`

export const ProfileSkillContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 600px;
`
