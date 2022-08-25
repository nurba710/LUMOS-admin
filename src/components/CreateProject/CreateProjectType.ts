
export interface CreateProjectType {
		 projectName: string,
			 projectLogo: string,
			 aboutProject: string,
			 ourContribution: string,
			 technologyStack: string[],
				ourTeam: ourTeamType[],
			 links: string
}

export interface ourTeamType {
		name: string,
		avtar: string,
}

export interface technologyStackType {
	technologyStack: string
}