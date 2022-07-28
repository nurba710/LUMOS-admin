import React from 'react'
import { ERoutePath } from '../../common/consts/routes.const'
import { headerLinks } from '../../common/consts/header.const'
import { HeaderItem, HeaderLogo, HeaderNavigate, HeaderSection, HeaderStyled } from './style'

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderLogo>
				<HeaderNavigate to={'#'}>LUMOS</HeaderNavigate>
			</HeaderLogo>
			<HeaderSection>
				{headerLinks.map(item => (
					<HeaderNavigate to={`${'#'}${item.link}`}>
						<HeaderItem>{item.name}</HeaderItem>
					</HeaderNavigate>
				))}
			</HeaderSection>
			<HeaderSection>
				<HeaderItem>
					<HeaderNavigate to={'#'}>Войти</HeaderNavigate>
				</HeaderItem>
			</HeaderSection>
		</HeaderStyled>
	)
}

export default Header
