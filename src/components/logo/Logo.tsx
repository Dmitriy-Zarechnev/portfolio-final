import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'
import {LogoAnimation} from '../../styles/animations/Animations'

type LogoPropsType = {
    iconId: string,
    width: string,
    height: string,
    viewBox: string,
    fill: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogoIcon href="#">
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill}/>
        </StyledLogoIcon>
    )
}

const StyledLogoIcon = styled.a`
  animation: ${LogoAnimation} 30s linear infinite;


`

