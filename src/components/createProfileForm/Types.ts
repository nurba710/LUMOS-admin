export interface ProfileTypes {
	aboutUser: string
	dateOfBirth: string
	avatar: string
	name: string
	position: string
	startWork: string
	skills: skillsType[]
	yearsOfWorkExp: string
	_id?: string
}

interface skillsType {
	skillName: string
	grade: string
	_id?: string
}
