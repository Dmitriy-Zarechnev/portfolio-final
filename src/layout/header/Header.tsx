import React from 'react'
import styled from 'styled-components'
import {Logo} from '../../components/logo/Logo'
import {Menu} from '../../components/menu/Menu'
import {SocialList} from '../../components/socialList/SocialList'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
const itemsIcons: Array<string> = ['gitHubHead', 'twitterHead', 'linkedHead']
const iconsViewBox: Array<string> = ['0 0 30 30', '0 0 32 32', '0 0 30 30']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
            <SocialList iconsLink={itemsIcons} iconsSizesViewBox={iconsViewBox} iconsSize={'30'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: #07bda1;
  display: flex;
  justify-content: space-between;
`
