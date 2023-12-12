import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'
import {theme} from '../../styles/theme'

type SocialListPropsType = {
    iconsLink: Array<string>
    iconsSizesViewBox: Array<string>
    iconsSize: Array<string>
}

export const SocialList = (props: SocialListPropsType) => {
    return (
        <StyledSocialList>
            {props.iconsLink.map((el: string, index: number) => {
                return (
                    <SocialItem key={index}>
                        <SocialLink href={'#'}>
                            <Icon width={props.iconsSize[index]} height={props.iconsSize[index]} viewBox={props.iconsSizesViewBox[index]} iconId={el}/>
                        </SocialLink>
                    </SocialItem>
                )
            })}
        </StyledSocialList>
    )
}

const StyledSocialList = styled.ul`
  display: flex;
  gap: 15px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  color: ${theme.colors.contactColor};
  display: inline-block;

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`


