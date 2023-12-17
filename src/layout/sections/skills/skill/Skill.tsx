import React from 'react'
import {Icon} from '../../../../components/icon/Icon'
import {S} from '../Skills_Styles'

type SkillPropsType = {
    iconId: string
    title: string
    iconViewBox: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} viewBox={props.iconViewBox}/>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    )
}
