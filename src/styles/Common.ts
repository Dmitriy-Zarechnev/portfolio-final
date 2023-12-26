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