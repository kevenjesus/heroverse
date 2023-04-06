import styled, { createGlobalStyle, css } from 'styled-components'
import { ButtonTypes, FontStyleHeadlineTYpe, FontStyleType } from './types'


export const colors = {
    primary: '#219ebc',
    primaryHover: '#1F8097',
    secondary: '#fb8500',
    secondaryHover: '#D57100',
    darkBlue: '#023047',
    lightBlue: '#8ecae6',
    black: '#3E3838'
}

export const fontSizes = {
    heading1: '30px',
    heading2: '25px',
    heading3: '20px',
    heading4: '18px',
    small: '12px',
    regular: '14px',
    heading1Lg: '35px',
    heading2Lg: '30px',
    heading3Lg: '25px',
    heading4Lg: '20px',
    smallLg: '14px',
    regularLg: '16px',
}

export const weightValues = {
    light: '300',
    regular: '400',
    bold: '700'
}

export const HeadlineTypes = {
    h1: fontSizes.heading1,
    h2: fontSizes.heading2,
    h3: fontSizes.heading3,
    h4: fontSizes.heading4
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

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`

export const LinkHref = styled.button<FontStyleType>`
    font-size: ${({size}) => size ? size : fontSizes.regular};
    font-weight: ${({weight}) => weight ? weight : weightValues.regular};
    color: ${({color}) => color ? color : colors.primary};
    text-decoration: underline;
`

export const Headline = styled.h1<FontStyleHeadlineTYpe>`
    line-height: 175%;
    color: ${({color}) => color ? color : colors.primary};
    font-weight: ${({weight}) => weight ? weight : weightValues.bold};
    font-size: ${({type}) => type ? HeadlineTypes[type] : fontSizes.heading1};
`

export const Container = styled.div`
    font-size: 90px;
`