import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_photo.webp'
import {AboutExperience} from './aboutExperience/AboutExperience'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>

                    <AboutPhotoWrapper>
                        <AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>
                    </AboutPhotoWrapper>


                    <AboutTextArea>
                        <SectionAboutTitle>About Me</SectionAboutTitle>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum illum in minus perspiciatis sed totam, ut, voluptate voluptatibus! Assumenda aut cumque distinctio dolorem enim eum minima mollitia nam
                            optio
                            quibusdam, quis quos rerum vel velit vero vitae voluptas? Consectetur consequuntur perferendis sapiente.
                        </AboutText>

                        <FlexWrapper direction={'column'}>
                            <SectionAboutTitle>Work Experience</SectionAboutTitle>
                            <AboutExperience titleName={'Junior Web Developer'} iconNotButtonName={'Full Time'} placeName={'Dr. Rajkumar’s Learning App'} countryName={'Bengaluru'} periodName={'Sep 2021 - Dec 2021'}/>
                            <AboutExperience titleName={'Web Development Intern'} iconNotButtonName={'Internship'} placeName={'IonPixelz Web Solutions'} countryName={'Bengaluru'} periodName={'Sep 2021 - Dec 2021'}/>
                        </FlexWrapper>

                        <FlexWrapper direction={'column'}>
                            <SectionAboutTitle>Education</SectionAboutTitle>
                            <AboutExperience titleName={'Bachelor in Electronics & Communication'} iconNotButtonName={'Full Time'} placeName={'Bangalore Instutute of Technology'} countryName={'Bengaluru'} periodName={'Aug 2015 - Dec 2020'}/>
                        </FlexWrapper>
                    </AboutTextArea>

                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
  min-height: 100vh;
  display: flex;
`

const AboutPhotoWrapper = styled.div`
    /* Стили для рамки
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 300px;
    height: 740px;
    border: 3px solid ${theme.colors.accent};
    border-radius: 30px;

    position: absolute;
    top: -20px;
    left: -50px;
    z-index: -1;
  }
*/


`

const AboutPhoto = styled.img`
  height: 700px;
  object-fit: contain;
  border-radius: 30px;
`

const AboutTextArea = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`

const AboutText = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
`
const SectionAboutTitle = styled.h3`
  color: ${theme.colors.primaryTitle};
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
`


