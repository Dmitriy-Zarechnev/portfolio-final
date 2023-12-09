import React from 'react'
import {FlexWrapper} from '../../../../components/FlexWrapper'
import styled from 'styled-components'
import {Icon} from '../../../../components/icon/Icon'


type AboutExperiencePropsType = {
    titleName: string
    iconNotButtonName: string

    placeName: string
    countryName: string
    periodName: string
}

export const AboutExperience = (props: AboutExperiencePropsType) => {
    return (
        <StyledAboutExperience>
            <FlexWrapper align={'center'}>
                <TitleName>{props.titleName}</TitleName>
                <IconNotButton>{props.iconNotButtonName}</IconNotButton>
            </FlexWrapper>
            <FlexWrapper align={'center'}>
                <Icon iconId={'place'} width={'16'} height={'12'} viewBox={'0 0 16 12'}/>
                <Place>{props.placeName}</Place>
                <Icon iconId={'location'} width={'16'} height={'12'} viewBox={'0 0 16 12'}/>
                <Country>{props.countryName}</Country>
                <Icon iconId={'dates'} width={'16'} height={'12'} viewBox={'0 0 16 12'}/>
                <Period>{props.periodName}</Period>
            </FlexWrapper>
        </StyledAboutExperience>
    )
}

const StyledAboutExperience = styled.section`
  border-bottom: 2px solid #EBEAED;
`

const TitleName = styled.h3`
  flex-grow: 1;
`

const IconNotButton = styled.span`
`

const Place = styled.span`
`

const Country = styled.span`
  flex-grow: 1;
`

const Period = styled.span`
`

