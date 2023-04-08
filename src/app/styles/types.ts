export type colorsType = 'primary' | 'secondary' | 'darkBlue' | 'lightBlue' | 'black' | 'white'
export type fontSizeType = '12px' | '14px' | '18px' | '20px' | '25px' | '30px'
export type weightTye = '300' | '400' | '700'
export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4'
export type VariantsButton = 'primary' | 'secondary'
export type AlignType = 'left' | 'center' | 'right'

export interface FontStyleType {
    weight?: weightTye
    size?: fontSizeType
    color?: colorsType
    align?: AlignType
}

export interface FontStyleHeadlineTYpe {
    type: HeadlineType
    weight?: weightTye
    color?: colorsType
    align?: AlignType
}

export interface ButtonTypes {
    variant: VariantsButton
    loading?: boolean
}