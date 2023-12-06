import React from 'react'
import styled from 'styled-components'

export const SectionTitle = () => {
    return (
        <StyledSectionTitle>
            <SectionMainTitle>My Tech Stack</SectionMainTitle>
            <SectionSubTitle> Technologies I’ve been working with recently</SectionSubTitle>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div`
`

const SectionMainTitle = styled.h2`
`

const SectionSubTitle = styled.h3`
`