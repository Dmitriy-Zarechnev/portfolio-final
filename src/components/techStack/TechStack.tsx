import React from 'react'
import styled from 'styled-components'
import {theme} from '../../styles/theme'

export const TechStack = (props: { techText: string }) => {
    return (
        <StyledTechStack>
            <TechStackTitle>Tech Stack : </TechStackTitle>
            <TechStackText>{props.techText}</TechStackText>
        </StyledTechStack>
    )
}

const StyledTechStack = styled.div`
  margin-bottom: 20px;
`

const TechStackTitle = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 16px;
  font-weight: 400;
`

const TechStackText = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 14px;
  font-weight: 300;
`