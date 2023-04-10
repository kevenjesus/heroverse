import { breakpoints } from '@/app/styles/guide';
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
    padding: 60px 16px;
    @media (min-width: ${breakpoints.sm}) {
        width: 365px;
        margin-left: auto;
        margin-right: auto;
    }
`
export const Logo = styled.img`
    display: block;
    margin: 0 auto;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 23px;
    button {
        margin-top: 13px;
    }
`