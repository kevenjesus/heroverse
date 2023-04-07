import { colors, fontSizes } from '@/app/styles/guide'
import styled from 'styled-components'

export const TextFieldInput = styled.input`
    width: 100%;
    height: 45px;
    background: #fff;
    border: 2px solid ${colors.black};
    padding: 0 20px;
    font-size: ${fontSizes.regular};
    color: ${colors.black};
    display: flex;
    align-items: center;
`