import React from 'react'
import { Formik } from 'formik'
import {
	ProfileFormTitle,
	ProfileError,
	ProfileFormContainer,
	ProfileInputTitle,
	ProfileInputContainer,
} from './Style'
import { InitialValues, ProfileValidationSchema } from './Validation'
import { ProfileTypes } from './Types'
import Textarea from '../Textarea/Textarea'
import Button from '../Button/Button'
import { useProfilePOSTMutation } from '../../service/ProfileService'
import { useNavigate } from 'react-router-dom'
import { AdminRoutePath } from '../../common/consts/routes.const'
import ProfileInput from './ProfileInput/ProfileInput'
import FieldArrayComponent from './ProfileInput/FieldArrayComponent'

const CreateProfileForm = () => {
	const [profile, { isSuccess }] = useProfilePOSTMutation()
	const navigate = useNavigate()
	const handleSubmit = (values: ProfileTypes) => {
		console.log(values, 'values')
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
						<FieldArrayComponent
							handleChange={handleChange}
							values={values}
							errors={skills}
						/>
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
