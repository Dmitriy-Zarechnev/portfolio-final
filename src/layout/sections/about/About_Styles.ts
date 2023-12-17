import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'
import {font} from '../../../styles/Common'

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

    @media ${theme.media.tablet} {
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.borderColor};
      transform: scale(1.1);
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

export const S = {
    About,
    AboutPhoto,
    AboutTextArea,
    SectionAboutTitle,
    AboutText
}