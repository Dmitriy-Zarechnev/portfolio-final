import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'
import {respFont} from '../../../styles/Common'


// ----------------- About Styles ----------------------

const About = styled.section`
`

const AboutPhoto = styled.img`
  width: 300px;
  object-fit: cover;
  z-index: 2;

  @media ${theme.media.tablet} {
    display: none;
  }
`

const AboutTextArea = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;

  ${Button} {
    align-self: center;
    max-width: 300px;
    width: 100%;
  }
`

const SectionAboutTitle = styled.h2`
  ${respFont({PxMax: 42, PxMin: 24})};
  font-weight: 700;
  color: ${theme.colors.primaryTitle};
  margin-bottom: 30px;
  letter-spacing: -0.4px;

  @media ${theme.media.tablet} {
    margin-bottom: 20px;
  }
`

const AboutText = styled.p`
  ${respFont({PxMax: 24, PxMin: 14})};
  font-weight: 300;
  color: ${theme.colors.primaryTextColor};
  margin-bottom: 40px;

  @media ${theme.media.mobile} {
    margin-bottom: 20px;
  }
`

// ---------------- AboutBG Styles ----------------------

const AboutBG = styled.div`
`

const MyBackground = styled.div`
  margin-bottom: 20px;
`

const MyBackgroundText = styled.p`
  ${respFont({ PxMax: 20, PxMin: 16})};
  font-weight: 400;
  color: ${theme.colors.secondaryTitle};
  letter-spacing: 1px;
`

const Place = styled.p`
  ${respFont({ PxMax: 20, PxMin: 16})};
  font-weight: 500;
  color: ${theme.colors.contactColor};
  letter-spacing: 1px;
`

const Date = styled.span`
  ${respFont({PxMax: 18, PxMin: 14})};
  font-weight: 500;
  color: ${theme.colors.accent};
  letter-spacing: 1px;
`

// ---------------- Export ----------------------
export const S = {
    About,
    AboutPhoto,
    AboutTextArea,
    SectionAboutTitle,
    AboutText,
    AboutBG,
    MyBackground,
    MyBackgroundText,
    Place,
    Date
}