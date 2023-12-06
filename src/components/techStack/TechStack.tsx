import React from 'react'
import styled from 'styled-components'

export const TechStack = (props: { techText: string }) => {
    return (
        <StyledTechStack>
            <TechStackTitle>Tech Stack : </TechStackTitle>
            <TechStackText>{props.techText}</TechStackText>
        </StyledTechStack>
    )
}

const StyledTechStack = styled.div`

`

const TechStackTitle = styled.span`

`
const TechStackText = styled.span`

`