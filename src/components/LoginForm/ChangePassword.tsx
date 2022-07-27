import React from 'react'
import { Formik } from 'formik'
import { Error, FormContainer, FormTitle, InputContainer } from './Style'
import Input from '../Input/Input'
import { ButtonStyle } from '../Button/style'
import * as yup from 'yup'
import { useChangePasswordPOSTMutation } from '../../service/ChangePassword'
import { NavLink } from 'react-router-dom'

interface valuesType {
	password_new: string
	password_old: string
}

const ChangePassword: React.FC = () => {
	const validationSchema = yup.object().shape({
		password_new: yup.string().required('Обязательное поле'),
		password_old: yup.string().required('Обязательное поле'),
	})

	const [change] = useChangePasswordPOSTMutation()

	const handleSubmit = async (values: valuesType) => {
		await change(values).unwrap()
	}

	return (
		<Formik
			initialValues={{
				password_new: '',
				password_old: '',
			}}
			validateOnBlur
			onSubmit={handleSubmit}
			validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<FormContainer onSubmit={handleSubmit}>
					<FormTitle> LUMOS </FormTitle>
					<InputContainer>
						<label htmlFor={'password_old'}> Старый пароль</label>
						<Input
							onChange={handleChange}
							name={'password_old'}
							value={values.password_old}
							type={'password'}
							onBlur={handleBlur}
						/>
						{touched.password_old && errors.password_old && <Error>{errors.password_old}</Error>}
						<label htmlFor={'password_new'}> Новый пароль </label>
						<Input
							onChange={handleChange}
							name={'password_new'}
							value={values.password_new}
							type={'password'}
							onBlur={handleBlur}
						/>
						{touched.password_new && errors.password_new && <Error>{errors.password_new}</Error>}
					</InputContainer>
					<ButtonStyle width='120px' height='50px' disabled={!isValid && !dirty} type={'submit'}>
						Change Password
					</ButtonStyle>
					<NavLink to='/success'>Вернуться на главную страницу</NavLink>
				</FormContainer>
			)}
		</Formik>
	)
}

export default ChangePassword
