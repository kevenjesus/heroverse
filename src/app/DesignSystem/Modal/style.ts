import { breakpoints } from '@/app/styles/guide'
import styled from 'styled-components'


export const ModalItem = styled.div`
    width: 95%;
    padding: 20px;
    background: #fff;
    position: fixed;
    top: 20%;
    left: 2.5%;
    z-index: 6;
    @media (min-width: ${breakpoints.sm}) {
        width: 450px;
        left: 50%;
        margin-left: -225px;
    }
`

export const Heading = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        margin-left: auto;
    }
`