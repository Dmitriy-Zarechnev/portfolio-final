import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Menu} from '../../components/menu/Menu'
import {SocialList} from '../../components/socialList/SocialList'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
const itemsIcons: Array<string> = ['gitHubFoot', 'twitterFoot', 'linkedFoot', 'telegrammFoot']
const iconsViewBox: Array<string> = ['0 0 30 30', '0 0 32 32', '0 0 30 30', '0 0 455 455']

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo/>
                <FlexWrapper gap={'20px'} align={'center'}>
                    <Phone>+91 12345 09876</Phone>
                    <Email>info@example.com</Email>
                    <SocialList iconsLink={itemsIcons} iconsSizesViewBox={iconsViewBox} iconsSize={'30'}/>
                </FlexWrapper>
            </FlexWrapper>
            <Menu menuItems={items}/>
            <Copyright>Designed and built by Zarechnev Dmitriy with Love & Tea</Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  background-color: darkorange;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
`

const Phone = styled.span`

`

const Email = styled.span`

`

const Copyright = styled.small``
