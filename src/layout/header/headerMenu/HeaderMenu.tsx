import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../styles/theme'

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul role="menu">
                {props.menuItems.map((el: string, index: number) => {
                    return (
                        <ListItem key={index} role="menuitem">
                            <Link href="#">{el}<span></span></Link>
                        </ListItem>)
                })}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

const Link = styled.a`
  display: block;
  position: relative;

  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding: 6px 20px;
  transition: .5s;
  z-index: 1;

  &:hover {
    color: ${theme.colors.accent};
    //background-color: darkorange;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-bottom: 2px solid ${theme.colors.accent};
    border-radius: 15px;
    transform: scale(0) translateY(30px);
    opacity: 0;
    transition: .5s;
  }

  &:hover span {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`


const ListItem = styled.li`

`