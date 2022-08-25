import React, { ChangeEvent } from 'react'
import { FieldArray, FormikValues } from 'formik'
import { ourTeamType } from '../CreateProjectType'
import {
	ProjectError,
	ProjectFormTitle,
	ProjectInputContainer,
	ProjectInputTitle,
	ProjectOurTeamContainer,
	ProjectCreateInput
} from '../style'
import Input from '../../Input/Input'
import Button from '../../Button/Button'



interface FormCreateProjectComponentType {
	values: FormikValues
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	errors: ourTeamType[]
}

const FormCreateProjectComponent: React.FC<FormCreateProjectComponentType> = ({
	values,
	handleChange,
	errors

}) => {
			return(
				<FieldArray name={'ourTeam'}>
					{({ push, remove }) => (
						<React.Fragment>
							<ProjectFormTitle>Название:</ProjectFormTitle>
							{values.ourTeam?.map((ourTeam: ourTeamType, index: number) => (
								<ProjectOurTeamContainer key={index}>
									<ProjectCreateInput>
										<ProjectInputTitle>Название проекта №{index + 1}:</ProjectInputTitle>
										<Input
											type={'text'}
											onChange={handleChange}
											name={`ourTeam[${index}].name`}
											value={'fdsafdsaf'}
										/>
										<ProjectError>
											{errors && errors[index]?.name}
										</ProjectError>
									</ProjectCreateInput>
									<ProjectCreateInput>
										<ProjectInputTitle> АВАТАР:</ProjectInputTitle>
										<Input
											type={'text'}
											onChange={handleChange}
											name={`ourTeam[${index}].avtar`}
											value={'fdsfdasf'}
										/>
										<ProjectError>{errors && errors[index]?.avtar}</ProjectError>
									</ProjectCreateInput>
									<Button
										margin={'40px 0 0 0'}
										type={'submit'}
										backgroundHover={'red'}
										background={'pink'}
										width={'100px'}
										height={'38px'}
										name={'Удалить'}
										onClick={() => remove(index)}
									/>
								</ProjectOurTeamContainer>
							))}
							<Button
								margin={'0 0 20px 0'}
								name={'Добавить проект'}
								type={'button'}
								onClick={() =>
									push({
										name: '',
										avtar: '',
									})
								}
							/>
						</React.Fragment>
					)}
				</FieldArray>
			)
}


export default FormCreateProjectComponent