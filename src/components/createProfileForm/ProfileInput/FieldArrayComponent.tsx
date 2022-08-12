import React, { ChangeEvent } from 'react'
import {
	ProfileError,
	ProfileFormTitle,
	ProfileInputContainer,
	ProfileInputTitle,
	ProfileSkillContainer,
} from '../Style'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { FieldArray, FormikValues } from 'formik'
import { skillsType } from '../Types'

interface FieldArrayComponentType {
	values: FormikValues
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	errors: skillsType[]
}

const FieldArrayComponent: React.FC<FieldArrayComponentType> = ({
	values,
	handleChange,
	errors,
}) => {
	return (
		<FieldArray name={'skills'}>
			{({ push, remove }) => (
				<React.Fragment>
					<ProfileFormTitle>Навыки</ProfileFormTitle>
					{values.skills?.map((skill: skillsType, index: number) => (
						<ProfileSkillContainer key={index}>
							<ProfileInputContainer>
								<ProfileInputTitle>Навык №{index + 1}</ProfileInputTitle>
								<Input
									type={'text'}
									onChange={handleChange}
									name={`skills[${index}].skillName`}
								/>
								<ProfileError>
									{errors && errors[index]?.skillName}
								</ProfileError>
							</ProfileInputContainer>
							<ProfileInputContainer>
								<ProfileInputTitle> 0-10</ProfileInputTitle>
								<Input
									type={'number'}
									onChange={handleChange}
									name={`skills[${index}].grade`}
								/>
								<ProfileError>{errors && errors[index]?.grade}</ProfileError>
							</ProfileInputContainer>
							<Button
								type={'button'}
								backgroundHover={'red'}
								background={'pink'}
								width={'100px'}
								name={'Удалить'}
								onClick={() => remove(index)}
							/>
						</ProfileSkillContainer>
					))}
					<Button
						margin={'0 0 20px 0'}
						name={'Добавить навык'}
						type={'button'}
						onClick={() =>
							push({
								skillName: '',
								grade: 0,
							})
						}
					/>
				</React.Fragment>
			)}
		</FieldArray>
	)
}

export default FieldArrayComponent
