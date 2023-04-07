import styled from 'styled-components'

export const CardItem = styled.div`
    background: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    &:hover {
        filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.25));
    }
`

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Actions = styled.div`
    display: flex;
    gap: 10px;
`