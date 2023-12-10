import React from 'react'
import iconsSprite from '../../assets/images/sprite_svg.svg'


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '120'} height={props.height || '120'} viewBox={props.viewBox || '0 0 120 120'} fill={props.fill || 'white'} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}





