import React from 'react'
import {Icon} from '../../../../components/icon/Icon'
import styled from 'styled-components'

type SkillPropsType = {
    iconId: string
    title: string
    iconViewBox:string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.iconViewBox} />
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
  width: 30%;
  background-color: #386def;
  margin: 10px;
  align-self: center;
  `

const SkillTitle = styled.h4`
`
