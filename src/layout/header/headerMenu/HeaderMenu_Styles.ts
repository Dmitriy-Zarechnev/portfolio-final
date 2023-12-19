import styled, {css} from 'styled-components'
import {theme} from '../../../styles/theme'
import {Link} from 'react-scroll'

//  ----------------- Menu styles --------------------
const MenuItem = styled.li`
`

const NavLink = styled(Link)`
  display: block;
  position: relative;

  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding: 6px 20px;
  transition: ${theme.animations.slowTransition};
  z-index: 1;

  &:hover, &.active {
    color: ${theme.colors.accent};
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-bottom: 2px solid ${theme.colors.accent};
    border-radius: 15px;
    transform: scale(0) translateY(30px);
    opacity: 0;
    transition: ${theme.animations.slowTransition};
  }

  &:hover span, &.active span {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`

//  ----------------- MobileMenu styles -------------------
const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 9999;
  background-color: ${theme.colors.primaryBg};
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: ${theme.animations.burgerTransition};

  
  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    transition: ${theme.animations.burgerTransition};
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateX(0);

    & ul {
      gap: 20px;
    }
  `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;

  width: 200px;
  height: 200px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.primaryTextColor};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.primaryTextColor};

      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.primaryTextColor};

      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        width: 36px;
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

//  ----------------- DesktopMenu styles -------------------
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`

//  ----------------- Export styles -------------------
export const S = {
    NavLink,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}