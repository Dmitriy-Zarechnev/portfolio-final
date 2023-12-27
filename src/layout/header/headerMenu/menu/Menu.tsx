import React from 'react'
import {S} from '../HeaderMenu_Styles'


const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'About',
        href: 'about'
    },
    {
        title: 'Tech Stack',
        href: 'techStack'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contact',
        href: 'contact'
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
                                    props.closeMenu();
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

