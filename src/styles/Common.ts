import {theme} from './theme'

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fontM?: number
    fontD?: number
}


export const font = ({family, weight, color, lineHeight, fontM, fontD}: FontPropsType) => `
    font-family:${family || 'Poppins'};
    font-weight:${weight || 400};
    color:${color || theme.colors.primaryTextColor};
    line-height:${lineHeight || 1.4};
    font-size:calc( (100vw - 360px)/(1600 - 360) * (${fontD} - ${fontM}) + ${fontM}px);
 `

type respFontType = {
    PxMax: number
    PxMin: number
    Vmax?: number
    Vmin?: number
}


export const respFont = ({PxMax, PxMin, Vmax, Vmin}: respFontType) => `
font-size: ${respFontFnc({PxMax, PxMin, Vmax, Vmin})}
`

export const respFontFnc = ({PxMax, PxMin, Vmax = 1190, Vmin = 360}: respFontType) => {
    const variablePart = (PxMax - PxMin) / (Vmax - Vmin)
    const rem = parseFloat(((PxMax - Vmax * variablePart) / 16).toFixed(3))
    const vw = parseFloat((100 * variablePart).toFixed(2))

    return `clamp(${PxMin}px, ${rem}rem + ${vw}vw, ${PxMax}px)`
}