import { breakpoints, fontSizes } from "@/app/styles/guide";
import styled from "styled-components";
import { WrapperMenuProps } from "./types";

export const Header = styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Logo = styled.img`
    width: 165px;
    cursor: pointer;
`

export const MenuMobile = styled.img`
    width: 38px;
    height: 38px;
    cursor: pointer;
    @media (min-width: ${breakpoints.lg}) {
        display: none;
    }
`

export const MenuWrapper = styled.div<WrapperMenuProps>`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #fff;
    width: 80%;
    height: 100%;
    position: fixed;
    padding: 20px;
    right: ${({active}) => active ? '0' : '-150%'};
    top: 0;
    z-index: 6;
    transition: right .3s;
    p,a {
        font-size: ${fontSizes.heading3};
    }
    @media (min-width: ${breakpoints.sm}) {
        max-width: 365px;
    }
    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        position: initial;
        z-index: 0;
        right: 0;
        p,a {
        font-size: ${fontSizes.heading2};
    }
    }
`
export const CloseMenu = styled.button`
    margin-left: auto;
    @media (min-width: ${breakpoints.lg}) {
        display: none;
    }
`