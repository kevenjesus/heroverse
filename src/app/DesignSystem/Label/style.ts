import styled from 'styled-components'
import { LabelItemProps } from './types'
import { colors } from '@/app/styles/guide'

export const Wrapper = styled.div`
    height: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
`

export const LabelBox = styled.div<LabelItemProps>`
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: ${({variant}) => colors[variant]};
`