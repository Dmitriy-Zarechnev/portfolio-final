import React from 'react'
import styled from 'styled-components'
import {theme} from '../../../styles/theme'

export const FooterMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el: string, index: number) => {
                    return <ListItem key={index}><Link href="">{el}</Link></ListItem>
                })}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const Link = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.contactColor};
`

const ListItem = styled.li`
  &:hover {
    ${Link} {
      color: ${theme.colors.accent};
      font-size: 20px;
    }
  }
`
