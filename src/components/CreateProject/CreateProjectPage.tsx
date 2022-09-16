import React from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useCreateProjectPOSTMutation } from '../../service/CreateProject'
import { AdminRoutePath } from '../../common/consts/routes.const'
import Button from '../Button/Button'
import {
	FormTitle,
	InputContainer,
	ProjectForm,
	ProjectInputTitle,
    Wrapper,
} from './style'
import { initialProjectValues, ProjectSchema } from './CreateProjectValidations'
import ProjectInput from './ProjectInput/ProjectInput'
import FormCreateProjectComponent from './ProjectInput/FormCreateProjectComponent'
import TechnologyStackComponent from './ProjectInput/TechnologyStackComponent'
import { CreateProjectType } from './CreateProjectType'


const CreateProjectPage = () => {

	const [change, { isLoading, isSuccess, isError }] = useCreateProjectPOSTMutation()
	const navigator = useNavigate()
	const handleSubmit = (values: CreateProjectType) => {
		change(values).unwrap()
	}

	if (isSuccess) {
		navigator(AdminRoutePath.HOME_PAGE)
	}

	isError && toast.error('ERROR')
	isLoading && toast.loading('Loading')

	return (
		<>
			<Wrapper>
					<FormTitle>Регистрация информации о проекте:</FormTitle>
					<Formik
						initialValues={initialProjectValues}
						onSubmit={handleSubmit}
						validationSchema={ProjectSchema}
					>
						{({
								values, errors, touched, handleChange, handleBlur,
								isValid, handleSubmit, dirty,
							}) => {

							const {
							projectName,
							projectLogo,
							aboutProject,
							ourContribution,
							technologyStack,
							ourTeam,
							links

						} = errors as CreateProjectType

					return(


							<ProjectForm onSubmit={handleSubmit}>

							<InputContainer>
							<ProjectInputTitle>Название проекта:</ProjectInputTitle>
							<ProjectInput
							value={values.projectName}
							handleChange={handleChange}
							name='projectName'
							type={'text'}
							error={projectName}
							onBlur={handleBlur}
							/>
							</InputContainer>


							<InputContainer>
							<ProjectInputTitle>Логотип проекта:</ProjectInputTitle>
							<ProjectInput
							value={values.projectLogo}
							handleChange={handleChange}
							name={'projectLogo'}
							type={'text'}
							onBlur={handleBlur}
							error={projectLogo}
							/>
							</InputContainer>


							<InputContainer>
							<ProjectInputTitle>О проекте:</ProjectInputTitle>
							<ProjectInput
							type={'text'}
							name={'aboutProject'}
							handleChange={handleChange}
							onBlur={handleBlur}
							value={values.aboutProject}
							error={aboutProject}
							/>
							</InputContainer>


							<InputContainer>
							<ProjectInputTitle>Наш вклад:</ProjectInputTitle>
							<ProjectInput
							handleChange={handleChange}
							onBlur={handleBlur}
							value={values.ourContribution}
							name={'ourContribution'}
							type={'text'}
							error={ourContribution}
							/>
							</InputContainer>

								<TechnologyStackComponent
										values={values} handleChange={handleChange} errors={technologyStack}/>


								<FormCreateProjectComponent
									values={values} handleChange={handleChange} errors={ourTeam}/>


							<InputContainer>
							<ProjectInputTitle>Ссылка на проект:</ProjectInputTitle>
							<ProjectInput
							type={'text'}
							name={'links'}
							handleChange={handleChange}
							onBlur={handleBlur}
							value={values.links}
							error={links}
							/>
							</InputContainer>

								<Button name='Отправить'
												type='submit'
												disabled={!isValid && !dirty}
								/>

								
							</ProjectForm>
							 )
						}}
					</Formik>
			</Wrapper>
		</>

	)
}

export default CreateProjectPage
