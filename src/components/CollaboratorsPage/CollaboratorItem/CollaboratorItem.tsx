import React from 'react';
import {ItemWrapper, ItemAvatar, Title, Info, Button} from "./CollaboratorItemStyle";
import {colleague} from "../../../storeToolkit/Types";
import {ageHelper} from "../../../common/helper/ageHelper";

interface collaboratorItemProps {
    colleague: colleague
}

const CollaboratorItem: React.FC<collaboratorItemProps> = ({colleague}) => {
    const {
        avatar,
        name,
        age,
        __v,
        _id,
        background,
        startWork,
        workExp,
        position,
        userName,
        userId,
        aboutUser,
        skills,
        languages,
        education
    } = colleague
    return (
        <ItemWrapper>
            <ItemAvatar
                background={avatar !== undefined ? `url(${avatar}) 0 0/ cover no-repeat`
                    : 'url(https://cdn2.vectorstock.com/i/1000x1000/95/96/faceless-businessman-icon-vector-10459596.jpg) 0 0/ cover no-repeat'}
            />
            <div>
                <Title>
                    {name}
                </Title>
                <Info>
                    {age} {ageHelper(age)}
                </Info>
                <Info>
                    Позиция: {position}
                </Info>
            </div>
            <Button>
                Подробнее
            </Button>
        </ItemWrapper>
    );
};

export default CollaboratorItem;