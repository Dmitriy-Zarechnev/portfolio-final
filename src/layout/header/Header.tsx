import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {SocialList} from '../../components/socialList/SocialList'
import {theme} from '../../styles/theme'
import {Container} from '../../components/Container'
import {FlexWrapper} from '../../components/FlexWrapper'
import {HeaderMenu} from './headerMenu/HeaderMenu'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
// const iconsObj: Array<object> = [
//     {
//         id: 'gitHubHead',
//         size: '40',
//         viewBox: '0 0 30 30',
//         fill: 'white'
//     },
//     {
//         id: 'gmailHead',
//         size: '40',
//         viewBox: '-0.5 0 48 48',
//         fill: 'white'
//     },
//     {
//         id: 'whatsappHead',
//         size: '40',
//         viewBox: '0 0 32 32',
//         fill: 'white'
//     },
//     {
//         id: 'telegrammHead',
//         size: '50',
//         viewBox: '0 0 24 24',
//         fill: 'white'
//     }
// ]
const itemsIcons: Array<string> = ['gitHubHead', 'gmailHead', 'whatsappHead', 'telegrammHead']
const iconsViewBox: Array<string> = ['0 0 30 30', '-0.5 0 48 48', '0 0 32 32', '2 2 20 20']
const iconsSize: Array<string> = ['30', '30', '30', '30']
const iconsColor: string = `${theme.colors.secondaryFont}`

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo iconId={'logo'} width={'60'} height={'60'} viewBox={'0 0 32 32'} fill={`${theme.colors.accent}`}/>
                    <HeaderMenu menuItems={items}/>
                    <SocialList iconsLink={itemsIcons} iconsSizesViewBox={iconsViewBox} iconsSize={iconsSize} iconsFill={iconsColor}/>
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
