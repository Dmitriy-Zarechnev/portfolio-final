import React from 'react'
import styled from 'styled-components'
import {Theme} from '../../../styles/Theme'

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((el: string, index: number) => {
                    return <ListItem key={index}><Link href="">{el}</Link></ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

`

const ListItem = styled.li``

const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${Theme.colors.secondaryFont};
`

