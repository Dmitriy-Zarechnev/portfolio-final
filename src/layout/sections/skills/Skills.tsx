import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Skill} from './skill/Skill'

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle mainTitle={'My Tech Stack'} subTitle={'Technologies I’ve been working with recently'}/>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'css'} title={'CSS3'}/>
                <Skill iconId={'html'} title={'HTML5'}/>
                <Skill iconId={'sass'} title={'SASS'}/>

                <Skill iconId={'js'} title={'JS'}/>
                <Skill iconId={'react'} title={'React'}/>
                <Skill iconId={'ts'} title={'TS'}/>

                <Skill iconId={'git'} title={'Git'}/>
                <Skill iconId={'styledComp'} title={'Styled-Components'}/>
                <Skill iconId={'gitHub'} title={'GitHub'}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
  background-color: darksalmon;
  min-height: 100vh;
`