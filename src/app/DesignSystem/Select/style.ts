import { breakpoints, colors } from '@/app/styles/guide'
import styled from  'styled-components'

export const Wrapper = styled.div`
    position: relative;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 5;
    background: rgba(0,0,0,0.7);
    @media (min-width: ${breakpoints.lg}) {
        display: none;
    }
`

export const SelectField = styled.div`
    width: 100%;
    height: 60px;
    background: #fff;
    border: 2px solid ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
`

export const SelectBox = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 6;
    padding: 20px;
    background: #fff;
    @media (min-width: ${breakpoints.lg}) {
        position: absolute;
        top: 50px;
        padding: 0;
    }
`

export const SelectBoxContent = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #fff;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(62, 56, 56, 0.2);
    }
    @media (min-width: ${breakpoints.lg}) {
        height: auto;
        overflow-y: initial;
        border: 2px solid ${colors.black};
    }
`

export const SelectItem = styled.div`
    width: 100%;
    height: 60px;
    background: #fff
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    &:hover {
        background: rgba(142, 202, 230, 0.2);;
    }
`
