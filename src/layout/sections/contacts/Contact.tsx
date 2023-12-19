import React from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from '../../../components/Container'
import {S} from './Contacts_Styles'

const titlesData = {
    mainTitle: 'Contact',
    subTitle: 'Together we will stand'
}

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container >
                <SectionTitle  mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle} />
                <S.StyledForm>
                    <S.StyledLabel htmlFor="name" aria-labelledby="name">Your Name </S.StyledLabel>
                    <S.Field id={'name'} type={'text'} placeholder={'Name'} title={'Write down your name'} aria-placeholder={'Name'}/>
                    <S.StyledLabel htmlFor="email" aria-labelledby="email">Your email address: </S.StyledLabel>
                    <S.Field id={'email'} type={'email'} placeholder={'Email'} title={'Write down your email'} aria-placeholder={'Email'}/>
                    <S.Field placeholder={'Your message starts with…'} as={'textarea'} title={'Write down message'} aria-placeholder={'Your message starts with…'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
            </Container>
        </S.Contact>
    )
}




