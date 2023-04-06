import { colors, fontSizes, weightValues } from '@/app/styles/guide'
import { FontStyleType } from '@/app/styles/types'
import styled from 'styled-components'

export const TypographicItem = styled.p<FontStyleType>`
    font-size: ${({size}) => size ? size : fontSizes.regular};
    font-weight: ${({weight}) => weight ? weight : weightValues.regular};
    color: ${({color}) => color ? color : colors.additional.black};
`