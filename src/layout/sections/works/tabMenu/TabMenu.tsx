import React from 'react'
import styled from 'styled-components'

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((el: string, index: number) => {
                    return <li key={index}><a href="">{el}</a></li>
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

