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
            <TitleWrapper>
                <TitleName>{props.titleName}</TitleName>
                <IconNotButton>{props.iconNotButtonName}</IconNotButton>
            </TitleWrapper>
            <FlexWrapper align={'center'}>
                <PlaceWrapper>
                    <Icon iconId={'place'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                    <Place>{props.placeName}</Place>
                </PlaceWrapper>
                <LocationWrapper>
                    <Icon iconId={'location'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                    <Country>{props.countryName}</Country>
                </LocationWrapper>
                <DatesWrapper>
                    <Icon iconId={'dates'} width={'16'} height={'12'} viewBox={'0 0 16 12'} fill={`${theme.colors.secondaryFont}`}/>
                    <Period>{props.periodName}</Period>
                </DatesWrapper>
            </FlexWrapper>
        </StyledAboutExperience>
    )
}

const StyledAboutExperience = styled.section`
  border-bottom: 2px solid ${theme.colors.secondaryFont};
  margin-bottom: 20px;
`

const TitleWrapper =styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const TitleName = styled.h3`
  color: ${theme.colors.primaryFont};
  font-size: 20px;
  font-weight: 400;
  
  flex-grow: 1;
`

const IconNotButton = styled.div`
  width: 84px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 100px;
  background-color: #7495f6;

  color: ${theme.colors.accent};
  padding: 7px 0;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  
`

const PlaceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
`

const Place = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;
`

const LocationWrapper =styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const Country = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;

  
`

const DatesWrapper =styled.div`
  display: flex;
  align-items: center;
  width: 17%;
  `

const Period = styled.span`
  color: ${theme.colors.secondaryFont};
  font-size: 12px;
  font-weight: 500;
`

