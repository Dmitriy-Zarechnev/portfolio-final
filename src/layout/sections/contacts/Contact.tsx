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

    const form = useRef<ElementRef<'form'>>(null)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.current) return

        emailjs.sendForm('service_1y80rfp', 'template_612lbth', form.current, 'BG6Lud8Z8dhMzh5Fo')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

    }
    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.StyledLabel htmlFor="name" aria-labelledby="name">Your Name </S.StyledLabel>
                    <S.Field id={'name'} type={'text'} placeholder={'Name'} title={'Write down your name'} aria-placeholder={'Name'}/>
                    <S.StyledLabel htmlFor="subject" aria-labelledby="subject">Your subject theme: </S.StyledLabel>
                    <S.Field id={'subject'} type={'text'} placeholder={'Subject'} title={'Write down your Subject'} aria-placeholder={'Subject'}/>
                    <S.Field as={'textarea'} placeholder={'Your message starts with…'}  title={'Write down message'} aria-placeholder={'Your message starts with…'}/>
                    <Button type={'submit'}>Send Message</Button>
                </S.StyledForm>
                <Slogan/>
            </Container>
        </S.Contact>
    )

}



