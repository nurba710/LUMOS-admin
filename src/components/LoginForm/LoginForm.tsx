import React, { useEffect } from 'react'
import { FormContainer, InputContainer, FormTitle, Error } from './Style'
import { ButtonStyle } from '../Button/style'
import Input from '../Input/Input'
import { useLoginPOSTMutation } from '../../service/login'
import { Formik } from 'formik'
import * as yup from 'yup'
import { getStorage, setStorage } from '../../common/services/storage.service'
import { TOKEN } from '../../common/consts/auth.const'
import { useNavigate } from 'react-router-dom'

interface valuesType {
	username: string
	password: string
}

const LoginForm: React.FC = () => {
	const validationSchema = yup.object().shape({
		username: yup.string().required('Обязательное поле'),
		password: yup.string().required('Обязательное поле'),
	})
	const navigate = useNavigate()

	const [login, { data }] = useLoginPOSTMutation()

	useEffect(() => {
		if (data?.data.token) setStorage(TOKEN, data?.data.token)
	}, [data])

	const token = getStorage(TOKEN)

	useEffect(() => {
		if (token) {
			navigate('/success')
		} else {
			navigate('/')
		}
	}, [navigate, token, data])

	const handleSubmit = async (values: valuesType) => {
		await login(values).unwrap()
	}

	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			validateOnBlur
			onSubmit={handleSubmit}
			validationSchema={validationSchema}>
			{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
				<FormContainer onSubmit={handleSubmit}>
					<FormTitle> LUMOS </FormTitle>
					<InputContainer>
						<label htmlFor={'username'}> User Name </label>
						<Input
							onChange={handleChange}
							name={'username'}
							value={values.username}
							type={'text'}
							onBlur={handleBlur}
						/>
						{touched.username && errors.username && <Error>{errors.username}</Error>}
						<label htmlFor={'password'}> Password</label>
						<Input
							onChange={handleChange}
							name={'password'}
							value={values.password}
							type={'password'}
							onBlur={handleBlur}
						/>
						{touched.password && errors.password && <Error>{errors.password}</Error>}
					</InputContainer>
					<ButtonStyle width='80px' height='30px' disabled={!isValid && !dirty} type={'submit'}>
						SIGN IN
					</ButtonStyle>
				</FormContainer>
			)}
		</Formik>
	)
}

export default LoginForm
