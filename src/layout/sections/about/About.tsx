import React from 'react'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {Button} from '../../../components/Button'
import {AboutMyBG, background} from './aboutMyBG/AboutMyBG'
import {S} from './About_Styles'


const aboutText: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam Lorempsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum'

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

export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>

                    <S.AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <S.AboutTextArea>
                        <S.SectionAboutTitle>About Me</S.SectionAboutTitle>
                        <S.AboutText>{aboutText}</S.AboutText>

                        <S.SectionAboutTitle>Experience</S.SectionAboutTitle>
                        <AboutMyBG infoAboutMe={expData}/>

                        <S.SectionAboutTitle>Education</S.SectionAboutTitle>
                        <AboutMyBG infoAboutMe={eduData}/>

                        <Button>Download CV</Button>
                    </S.AboutTextArea>
                </FlexWrapper>
            </Container>
        </S.About>
    )
}





