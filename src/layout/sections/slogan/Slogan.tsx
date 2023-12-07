import React from 'react'
import styled from 'styled-components'

export const Slogan = () => {
    return (
        <StyledSlogan>
            <StyledTitle> Let’s work together on your next product</StyledTitle>
            <StyledEmail href={'#'}>zarechnev5021@gmail.com</StyledEmail>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: aqua;
`
const StyledTitle = styled.h2`
`

const StyledEmail = styled.a`
`