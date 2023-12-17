import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'
import {font} from '../../../styles/Common'
import {AboutMyBG} from './aboutMyBG/AboutMyBG'


const aboutText: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam Lorempsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum'

type background = {
    text: string,
    place: string,
    date: string
}

const expData: Array<background> = [
    {
        text: 'Bachelor in Electronics & Communication',
        place: 'Loremipsum dolorsit t, consectetur:',
        date: 'Aug 2015 - Dec 2020'
    }
]

const eduData: Array<background> = [
    {
        text: 'Specialist in NPP',
        place: 'National Research Tomsk Polytechnic University:',
        date: 'Aug 2012 - Feb 2018'
    }
]

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>
                    <AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <AboutTextArea>
                        <SectionAboutTitle>About Me</SectionAboutTitle>
                        <AboutText>{aboutText}</AboutText>

                        <SectionAboutTitle>Experience</SectionAboutTitle>
                        <AboutMyBG infoAboutMe={expData}/>

                        <SectionAboutTitle>Education</SectionAboutTitle>
                        <AboutMyBG infoAboutMe={eduData}/>

                        <Button>Download CV</Button>
                    </AboutTextArea>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
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




