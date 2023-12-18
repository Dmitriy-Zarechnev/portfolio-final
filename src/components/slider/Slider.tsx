import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import '../../styles/slider.css'
import {Sl} from './Slider_Styles'
import hobbyFirst from '..//../assets/images/Hobby_1.webp'
import hobbySecond from '..//../assets/images/Hobby_2.webp'
import hobbyThird from '..//../assets/images/hobby_3.webp'
import {Slide} from './slide/Slide'


const hobbyData = [
    {
        title: 'Badminton',
        src: hobbyFirst,
        altText: 'Badminton',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.'
    },
    {
        title: 'Reading',
        src: hobbySecond,
        altText: 'Reading',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.'
    },
    {
        title: 'Quiz',
        src: hobbyThird,
        altText: 'Quiz',
        text: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.'
    }

]

const items = [
    <Slide title={hobbyData[0].title} src={hobbyData[0].src} altText={hobbyData[0].altText} text={hobbyData[0].text}/>,
    <Slide title={hobbyData[1].title} src={hobbyData[1].src} altText={hobbyData[1].altText} text={hobbyData[1].text}/>,
    <Slide title={hobbyData[2].title} src={hobbyData[2].src} altText={hobbyData[2].altText} text={hobbyData[2].text}/>
]

export const Slider: React.FC = () => {
    return (
        <Sl.Slider>
            <AliceCarousel mouseTracking items={items}/>
        </Sl.Slider>
    )
}





