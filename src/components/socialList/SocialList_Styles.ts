import styled from 'styled-components'
import {theme} from '../../styles/theme'

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  color: ${theme.colors.contactColor};
  display: inline-block;

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