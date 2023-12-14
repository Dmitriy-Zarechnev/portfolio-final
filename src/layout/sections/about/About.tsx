import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>
                    <AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <AboutTextArea>
                        <SectionAboutTitle>About Me</SectionAboutTitle>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum
                        </AboutText>
                        <AboutMyBackgroundArea>
                            <MyBackground>
                                <SectionAboutTitle>Experience</SectionAboutTitle>
                                <MyBackgroundText>
                                    Bachelor in Electronics & Communication:
                                    <Place>Lorem ipsum dolor sit amet, consectetur</Place>
                                    <Time> Aug 2015 - Dec 2020</Time>
                                </MyBackgroundText>
                            </MyBackground>
                            <MyBackground>
                                <SectionAboutTitle>Education</SectionAboutTitle>
                                <MyBackgroundText>
                                    National Research Tomsk Polytechnic University:
                                    <Place>NPP: desing, operation and engineering</Place>
                                    <Time> Aug 2012 - Feb 2018 </Time>
                                </MyBackgroundText>
                            </MyBackground>
                        </AboutMyBackgroundArea>
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
  width: 40%;
  object-fit: cover;
`

const AboutTextArea = styled.div`
  display: flex;
  flex-direction: column;

  ${Button} {
    align-self: center;
  }

`

const AboutText = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
`

const SectionAboutTitle = styled.h2`
  color: ${theme.colors.primaryTitle};
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: -0.4px;
`
const AboutMyBackgroundArea = styled.div`

`

const MyBackground = styled.div`
  margin-bottom: 20px;
`

const MyBackgroundText = styled.p`
  color: ${theme.colors.secondaryTitle};
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
`
const Place = styled.span`
  display: block;
  color: ${theme.colors.contactColor};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`

const Time = styled.span`
  display: block;
  color: ${theme.colors.accent};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
`



