import React from 'react'
import styled, {css} from 'styled-components'
import {theme} from '../../../styles/theme'

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul role="menu">
                    {props.menuItems.map((el: string, index: number) => {
                        return (
                            <ListItem key={index} role="menuitem">
                                <Link href="#">{el}<span></span></Link>
                            </ListItem>)
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
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
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
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


const Link = styled.a`
  display: block;
  position: relative;

  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.primaryTextColor};
  padding: 6px 20px;
  transition: .5s;
  z-index: 1;

  &:hover {
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
    transition: .5s;
  }

  &:hover span {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`


const ListItem = styled.li`

`