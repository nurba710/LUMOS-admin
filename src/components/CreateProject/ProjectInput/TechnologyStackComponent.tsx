import React, { ChangeEvent } from 'react'
import { FieldArray, FormikValues } from 'formik'
import {
	ProjectError,
	ProjectInputTitle,
	ProjectInputContainer,
	ProjectFormTitle, InputBlock,
} from '../style'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { technologyStackType } from '../CreateProjectType'

interface TechnologyStackComponentType {
	values: FormikValues
	handleChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	errors: string[]
}



const TechnologyStackComponent: React.FC<TechnologyStackComponentType> = ({ values, handleChange, errors, }) => {
	return (
		<FieldArray name={'technologyStack'}>
			{({ push, remove }) => ( 
				<React.Fragment>
					<ProjectFormTitle>Технологии:</ProjectFormTitle>
					{values.technologyStack?.map((technologyStack: technologyStackType, index: number) => (
								<ProjectFormTitle key={index}>

									<ProjectInputContainer>

										<ProjectInputTitle>Технология {index + 1}</ProjectInputTitle>
										<InputBlock>
											<Input
												type={'text'}
												onChange={handleChange}
												name={`technologyStack[${index}]`}
												value={'kjlj'}
											/>
											<ProjectError>
												{errors && errors[index]}
											</ProjectError>
											<Button
												type={'button'}
												backgroundHover={'red'}
												background={'pink'}
												width={'100px'}
												height={'38px'}
												name={'Удалить'}
												onClick={() => remove(index)}
											/>
										</InputBlock>
										<Button
											margin={'0 0 20px 0'}
											width={'200px'}
											name={'Добавить технологию'}
											type={'button'}
											onClick={() =>
												push('')
											}
										/>
									</ProjectInputContainer>



								</ProjectFormTitle>


					))}
				</React.Fragment>
			)}
		</FieldArray>
	)
}

export default TechnologyStackComponent