import React, { ChangeEvent } from 'react'
import {
	ProfileError,
	ProfileInputTitle,
	ProfileInputContainer,
} from '../Style'
import Input from '../../Input/Input'
import { FormikValues } from 'formik'
import loginForm from '../../LoginForm/LoginForm'

interface ProfileInputTypes {
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	name: string
	value: string
	title: string
	error: string
	type:
		| 'text'
		| 'password'
		| 'radio'
		| 'checkbox'
		| 'number'
		| 'email'
		| 'date'
		| 'file'
}

const ProfileInput: React.FC<ProfileInputTypes> = ({
	handleChange,
	name,
	value,
	title,
	type,
	error,
}) => {
	return (
		<ProfileInputContainer>
			<ProfileInputTitle>{title}</ProfileInputTitle>
			<Input
				onChange={handleChange}
				name={name}
				value={value}
				type={type}
				width={'300px'}
			/>
			<ProfileError>{error}</ProfileError>
		</ProfileInputContainer>
	)
}

export default ProfileInput
