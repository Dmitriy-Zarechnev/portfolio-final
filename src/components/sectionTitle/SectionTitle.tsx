import React from 'react'
import {S} from './SectionTitle_Styles'

type SectionTitlePropsType = {
    mainTitle?: string
    subTitle?: string
}

export const SectionTitle:React.FC<SectionTitlePropsType> = (props: SectionTitlePropsType) => {
    return (
        <S.SectionTitle>
            <S.SectionMainTitle>{props.mainTitle}</S.SectionMainTitle>
            <S.SectionSubTitle> {props.subTitle}</S.SectionSubTitle>
        </S.SectionTitle>
    )
}

