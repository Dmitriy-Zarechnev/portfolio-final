import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Skill} from './skill/Skill'

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle mainTitle={'My Tech Stack'} subTitle={'Technologies I’ve been working with recently'}/>
            <FlexWrapper wrap={'wrap'} justify={'center'}>
                <Skill iconId={'css'} title={'CSS3'} iconViewBox={'0 0 120 119'}/>
                <Skill iconId={'html'} title={'HTML5'} iconViewBox={'0 0 120 120'}/>
                <Skill iconId={'sass'} title={'SASS'} iconViewBox={'0 0 117 87'}/>

                <Skill iconId={'js'} title={'JS'} iconViewBox={'0 0 120 120'}/>
                <Skill iconId={'react'} title={'React'} iconViewBox={'0 0 113 101'}/>
                <Skill iconId={'ts'} title={'TS'} iconViewBox={'0 0 120 120'}/>

                <Skill iconId={'git'} title={'Git'} iconViewBox={'0 0 105 105'}/>
                <Skill iconId={'styledComp'} title={'Styled-Components'} iconViewBox={'0 0 120 120'}/>
                <Skill iconId={'gitHub'} title={'GitHub'} iconViewBox={'0 0 88 88'}/>

                <Skill iconId={'nodeJS'} title={'NodeJS'} iconViewBox={'0 0 32 32'}/>
                <Skill iconId={'figma'} title={'Figma'} iconViewBox={'0 0 59 90'}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
  background-color: darksalmon;
  min-height: 100vh;
`
