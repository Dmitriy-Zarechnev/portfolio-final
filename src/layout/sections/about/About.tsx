import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import aboutPhoto from '../../../assets/images/about_photo.webp'
import {AboutExperience} from './aboutExperience/AboutExperience'

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <AboutPhoto src={aboutPhoto} alt={'MyPhoto'}/>
                <FlexWrapper direction={'column'}>

                    <AboutTextArea>
                        <SectionTitle mainTitle={'About me'}/>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum illum in minus perspiciatis sed totam, ut, voluptate voluptatibus! Assumenda aut cumque distinctio dolorem enim eum minima mollitia nam optio
                            quibusdam, quis quos rerum vel velit vero vitae voluptas? Consectetur consequuntur perferendis sapiente.
                        </AboutText>
                    </AboutTextArea>

                    <FlexWrapper direction={'column'}>
                        <SectionTitle mainTitle={'Work Experience'}/>
                        <AboutExperience titleName={'Junior Web Developer'} iconNotButtonName={'Full Time'} placeName={'Dr. Rajkumar’s Learning App'} countryName={'Bengaluru'} periodName={'Sep 2021 - Dec 2021'}/>
                        <AboutExperience titleName={'Web Development Intern'} iconNotButtonName={'Internship'} placeName={'IonPixelz Web Solutions'} countryName={'Bengaluru'} periodName={'Sep 2021 - Dec 2021'}/>
                    </FlexWrapper>

                    <FlexWrapper direction={'column'}>
                        <SectionTitle mainTitle={'Education'}/>
                        <AboutExperience titleName={'Bachelor in Electronics & Communication'} iconNotButtonName={'Full Time'} placeName={'Bangalore Instutute of Technology'} countryName={'Bengaluru'} periodName={'Aug 2015 - Dec 2020'}/>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`

const AboutPhoto = styled.img`
  width: 400px;
  height: 700px;
  object-fit: contain;
`

const AboutTextArea = styled.div`
  width: 50%;
`

const AboutText = styled.p`

`



