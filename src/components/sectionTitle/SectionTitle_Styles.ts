import styled from 'styled-components'
import {theme} from '../../styles/theme'
import {respFont} from '../../styles/Common'


const SectionTitle = styled.div`
  text-align: center;
  position: relative;
`

const SectionMainTitle = styled.h2`
  ${respFont({PxMax: 48, PxMin: 40})};
  font-weight: 700;
  color: ${theme.colors.primaryTitle};
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`

const SectionSubTitle = styled.h3`
  ${respFont({PxMax: 32, PxMin: 26})};
  font-weight: 400;
  color: ${theme.colors.secondaryTitle};
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