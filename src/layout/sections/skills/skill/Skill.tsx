import React from 'react'
import {Icon} from '../../../../components/icon/Icon'
import styled from 'styled-components'
import {theme} from '../../../../styles/theme'

type SkillPropsType = {
    iconId: string
    title: string
    iconViewBox: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} viewBox={props.iconViewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 110px;
`

const SkillTitle = styled.span`
  color: ${theme.colors.secondaryTitle};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 5px;
  text-transform: uppercase;
  `
