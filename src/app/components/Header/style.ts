import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Logo = styled.img`
    width: 165px;
`

export const MenuMobile = styled.img`
    width: 38px;
    height: 38px;
    cursor: pointer;
`