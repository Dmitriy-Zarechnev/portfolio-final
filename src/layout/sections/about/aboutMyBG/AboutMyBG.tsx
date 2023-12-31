import React from 'react'
import {S} from '../About_Styles'

export type background = {
    text: string,
    place: string,
    date: string
}

export const AboutMyBG: React.FC<{ infoAboutMe: background[] }> = (props: { infoAboutMe: background[] }) => {
    return (
        <S.AboutBG>
            {props.infoAboutMe.map((el: background, index: number) => {
                return (
                    <S.MyBackground key={index}>
                        <S.MyBackgroundText> {el.text}</S.MyBackgroundText>
                        <S.Place>{el.place}<S.Date> {el.date}</S.Date></S.Place>
                    </S.MyBackground>)
            })}
        </S.AboutBG>
    )
}






