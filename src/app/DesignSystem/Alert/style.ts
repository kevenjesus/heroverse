import styled from 'styled-components'
import { WrapperTypes } from './types'
import { colors } from '@/app/styles/guide'

export const Wrapper = styled.div<WrapperTypes>`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0 20px;
    background: ${({type}) => type === 'error' ? colors.alertError : colors.alertSuccess};
`