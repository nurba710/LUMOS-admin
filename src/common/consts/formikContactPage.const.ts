import * as yup from 'yup'

export const contactPageValidationsSchema = yup.object().shape({
	name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
	email: yup.string().email('Введите верный E-mail').required('Обязательно'),
	message: yup.string().typeError('Должно быть строкой').required('Обязательно'),
})

export const contactPageInitialValues = {
	name: '',
	email: '',
	message: '',
}
