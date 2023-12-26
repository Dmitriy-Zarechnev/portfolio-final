import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {respFont} from '../../../styles/Common'

const Slogan = styled.div`
  margin-top: 30px;
`

const StyledTitle = styled.p`
  ${respFont({PxMax: 58, PxMin: 30})};
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.primaryTitle};
  text-align: center;
  letter-spacing: -1px;
  z-index: 2;
`

const StyledEmail = styled.span`
  ${respFont({PxMax: 58, PxMin: 25})};
  font-family: 'DM Sans', sans-serif;
  color: transparent;
  font-weight: 700;
  line-height: 1.2;
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