import React from 'react'
import {Sl} from '../Slider_Styles'
import {S} from '../../../layout/sections/works/Works_Styles'

 type SlidePropsType = {
    title: string,
    src: string,
    altText: string,
    text: string,
}

export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
    return (
        <Sl.Slide>
            <S.ProjectTitle>{props.title}</S.ProjectTitle>
            <Sl.Image src={props.src} alt={props.altText}/>
            <S.ProjectText>
                {props.text}
            </S.ProjectText>
        </Sl.Slide>)
}