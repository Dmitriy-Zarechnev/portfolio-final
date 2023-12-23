import styled from 'styled-components'
import {theme} from '../styles/theme'

export const Button = styled.button`
  width: 170px;
  height: 32px;
  color: ${theme.colors.primaryTextColor};
  background-color: ${theme.colors.buttonBg};
  border: 3px solid ${theme.colors.primaryTextColor};
  padding: 7px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: ${theme.animations.fastTransition};

  &:hover {
    color: ${theme.colors.accent};
    border: 3px solid ${theme.colors.borderColor};
    box-shadow: 0 0 2px 2px ${theme.colors.borderColor};
  }

  @media ${theme.media.tablet} {
    border: 3px solid ${theme.colors.borderColor};
    box-shadow: 0 0 2px 2px ${theme.colors.borderColor};
  }
`