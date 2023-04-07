import styled from 'styled-components'
import Typographic from '../Typographic'
import { colors, fontSizes } from '@/app/styles/guide'

export const LinkHrefItem = styled.span`
    font-size: ${fontSizes.regular};
    color: ${colors.primary};
    text-decoration: underline;
    cursor: pointer;
`