import React from 'react'
import {FlexWrapper} from '../../components/FlexWrapper'
import {iconsType, SocialList} from '../../components/socialList/SocialList'
import {Container} from '../../components/Container'
import {S} from './Footer_Styles'


const iconsObj: Array<iconsType> = [
    {
        id: 'gitHubSocialLink',
        size: '30',
        viewBox: '0 0 30 30',
        link: 'https://github.com/Dmitriy-Zarechnev',
        aria: 'Link to my gitHub'
    },
    {
        id: 'gmailSocialLink',
        size: '30',
        viewBox: '-0.5 0 48 48',
        link: 'mailto:zarechnev5021@gmail.com',
        aria: 'Link to email'
    },
    {
        id: 'whatsAppSocialLink',
        size: '30',
        viewBox: '0 0 32 32',
        link: 'https://wa.me/79208743215',
        aria: 'Link to my WhatsApp'
    },
    {
        id: 'telegramSocialLink',
        size: '30',
        viewBox: '2 2 20 20',
        link: 'https://t.me/ZarDmit',
        aria: 'Link to my Telegram'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-between'} align={'center'} gap={'10px'}>
                    <S.Title>Контакты</S.Title>
                    <S.PhoneMail>+7 920-874-3215</S.PhoneMail>
                    <S.PhoneMail>zarechnev5021@gmail.com</S.PhoneMail>

                    <FlexWrapper gap={'20px'} align={'center'}>
                        <SocialList iconsInfo={iconsObj}/>
                    </FlexWrapper>

                    <S.Copyright>
                        Designed and built by
                        <S.SmallSpan> Zarechnev Dmitriy </S.SmallSpan>
                        with
                        <S.SmallSpan> Love </S.SmallSpan>
                        &
                        <S.SmallSpan> Tea</S.SmallSpan>
                    </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}
