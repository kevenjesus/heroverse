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
`

export const ResultsCards = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
`