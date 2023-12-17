import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {font} from '../../../styles/Common'

const Slogan = styled.section`
`

const StyledTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  color: ${theme.colors.primaryTitle};
  text-align: center;
  letter-spacing: -1px;

  @media ${theme.media.tablet} {
    ${font({family: '\'DM Sans\', sans-serif', weight: 700, color: theme.colors.primaryTitle, lineHeight: 1.2, fontD: 58, fontM: 30})};
  }
`

const StyledEmail = styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  color: ${theme.colors.primaryTextColor};

  &:hover {
    background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
    color: transparent;
    font-size: 60px;
    -webkit-background-clip: text;
  }

  @media ${theme.media.tablet} {
    background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
    color: transparent;
    font-size: 40px;
    -webkit-background-clip: text;
  }


  @media ${theme.media.mobile} {
    background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
    color: transparent;
    font-size: 25px;
    -webkit-background-clip: text;
  }
`

export const S = {
    Slogan,
    StyledTitle,
    StyledEmail
}