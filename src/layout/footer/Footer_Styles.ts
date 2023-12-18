import styled from 'styled-components'
import {font} from '../../styles/Common'
import {theme} from '../../styles/theme'


const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`


const PhoneMail = styled.span`
  ${font({family: '\'DM Sans\', sans-serif', weight: 400, color: theme.colors.primaryTextColor, lineHeight: 1.4, fontD: 18, fontM: 16})};
`

const Copyright = styled.small`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`

const SmallSpan = styled.span`
  font-weight: bold;
  background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
  color: transparent;
  -webkit-background-clip: text;
`
export const S = {
    Footer,
    PhoneMail,
    Copyright,
    SmallSpan
}