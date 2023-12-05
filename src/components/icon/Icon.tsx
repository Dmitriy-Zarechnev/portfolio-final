import React from 'react'
import iconsSprite from '../../assets/images/sprite_svg.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '70'} height={props.height || '70'} viewBox={props.viewBox || '0 0 70 70'} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}

