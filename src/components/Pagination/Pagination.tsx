import React from 'react'

import { PageButton, PaginationList } from './Style'

interface PaginationProps {
	setPage: Function
	totalPage: number
}

const Pagination: React.FC<PaginationProps> = ({ setPage, totalPage }) => {
	const pages = Array.from({ length: totalPage }, (v, k) => k + 1)
	return (
		<PaginationList>
			{pages.map((page, index) => (
				<PageButton onClick={() => setPage(page)} key={index}>
					{page}
				</PageButton>
			))}
		</PaginationList>
	)
}

export default Pagination
