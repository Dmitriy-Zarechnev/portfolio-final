import styled from 'styled-components'
import {theme} from '../../styles/theme'

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  z-index: 2;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  color: ${theme.colors.contactColor};
  transform: translateY(0px);
  display: inline-block;
  transition: ${theme.animations.fastTransition};

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`

export const S = {
    SocialList,
    SocialItem,
    SocialLink
}