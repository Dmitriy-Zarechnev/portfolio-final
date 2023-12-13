import React from 'react'
import styled from 'styled-components'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                    <StyledTitle> Let’s work together on your next product:</StyledTitle>
                    <StyledEmail href={'#'}>zarechnev5021@gmail.com</StyledEmail>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
`

const StyledTitle = styled.p`
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 70px;
  color: ${theme.colors.contactColor};
`

const StyledEmail = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  color: ${theme.colors.primaryTextColor};

  &:hover {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`