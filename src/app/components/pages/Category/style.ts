import { breakpoints } from '@/app/styles/guide'
import styled from 'styled-components'

export const Menu = styled.div`
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${breakpoints.lg}) {
        width: 300px;
    }
`