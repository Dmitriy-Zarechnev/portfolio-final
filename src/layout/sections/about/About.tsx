import React from 'react'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {Button} from '../../../components/Button'
import {AboutMyBG, background} from './aboutMyBG/AboutMyBG'
import {S} from './About_Styles'


const aboutText: string = 'Frontend-разработчик прошел обучение в IT-Инкубаторе, где получил ценный опыт работы в команде и разработки реальных проектов. Специализируюсь на создании SPA с использованием React, NextJS, TypeScript, Redux, RTK, RTK Query. В разработке проектов использовал CSS, SCSS, MUI и Style-Components.  Отличаюсь целеустремленностью, вежливостью и способностью эффективно общаться с людьми. Постоянно стремлюсь к новым знаниям и улучшению своих навыков в разработке и взаимодействии с коллегами.'

const expData: Array<background> = [
    {
        text: 'Front-end development: React Redux TypeScript NextJS Git Storybook',
        place: 'IT-Incubator:',
        date: '2023 - н.в.'
    }
]

const eduData: Array<background> = [
    {
        text: 'Специалист АЭС',
        place: 'НИ ТПУ:',
        date: '2012 - 2018'
    }
]

export const About: React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>

                    <S.AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <S.AboutTextArea>
                        <S.SectionAboutTitle>О себе</S.SectionAboutTitle>
                        <S.AboutText>{aboutText}</S.AboutText>

                        <S.SectionAboutTitle>Опыт</S.SectionAboutTitle>
                        <AboutMyBG infoAboutMe={expData}/>

                        <S.SectionAboutTitle>Образование</S.SectionAboutTitle>
                        <AboutMyBG infoAboutMe={eduData}/>

                        <Button>Загрузить CV</Button>
                    </S.AboutTextArea>
                </FlexWrapper>
            </Container>
        </S.About>
    )
}





