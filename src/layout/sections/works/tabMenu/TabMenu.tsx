import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../../styles/theme'

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((el: string, index: number) => {
                    return <ListItem key={index}><Link href="#">{el}</Link></ListItem>
                })}
            </ul>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`
  color: ${theme.colors.worksCards};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
`
