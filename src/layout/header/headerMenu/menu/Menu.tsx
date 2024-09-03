import React from 'react'
import {S} from '../HeaderMenu_Styles'


const items = [
    {
        title: 'Главная',
        href: 'home'
    },
    {
        title: 'О себе',
        href: 'about'
    },
    {
        title: 'Технологии',
        href: 'techStack'
    },
    {
        title: 'Проекты',
        href: 'projects'
    }
]


export const Menu: React.FC<{ closeMenu?: () => void }> = (props: { closeMenu?: () => void }) => {
    return (
        <ul role="menu">
            {items.map((el: { title: string, href: string }, index: number) => {
                return (
                    <S.MenuItem key={index}
                                role="menuitem"
                    >
                        <S.NavLink
                            onClick={() => {
                                if (props.closeMenu) {
                                    props.closeMenu()
                                }
                            }}
                            activeClass="active"
                            to={el.href}
                            smooth={true}
                            spy={true}
                            duration={2000}
                            offset={-50}
                        >
                            {el.title}
                            <span></span>
                        </S.NavLink>
                    </S.MenuItem>)
            })}
        </ul>
    )
}

