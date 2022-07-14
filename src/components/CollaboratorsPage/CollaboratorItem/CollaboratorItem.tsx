import React from 'react';
import {ItemWrapper, ItemAvatar, Title, Info, Button} from "./CollaboratorItemStyle";
import {colleague} from "../../../storeToolkit/Types";

interface collaboratorItemProps {
    colleague: colleague
}

const CollaboratorItem: React.FC<collaboratorItemProps> = ({colleague}) => {
    return (
        <ItemWrapper
            width=''
            height=''>
            <ItemAvatar
                height='400px'
                width='395px'
                background={`url(${colleague.avatar}) 0 0/ cover no-repeat`}
            />
            <div>
                <Title>
                    {colleague.name}
                </Title>
                <Info>
                    {colleague.age} лет
                </Info>
                <Info>
                    Позиция: {colleague.position}
                </Info>
            </div>
            <Button>
                Подробнее
            </Button>
        </ItemWrapper>
    );
};

export default CollaboratorItem;