import React, { useEffect } from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { ButtonStyle } from '../Button/style'
import Input from '../Input/Input'
import { useLoginPOSTMutation } from '../../service/login'
import { getStorage, setStorage } from '../../common/services/storage.service'
import { TOKEN } from '../../common/consts/auth.const'
import { AdminRoutePath } from '../../common/consts/routes.const'
import { LoginInitialValues } from '../../common/consts/InitialValues'
import { LoginValuesType } from './Types'
import { FormContainer, InputContainer, FormTitle, Error } from './Style'
import { LoginValidationSchema } from './Validation'
import 'react-toastify/dist/ReactToastify.css'

const LoginForm: React.FC = () => {
	const navigate = useNavigate()

	const [login, { data, isError, isLoading }] = useLoginPOSTMutation()

	useEffect(() => {
		if (data?.data.token) setStorage(TOKEN, data?.data.token)
	}, [data])

	const token = getStorage(TOKEN)

	useEffect(() => {
		if (token) {
			navigate(AdminRoutePath.HOME_PAGE)
		} else {
			navigate(AdminRoutePath.LOGIN_PAGE)
		}
	}, [navigate, token, data])

	const handleSubmit = (values: LoginValuesType) => {
		login(values).unwrap()
	}
	isLoading && toast.loading('Is loadiing')
	isError && toast.error('ERROR')
	return (
		<>
			<ToastContainer/>
		<Formik
			initialValues={{
				username: LoginInitialValues.USER_NAME,
				password: LoginInitialValues.PASSWORD,
			}}
			validateOnBlur
			onSubmit={handleSubmit}
			validationSchema={LoginValidationSchema}>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isValid,
				handleSubmit,
				dirty,
			}) => (
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
						{touched.username && errors.username && (
							<Error>{errors.username}</Error>
						)}
						<label htmlFor={'password'}> Password</label>
						<Input
							onChange={handleChange}
							name={'password'}
							value={values.password}
							type={'password'}
							onBlur={handleBlur}
						/>
						{touched.password && errors.password && (
							<Error>{errors.password}</Error>
						)}
					</InputContainer>
					<ButtonStyle
						width='80px'
						height='30px'
						disabled={!isValid && !dirty}
						type={'submit'}>
						SIGN IN
					</ButtonStyle>
				</FormContainer>
			)}
		</Formik>
		</>
	)
}

export default LoginForm
