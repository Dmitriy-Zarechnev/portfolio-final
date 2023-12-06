import React from 'react'
import styled from 'styled-components'

type SectionTitlePropsType = {
    mainTitle: string
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
`

const SectionSubTitle = styled.h3`
`