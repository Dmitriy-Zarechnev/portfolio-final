import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'
import {Button} from '../../../components/Button'
import {font} from '../../../styles/Common'
import {AboutMyBackground, SectionAboutTitle} from './aboutMyBackground/AboutMyBackground'

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>
                    <AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <AboutTextArea>
                        <SectionAboutTitle>About Me</SectionAboutTitle>
                        <AboutText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum
                        </AboutText>
                        <AboutMyBackground expText={'Bachelor in Electronics & Communication'} expPlace={'Loremipsum dolorsit t, consectetur:'} expTime={'Aug 2015 - Dec 2020'}
                                           eduText={'Specialist in NPP'} eduPlace={'National Research Tomsk Polytechnic University:'} eduTime={'Aug 2012 - Feb 2018'}/>
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
  }
`

const AboutText = styled.p`
  ${font({weight: 300, color: theme.colors.primaryTextColor, fontD: 24, fontM: 14})};
  margin-bottom: 40px;
`




