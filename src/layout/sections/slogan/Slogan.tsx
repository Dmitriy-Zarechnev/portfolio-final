import React from 'react'
import {Container} from '../../../components/Container'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {S} from './Slogan_Styles'


export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
                    <S.StyledTitle> Let’s work together on your next product:</S.StyledTitle>
                    <S.StyledEmail>zarechnev5021@gmail.com</S.StyledEmail>
                </FlexWrapper>
            </Container>
        </S.Slogan>
    )
}

