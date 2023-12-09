import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'
import {LogoAnimation} from '../../styles/animations/Animations'


export const Logo = () => {
    return (
        <StyledLogoIcon href="#">
            <Icon iconId={'logo'} width={'120'} height={'120'} viewBox={'0 0 32 32'}/>
        </StyledLogoIcon>
    )
}

const StyledLogoIcon = styled.a`
  animation: ${LogoAnimation} 30s linear infinite;
`

