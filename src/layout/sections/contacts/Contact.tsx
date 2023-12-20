import React, {ElementRef, useRef} from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Button} from '../../../components/Button'
import {Container} from '../../../components/Container'
import {S} from './Contacts_Styles'
import {Slogan} from '../slogan/Slogan'
import emailjs from '@emailjs/browser'

const titlesData = {
    mainTitle: 'Contact',
    subTitle: 'Together we will stand'
}

export const Contact: React.FC = () => {

    // -------------------------- Отправка писем -----------------------

    const form = useRef<ElementRef<'form'>>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.current) return

        emailjs.sendForm('service_1y80rfp', 'template_612lbth', form.current, 'BG6Lud8Z8dhMzh5Fo')
            .then((result) => {
                console.log(result.text)

                if (form.current) {
                    form.current.reset()
                }
            }, (error) => {
                console.log(error.text)
            })

    }

    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
                <S.StyledForm  autoComplete="off" ref={form} onSubmit={sendEmail} >
                    <S.StyledLabel htmlFor="name" aria-labelledby="name">Your Name </S.StyledLabel>
                    <S.Field required id={'name'}
                             type={'text'} placeholder={'Name'}
                             title={'Write down your name'} aria-placeholder={'Name'}
                             name={'user_name'}
                    />

                    <S.StyledLabel htmlFor="email" aria-labelledby="email">Your Email </S.StyledLabel>
                    <S.Field required id={'email'}
                             type={'email'} placeholder={'Email'}
                             title={'Write down your email'} aria-placeholder={'Email'}
                             name={'email'}/>

                    <S.StyledLabel htmlFor="subject" aria-labelledby="subject">Subject theme: </S.StyledLabel>
                    <S.Field required id={'subject'}
                             type={'text'} placeholder={'Subject'}
                             title={'Write down your Subject'} aria-placeholder={'Subject'}
                             name={'subject'}/>

                    <S.Field required as={'textarea'}
                             placeholder={'Your message starts with…'}
                             title={'Write down message'} aria-placeholder={'Your message starts with…'}
                             name={'message'}/>

                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
                <Slogan/>
            </Container>
        </S.Contact>
    )

}



