import React from 'react'
import {Icon} from '../icon/Icon'
import styled from 'styled-components'

type SocialListPropsType = {
    iconsLink: Array<string>
    iconsSizesViewBox: Array<string>
    iconsSize: Array<string>
    iconsFill:string
}

export const SocialList = (props: SocialListPropsType) => {
    return (
        <StyledSocialList>
            {props.iconsLink.map((el: string, index: number) => {
                return (
                    <SocialItem key={index}>
                        <SocialLink href={'#'}>
                            <Icon width={props.iconsSize[index]} height={props.iconsSize[index]} viewBox={props.iconsSizesViewBox[index]} iconId={el} fill={props.iconsFill}/>
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
    &:hover{
      fill: red;
    }
`


