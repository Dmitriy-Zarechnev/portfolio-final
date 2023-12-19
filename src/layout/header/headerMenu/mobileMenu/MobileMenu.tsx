import React, {useState} from 'react'
import {Menu} from '../menu/Menu'
import {S} from '../HeaderMenu_Styles'


export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu >
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup role={'dialog'} aria-modal={'true'} isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}


