import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../../styles/theme'
import {font} from '../../../../styles/Common'

type AboutMyBackgroundPropsType = {

        expText: string
        expPlace: string
        expTime: string

        eduText: string
        eduPlace: string
        eduTime: string

}

export const AboutMyBackground = (props: AboutMyBackgroundPropsType) => {
    return (
        <StyledAboutMyBackground>
            <MyBackground>
                <SectionAboutTitle>Experience</SectionAboutTitle>
                <MyBackgroundText>
                    {props.expText}
                </MyBackgroundText>
                <Place>{props.expPlace}<Time> {props.expTime}</Time></Place>
            </MyBackground>
            <MyBackground>
                <SectionAboutTitle>Education</SectionAboutTitle>
                <MyBackgroundText>
                    {props.eduText}
                </MyBackgroundText>
                <Place>{props.eduPlace}<Time> {props.eduTime} </Time></Place>
            </MyBackground>
        </StyledAboutMyBackground>
    )
}


const StyledAboutMyBackground = styled.div`
`

const MyBackground = styled.div`
  margin-bottom: 20px;
`

export const SectionAboutTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.primaryTitle, fontD: 42, fontM: 24})};
  margin-bottom: 30px;
  letter-spacing: -0.4px;

  @media ${theme.media.tablet} {
    margin-bottom: 20px;
  }
`

const MyBackgroundText = styled.p`
  ${font({weight: 400, color: theme.colors.secondaryTitle, fontD: 20, fontM: 16})};
  letter-spacing: 1px;
`

const Place = styled.p`
  ${font({weight: 500, color: theme.colors.contactColor, fontD: 20, fontM: 16})};
  letter-spacing: 1px;
`

const Time = styled.span`
  ${font({weight: 500, color: theme.colors.accent, fontD: 18, fontM: 14})};
  letter-spacing: 1px;
`





