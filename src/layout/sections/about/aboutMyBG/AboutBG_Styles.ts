import styled from 'styled-components'
import {font} from '../../../../styles/Common'
import {theme} from '../../../../styles/theme'

const AboutBG = styled.div`
`

const MyBackground = styled.div`
  margin-bottom: 20px;
`

const MyBackgroundText = styled.p`
  ${font({weight: 400, color: theme.colors.secondaryTitle, fontD: 20, fontM: 16})};
  letter-spacing: 1px;
`

const Place = styled.p`
  ${font({weight: 500, color: theme.colors.contactColor, fontD: 20, fontM: 16})};
  letter-spacing: 1px;
`

const Date = styled.span`
  ${font({weight: 500, color: theme.colors.accent, fontD: 18, fontM: 14})};
  letter-spacing: 1px;
`
export const S = {
    AboutBG,
    MyBackground,
    MyBackgroundText,
    Place,
    Date
}
