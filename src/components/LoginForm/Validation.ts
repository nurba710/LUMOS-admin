import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
	username: yup.string().required('Обязательное поле'),
	password: yup.string().required('Обязательное поле'),
})

export const PasswordValidationSchema = yup.object().shape({
	password_new: yup.string().required('Обязательное поле'),
	password_old: yup.string().required('Обязательное поле'),
})
