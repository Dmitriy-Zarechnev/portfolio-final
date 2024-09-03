import styled from 'styled-components'
import {respFont} from '../../styles/Common'
import {theme} from '../../styles/theme'


const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
`

const PhoneMail = styled.span`
    ${respFont({PxMax: 18, PxMin: 16})};
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: ${theme.colors.primaryTextColor};
    z-index: 2;
`

const Copyright = styled.small`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    z-index: 2;
`

const SmallSpan = styled.span`
    font-weight: bold;
    background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
    color: transparent;
    -webkit-background-clip: text;
    z-index: 2;
`

const Title = styled.h2`
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    z-index: 2;
`

export const S = {
    Footer,
    PhoneMail,
    Copyright,
    SmallSpan,
    Title
}