import React from 'react'
import styled from 'styled-components'
import {theme} from '../../styles/theme'
import {font} from '../../styles/Common'

type SectionTitlePropsType = {
    mainTitle?: string
    subTitle?: string
}
export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <SectionMainTitle>{props.mainTitle}</SectionMainTitle>
            <SectionSubTitle> {props.subTitle}</SectionSubTitle>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div`
  text-align: center;
`

const SectionMainTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.primaryTitle, fontD: 48, fontM: 40})};
  margin-bottom: 30px;
`

const SectionSubTitle = styled.h3`
  ${font({weight: 400, color: theme.colors.secondaryTitle, fontD: 32, fontM: 26})};
  margin-bottom: 75px;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`