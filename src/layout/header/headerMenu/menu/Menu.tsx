import React from 'react'
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul role="menu">
            {props.menuItems.map((el: string, index: number) => {
                return (
                    <S.MenuItem key={index} role="menuitem">
                        <S.Link href="#">{el}<span></span></S.Link>
                    </S.MenuItem>)
            })}
        </ul>
    )
}

