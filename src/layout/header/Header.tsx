import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {theme} from '../../styles/theme'
import {Container} from '../../components/Container'
import {FlexWrapper} from '../../components/FlexWrapper'
import {HeaderMenu} from './headerMenu/HeaderMenu'
import {MobileMenu} from './mobileMenu/MobileMenu'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo iconId={'logo'} width={'60'} height={'60'} viewBox={'0 0 32 32'} fill={`${theme.colors.accent}`}/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

