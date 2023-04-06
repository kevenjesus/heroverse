import { colors, fontSizes, weightValues } from '@/app/styles/guide'
import { ButtonTypes } from '@/app/styles/types'
import styled from 'styled-components'

export const ButtonItem = styled.button<ButtonTypes>`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    gap: 10px;
    background: ${({variant}) => variant ? colors[variant] : colors.primary};
    color: #fff;
    font-size: ${fontSizes.regular};
    font-weight: ${weightValues.bold};
    &:hover {
        background: ${({variant}) => variant === 'primary' ? colors.primaryHover : colors.secondaryHover};
    }
`