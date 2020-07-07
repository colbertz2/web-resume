import Typography from "typography"
import typoTheme from "typography-theme-ocean-beach"

typoTheme.baseFontSize = "14pt"
const typography = new Typography(typoTheme)

export const { scale, rhythm, options } = typography
export default typography
