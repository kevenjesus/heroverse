import styled, { createGlobalStyle, css } from 'styled-components'
import { FontStyleType } from './types'

export const breakpoints = {
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px'
}

export const colors = {
    primary: '#219ebc',
    primaryHover: '#1F8097',
    secondary: '#fb8500',
    secondaryHover: '#D57100',
    darkBlue: '#023047',
    lightBlue: '#8ecae6',
    black: '#3E3838',
    white: '#fff',
    alertError: '#EB5757',
    alertSuccess: '#6FCF97',
}

export const fontSizes = {
    heading1: '30px',
    heading2: '25px',
    heading3: '20px',
    heading4: '18px',
    small: '12px',
    regular: '14px'
}

export const weightValues = {
    light: '300',
    regular: '400',
    bold: '700'
}



export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
    *:after,
    *:before,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, 
    body {
        font-family: 'Montserrat', sans-serif;
        line-height: 150%;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    hr {
        margin: 30px 0;
    }
`

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

export const Container = styled.div`
    width: 100%;
    padding: 0 16px;
`