import React from 'react'
import mainPhoto from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {S} from'./Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <S.MainTextArea>
                        <S.MainHello>Hello There</S.MainHello>
                        <S.MainText>My name is </S.MainText>
                        <S.MyName>Dmitriy Zarechnev</S.MyName>
                        <S.MainTitle>A Web Developer and a Builder Things for Web</S.MainTitle>
                    </S.MainTextArea>

                    <S.PhotoWrapper>
                        <S.Photo src={mainPhoto} alt="MyMainPhoto"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}


