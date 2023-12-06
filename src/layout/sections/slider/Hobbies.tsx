import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Slider} from '../../../components/slider/Slider'
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Hobbies = () => {
    return (
        <StyledHobbies>
            <SectionTitle mainTitle={'Hobbies'} subTitle={'How i spend free time'}/>
            <FlexWrapper direction={'column'} align={'center'}><Slider/></FlexWrapper>
        </StyledHobbies>
    )
}

const StyledHobbies = styled.section`
  background-color: darkgreen;
`

