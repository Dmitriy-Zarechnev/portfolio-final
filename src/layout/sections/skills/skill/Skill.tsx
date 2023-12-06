import React from 'react'
import {Icon} from '../../../../components/icon/Icon'
import styled from 'styled-components'

export const Skill = () => {
    return (
        <StyledSkill>
            <Icon iconId={'html'}/>
            <SkillTitle>HTML5</SkillTitle>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
`

const SkillTitle = styled.h4`
`
