import React from 'react'
import { FieldArray, Formik } from 'formik'
import {
	ProfileFormTitle,
	ProfileError,
	ProfileFormContainer,
	ProfileInputTitle,
	ProfileInputContainer,
	ProfileSkillContainer,
} from './Style'
import { InitialValues, ProfileValidationSchema } from './Validation'
import { ProfileTypes } from './Types'
import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import { useProfilePOSTMutation } from '../../service/ProfileService'
import { useNavigate } from 'react-router-dom'
import { AdminRoutePath } from '../../common/consts/routes.const'
import ProfileInput from './ProfileInput/ProfileInput'

const CreateProfileForm = () => {
	const [profile, { isSuccess }] = useProfilePOSTMutation()
	const navigate = useNavigate()
	const handleSubmit = (values: ProfileTypes) => {
		profile(values).unwrap()
	}
	if (isSuccess) {
		navigate(AdminRoutePath.HOME_PAGE)
	}

	return (
		<Formik
			initialValues={InitialValues}
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
						<ProfileInput
							name='name'
							value={values.name}
							handleChange={handleChange}
							title={'Имя'}
							type={'text'}
							error={name}
						/>
						<ProfileInput
							name='dateOfBirth'
							value={values.dateOfBirth}
							handleChange={handleChange}
							title={'День рождения'}
							type={'date'}
							error={dateOfBirth}
						/>
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
						<ProfileInput
							name='position'
							value={values.position}
							handleChange={handleChange}
							title={'Позиция'}
							type={'text'}
							error={position}
						/>
						<ProfileInput
							name='startWork'
							value={values.startWork}
							handleChange={handleChange}
							title={'Начало работы'}
							type={'date'}
							error={startWork}
						/>
						<ProfileInput
							name='yearsOfWorkExp'
							value={values.yearsOfWorkExp}
							handleChange={handleChange}
							title={'Опыт работы'}
							type={'text'}
							error={yearsOfWorkExp}
						/>
						<FieldArray name={'skills'}>
							{({ push, remove }) => (
								<React.Fragment>
									<ProfileFormTitle>Навыки</ProfileFormTitle>
									{values.skills?.map((skill, index) => (
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
						<ProfileInput
							name='avatar'
							value={values.avatar}
							handleChange={handleChange}
							title={'Фотография для профиля'}
							type={'text'}
							error={avatar}
						/>
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
