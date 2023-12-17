import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Slider} from '../../../components/slider/Slider'
import {FlexWrapper} from '../../../components/FlexWrapper'

const titlesData = {
    mainTitle: 'Hobbies',
    subTitle: 'How i spend free time'
}

export const Hobbies: React.FC = () => {
    return (
        <StyledHobbies>
            <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
            <FlexWrapper direction={'column'} align={'center'}>
                <Slider/>
            </FlexWrapper>
        </StyledHobbies>
    )
}

const StyledHobbies = styled.section`
`

