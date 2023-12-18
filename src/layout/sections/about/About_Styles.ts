import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'
import {font} from '../../../styles/Common'


// ----------------- About Styles ----------------------

const About = styled.section`
`

const AboutPhoto = styled.img`
  width: 300px;
  object-fit: cover;

  @media ${theme.media.tablet} {
    display: none;
  }
`

const AboutTextArea = styled.div`
  display: flex;
  flex-direction: column;
  

  ${Button} {
    align-self: center;
    max-width: 300px;
    width: 100%;
    border-radius: 0;
    
    @media ${theme.media.tablet} {
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.borderColor};
    }
  }
`

const SectionAboutTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.primaryTitle, fontD: 42, fontM: 24})};
  margin-bottom: 30px;
  letter-spacing: -0.4px;

  @media ${theme.media.tablet} {
    margin-bottom: 20px;
  }
`

const AboutText = styled.p`
  ${font({weight: 300, color: theme.colors.primaryTextColor, fontD: 24, fontM: 14})};
  margin-bottom: 40px;
`

// ---------------- AboutBG Styles ----------------------

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