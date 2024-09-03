import React from 'react'
import mainPhoto from '../../../assets/images/main_photo.jpg'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect'


export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.MainTextArea>
                        <S.MainHello>Приветствую!</S.MainHello>
                        <S.MainText>Меня зовут </S.MainText>
                        <S.MyName>Заречнев Дмитрий</S.MyName>
                        <S.MainTitle>
                            <p>FrontEnd разработчик и хороший человек</p>
                            <Typewriter
                                options={{
                                    strings: ['React разработчик', 'Создаю Web-будущее', 'FrontEnd Developer', 'NextJS разработчик'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>
                    </S.MainTextArea>

                    <S.PhotoWrapper>
                        <S.Photo src={mainPhoto} alt="MyMainPhoto"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}


