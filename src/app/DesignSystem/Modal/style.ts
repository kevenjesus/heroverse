import { breakpoints } from '@/app/styles/guide'
import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,.7);
    z-index: 5;
    overflow: hidden;
`

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