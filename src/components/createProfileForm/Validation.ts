import * as yup from 'yup'
import { array, number, object, string } from 'yup'

export const ProfileValidationSchema = yup.object().shape({
	name: yup.string().required('Обязательное поле'),
	dateOfBirth: yup.string().required('Обязательное поле'),
	aboutUser: yup.string().required('Обязательное поле'),
	position: yup
		.string()
		.required('Обязательное поле')
		.max(150, 'Не более 150 символов'),
	startWork: yup.string().required('Обязательное поле'),
	yearsOfWorkExp: yup.string().required('Обязательное поле'),
	skills: array(
		object({
			skillName: string().required('Обязательное поле'),
			grade: number()
				.min(1, 'Минимальная оценка 1')
				.max(10, 'Максимальная оценка 10'),
		})
	),
	avatar: string().matches(
		/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
		'Введите правильный URL'
	),
})
