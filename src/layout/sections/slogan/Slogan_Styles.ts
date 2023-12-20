import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {font} from '../../../styles/Common'

const Slogan = styled.div`
    margin-top: 30px;
`

const StyledTitle = styled.p`
  ${font({family: '\'DM Sans\', sans-serif', weight: 700, color: theme.colors.primaryTitle, lineHeight: 1.2, fontD: 58, fontM: 30})};
  color: ${theme.colors.primaryTitle};
  text-align: center;
  letter-spacing: -1px;
  z-index: 2;
`

const StyledEmail = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 700, color: 'transparent', lineHeight: 1.2, fontD: 58, fontM: 25})}
  letter-spacing: -1px;
  z-index: 2;
  background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
  -webkit-background-clip: text;
`
export const S = {
    Slogan,
    StyledTitle,
    StyledEmail
}