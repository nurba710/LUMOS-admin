import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { ProjectError, ProjectInputContainer, ProjectInputTitle, } from '../style'
import Input from '../../Input/Input'

interface ProjectInputType extends InputHTMLAttributes<HTMLInputElement>{
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	name: string
	value: string
	title?: string
	error: string
	type?:
		| 'text'
		| 'password'
		| 'radio'
		| 'checkbox'
		| 'number'
		| 'email'
		| 'date'
		| 'file'
}

const ProjectInput: React.FC<ProjectInputType> = ({
																										handleChange,
																										name,
																										value,
																										title,
																										type,
																										error, }) => {
	return (
		<ProjectInputContainer>
			<ProjectInputTitle>{title}</ProjectInputTitle>
			<Input
				onChange={handleChange}
				name={name}
				value={value}
				type={type}
				width={'300px'}

			/>
			<ProjectError>{error}</ProjectError>
		</ProjectInputContainer>
	)
}

export default ProjectInput