import React from 'react'
import {S} from './TechStack_Styles'

export const TechStack: React.FC<{ techText: string }> = (props: { techText: string }) => {
    return (
        <S.TechStack>
            <S.TechStackTitle>Tech Stack : </S.TechStackTitle>
            <S.TechStackText>{props.techText}</S.TechStackText>
        </S.TechStack>
    )
}

