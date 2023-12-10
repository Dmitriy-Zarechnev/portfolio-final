import React from 'react'
import {FlexWrapper} from '../../../../components/FlexWrapper'
import styled from 'styled-components'
import {Icon} from '../../../../components/icon/Icon'
import {theme} from '../../../../styles/theme'


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
                <Icon iconId={'place'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                <Place>{props.placeName}</Place>
                <Icon iconId={'location'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                <Country>{props.countryName}</Country>
                <Icon iconId={'dates'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                <Period>{props.periodName}</Period>
            </FlexWrapper>
        </StyledAboutExperience>
    )
}

const StyledAboutExperience = styled.section`
  border-bottom: 2px solid ${theme.colors.secondaryFont};
`

const TitleName = styled.h3`
  color: ${theme.colors.primaryFont};
  font-size: 20px;
  font-weight: 400;

  flex-grow: 1;
`

const IconNotButton = styled.span`
`

const Place = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;
`

const Country = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;

  flex-grow: 1;
`

const Period = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;
`

