import React from 'react'
import styled from 'styled-components'
import {theme} from '../../styles/theme'

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
  color: ${theme.colors.primaryTitle};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
`

const SectionSubTitle = styled.h3`
  color: ${theme.colors.secondaryTitle};
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 125px;
`