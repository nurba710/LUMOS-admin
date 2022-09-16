import * as yup from 'yup'
import { array, object } from 'yup'
import { ourTeamValue, ProjectInitialValues } from '../../common/consts/InitialValues'

export const ProjectSchema = yup.object().shape({
	projectName:yup.string().required('Обязательноe поле'),
	projectLogo:yup.string().required('Обязательноe поле'),
	aboutProject:yup.string().required('Обязательноe поле'),
	ourContribution:yup.string().required('Обязательноe поле'),
	technologyStack: array(yup.string().required('Обязательное поле')),
	ourTeam: array(
		object({
			name: yup.string().required('Обязательное поле'),
			avtar: yup.string().required('Обязательное поле')
		})
	),
	links:yup.string().required('Обязательноe поле!')
})

export const initialProjectValues = {
	projectName: ProjectInitialValues.PROJECT_NAME,
	projectLogo: ProjectInitialValues.PROJECT_LOGO,
	aboutProject: ProjectInitialValues.ABOUT_PROJECT,
	ourContribution: ProjectInitialValues.OUR_CONTRIBUTION,
	technologyStack: [ProjectInitialValues.TECHNOLOGY_STACK],
	ourTeam: [
		{
			name: ourTeamValue.NAME,
			avtar: ourTeamValue.AVTAR
		},
	],
	links: ProjectInitialValues.LINKS
}

