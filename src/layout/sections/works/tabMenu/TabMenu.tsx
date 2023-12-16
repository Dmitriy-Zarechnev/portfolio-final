import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../../styles/theme'

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul role="menu">
                {props.menuItems.map((el: string, index: number) => {
                    return (
                        <ListItem key={index} role="menuitem">
                            <Link href="#">{el}</Link>
                        </ListItem>)
                })}
            </ul>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
  

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }


`

const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  color: ${theme.colors.worksCards};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    &::before {
      height: 5px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -5px;
    left: -10px;
    right: -10px;
  }
`
