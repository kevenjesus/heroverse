import { colors, fontSizes, weightValues } from '@/app/styles/guide'
import { FontStyleHeadlineTYpe } from '@/app/styles/types'
import styled from 'styled-components'
import { HeadlineTypes } from './types'

export const HeadlineItem = styled.h1<FontStyleHeadlineTYpe>`
    line-height: 175%;
    color: ${({color}) => color ? color : colors.black};
    font-weight: ${({weight}) => weight ? weight : weightValues.bold};
    font-size: ${({type}) => type ? HeadlineTypes[type] : fontSizes.heading1};
`