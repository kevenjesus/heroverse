export type colorsType = 'primary' | 'secondary' | 'additional.darkBlue' | 'additional.lightBlue' | 'additional.black'
export type fontSizeType = '12px' | '14px' | '18px' | '20px' | '25px' | '30px'
export type weightTye = '300' | '400' | '700'
export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4'
export type VariantsButton = 'primary' | 'secondary'

export interface FontStyleType {
    weight?: weightTye
    size?: fontSizeType
    color?: colorsType
}

export interface FontStyleHeadlineTYpe {
    type: HeadlineType
    weight?: weightTye
    color?: colorsType
}

export interface ButtonTypes {
    variant: VariantsButton
    loading?: boolean
}