import { breakpoints } from '@/app/styles/guide'
import styled from 'styled-components'

export const FilterMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 
        'filterCategory'
        'filterSearch'
        'filterStatus'
        'btnNewHero';
    gap: 20px;
    @media (min-width: ${breakpoints.lg}) {
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas: 
            'filterCategory filterSearch filterSearch filterStatus btnNewHero btnNewHero'; 
    }
`

export const FilterCategory = styled.div`
    grid-area: filterCategory;
`

export const FilterSearch = styled.div`
    grid-area: filterSearch;
`

export const FilterStatus = styled.div`
    grid-area: filterStatus;
`

export const BtnNewHero = styled.div`
    grid-area: btnNewHero;
    margin-top: 13px;
    @media (min-width: ${breakpoints.lg}) {
        margin: 0;
    }

`

export const ResultsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    @media (min-width: ${breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${breakpoints.lg}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: ${breakpoints.xl}) {
        grid-template-columns: repeat(4, 1fr);
    }
`