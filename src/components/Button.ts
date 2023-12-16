import styled from 'styled-components'
import {theme} from '../styles/theme'

export const Button = styled.button`
  width: 170px;
  height: 32px;
  border-radius: 30px;
  background-color: ${theme.colors.buttonBg};

  padding: 7px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.accent};
    border: 2px solid ${theme.colors.borderColor};
    transform: scale(1.1);
  }

  
`