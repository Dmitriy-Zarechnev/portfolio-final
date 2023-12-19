import styled from 'styled-components'
import {theme} from '../../styles/theme'
import {font} from '../../styles/Common'


const SectionTitle = styled.div`
  text-align: center;
  position: relative;
`

const SectionMainTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.primaryTitle, fontD: 48, fontM: 40})};
  margin-bottom: 30px;
  
  @media ${theme.media.mobile} {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`

const SectionSubTitle = styled.h3`
  ${font({weight: 400, color: theme.colors.secondaryTitle, fontD: 32, fontM: 26})};
  margin-bottom: 75px;
  

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`
export const S = {
    SectionTitle,
    SectionMainTitle,
    SectionSubTitle
}