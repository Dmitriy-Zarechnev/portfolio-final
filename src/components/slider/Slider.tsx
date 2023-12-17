import React from 'react'
import hobbyFirst from '..//../assets/images/Hobby_1.webp'
import {Container} from '../Container'
import {S} from '../../layout/sections/works/Works_Styles'
import {Sl} from './Slider_Styles'

const hobbyData = [
    {
        title: 'Badminton',
        src: hobbyFirst,
        altText: 'Badminton',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.'
    }
]


export const Slider:React.FC = () => {
    return (
        <Sl.Slider>
            <Container>

                <Sl.Slide>
                    <S.ProjectTitle>{hobbyData[0].title}</S.ProjectTitle>
                    <Sl.Image src={hobbyData[0].src} alt={hobbyData[0].altText}/>
                    <S.ProjectText>
                        {hobbyData[0].text}
                    </S.ProjectText>
                </Sl.Slide>

                <Sl.Pagination>
                    <span> </span>
                    <span className={'active'}> </span>
                    <span> </span>
                </Sl.Pagination>
            </Container>
        </Sl.Slider>
    )
}

