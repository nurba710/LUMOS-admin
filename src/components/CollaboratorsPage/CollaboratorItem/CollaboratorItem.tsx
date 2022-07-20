import React from 'react'
import { colleagueType } from '../../../storeToolkit/Types'
import { ageHelper } from '../../../common/helper/ageHelper'
import { defaultAvatar } from '../../../common/consts/auth.const'
import { ItemWrapper, ItemAvatar, Title, Info, Button } from './CollaboratorItemStyle'

interface collaboratorItemProps {
	colleague: colleagueType
}

const CollaboratorItem: React.FC<collaboratorItemProps> = ({ colleague }) => {
	const { avatar, name, age, position } = colleague
	console.log('awda')
	return (
		<ItemWrapper>
			<ItemAvatar background={`url(${avatar || defaultAvatar}) 0 0/ cover no-repeat`} />
			<div>
				<Title>{name}</Title>
				<Info>
					{age} {ageHelper(age)}
				</Info>
				<Info>Позиция: {position}</Info>
			</div>
			<Button>Подробнее</Button>
		</ItemWrapper>
	)
}

export default CollaboratorItem
