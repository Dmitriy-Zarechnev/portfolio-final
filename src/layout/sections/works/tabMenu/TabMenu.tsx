import React from 'react'
import {S} from '../Works_Styles'

export type TabsStatusType = 'all' | 'React' | 'NextJS'

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TabsStatusType }>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul role="menu">
                {props.tabsItems.map((el, index: number) => {
                    return (
                        <S.ListItem key={index} role="menuitem">
                            <S.TabLink active={props.currentFilterStatus === el.status} onClick={() => {
                                props.changeFilterStatus(el.status)
                            }}>{el.title}</S.TabLink>
                        </S.ListItem>)
                })}
            </ul>
        </S.TabMenu>
    )
}


