import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {FlexWrapper} from '../../components/FlexWrapper'
import {SocialList} from '../../components/socialList/SocialList'
import {theme} from '../../styles/theme'
import {FooterMenu} from './footerMenu/FooterMenu'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects']
const itemsIcons: Array<string> = ['gitHubSocialLink', 'gmailSocialLink', 'whatsappSocialLink', 'telegrammSocialLink']
const iconsViewBox: Array<string> = ['0 0 30 30', '-0.5 0 48 48', '0 0 32 32', '2 2 20 20']
const iconsSize: Array<string> = ['30', '30', '30', '30']
const iconsColor: string = `${theme.colors.contactColor}`
export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo iconId={'logo'} width={'60'} height={'60'} viewBox={'0 0 32 32'} fill={`${theme.colors.contactColor}`}/>
                <FlexWrapper gap={'20px'} align={'center'}>
                    <Phone>+91 12345 09876</Phone>
                    <Email>info@example.com</Email>
                    <SocialList iconsLink={itemsIcons} iconsSizesViewBox={iconsViewBox} iconsSize={iconsSize} iconsFill={iconsColor}/>
                </FlexWrapper>
            </FlexWrapper>
            <FooterMenu menuItems={items}/>
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
