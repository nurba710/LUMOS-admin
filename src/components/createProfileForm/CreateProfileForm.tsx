import React from 'react'
import { FieldArray, Formik } from 'formik'
import {
	ProfileInitialValue,
	SkillsValue,
} from '../../common/consts/InitialValues'
import {
	ProfileFormTitle,
	ProfileError,
	ProfileFormContainer,
	ProfileInputTitle,
	ProfileInputContainer,
	ProfileSkillContainer,
} from './Style'
import { ProfileValidationSchema } from './Validation'
import { ProfileTypes } from './Types'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import { useProfilePOSTMutation } from '../../service/ProfileService'

const CreateProfileForm = () => {
	const [profile] = useProfilePOSTMutation()
	const handleSubmit = (values: ProfileTypes) => {
		console.log(values, 'values')
		profile(values).unwrap()
	}

	return (
		<Formik
			initialValues={{
				name: ProfileInitialValue.NAME,
				dateOfBirth: ProfileInitialValue.DATE_OF_BIRTH,
				aboutUser: ProfileInitialValue.ABOUT_USER,
				position: ProfileInitialValue.POSITION,
				startWork: ProfileInitialValue.START_WORK,
				skills: [
					{
						skillName: SkillsValue.SKILL_NAME,
						grade: SkillsValue.GRADE,
					},
				],
				avatar: ProfileInitialValue.AVATAR,
				yearsOfWorkExp: ProfileInitialValue.YEARS_OF_WORK_EXP,
			}}
			onSubmit={handleSubmit}
			validationSchema={ProfileValidationSchema}>
			{({ values, errors, handleChange, handleSubmit, isValid }) => {
				const {
					name,
					dateOfBirth,
					position,
					avatar,
					aboutUser,
					startWork,
					yearsOfWorkExp,
					skills,
				} = errors as ProfileTypes
				return (
					<ProfileFormContainer onSubmit={handleSubmit}>
						<ProfileFormTitle>Регистрация профиля</ProfileFormTitle>
						<ProfileInputContainer>
							<ProfileInputTitle>Имя</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'name'}
								value={values.name}
								type='text'
								width={'300px'}
							/>
							<ProfileError>{name}</ProfileError>
						</ProfileInputContainer>
						<ProfileInputContainer>
							<ProfileInputTitle>День рождения</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'dateOfBirth'}
								value={values.dateOfBirth}
								type={'date'}
								width={'200px'}
							/>
							<ProfileError>{dateOfBirth}</ProfileError>
						</ProfileInputContainer>
						<ProfileInputContainer>
							<ProfileInputTitle>О себе</ProfileInputTitle>
							<Textarea
								onChange={handleChange}
								value={values.aboutUser}
								name={'aboutUser'}
								width={'600px'}
							/>
							<ProfileError>{aboutUser}</ProfileError>
						</ProfileInputContainer>
						<ProfileInputContainer>
							<ProfileInputTitle>Позиция</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'position'}
								value={values.position}
								type={'text'}
								width={'300px'}
							/>
							<ProfileError>{position}</ProfileError>
						</ProfileInputContainer>
						<ProfileInputContainer>
							<ProfileInputTitle>Начало работы</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'startWork'}
								value={values.startWork}
								type={'date'}
								width={'200px'}
							/>
							<ProfileError>{startWork}</ProfileError>
						</ProfileInputContainer>
						<ProfileInputContainer>
							<ProfileInputTitle>Опыт в программиировании</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'yearsOfWorkExp'}
								value={values.yearsOfWorkExp}
								type={'text'}
								width={'200px'}
							/>
							<ProfileError>{yearsOfWorkExp}</ProfileError>
						</ProfileInputContainer>
						<FieldArray name={'skills'}>
							{({ push, remove }) => (
								<React.Fragment>
									<ProfileFormTitle>Навыки</ProfileFormTitle>
									{values.skills.map((skill, index) => (
										<ProfileSkillContainer key={index}>
											<ProfileInputContainer>
												<ProfileInputTitle>
													Навык №{index + 1}
												</ProfileInputTitle>
												<Input
													type={'text'}
													onChange={handleChange}
													name={`skills[${index}].skillName`}
												/>
												<ProfileError>
													{skills && skills[index]?.skillName}
												</ProfileError>
											</ProfileInputContainer>
											<ProfileInputContainer>
												<ProfileInputTitle> 0-10</ProfileInputTitle>
												<Input
													type={'number'}
													onChange={handleChange}
													name={`skills[${index}].grade`}
												/>
												<ProfileError>
													{skills && skills[index]?.grade}
												</ProfileError>
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
						<ProfileInputContainer>
							<ProfileInputTitle htmlFor={'avatar'}>
								Фотография для профиля
							</ProfileInputTitle>
							<Input
								onChange={handleChange}
								name={'avatar'}
								value={values.avatar}
								type={'text'}
								width={'300px'}
							/>
							<ProfileError>{avatar}</ProfileError>
						</ProfileInputContainer>
						<Button
							name={'Сохранить'}
							type={'submit'}
							disabled={!isValid}
							margin='0 0 20px 0'
						/>
					</ProfileFormContainer>
				)
			}}
		</Formik>
	)
}

export default CreateProfileForm
