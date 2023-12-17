import React from 'react'
import {S} from '../Works_Styles'

export const TabMenu:React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabMenu>
            <ul role="menu">
                {props.menuItems.map((el: string, index: number) => {
                    return (
                        <S.ListItem key={index} role="menuitem">
                            <S.TabLink href="#">{el}</S.TabLink>
                        </S.ListItem>)
                })}
            </ul>
        </S.TabMenu>
    )
}


