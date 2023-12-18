import React from 'react'
import mainPhoto from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.MainTextArea>
                        <S.MainHello>Hello There</S.MainHello>
                        <S.MainText>My name is </S.MainText>
                        <S.MyName>Dmitriy Zarechnev</S.MyName>
                        <S.MainTitle>
                            <p>A Web Developer and a Builder Things for Web</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Builder Things for Web', 'A FrontEnd Developer'],
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


