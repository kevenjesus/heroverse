import { colors } from '@/app/styles/guide'
import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    border: 1px solid ${colors.black};
    border-collapse: collapse;
    thead, tbody {
        width: 100%;
    }
    th {
        text-align: left;
    }
    th, td {
        width: 100%;
        padding: 20px;
        border: 1px solid ${colors.black};
        border-collapse: collapse;
    }
    td {
        vertical-align: middle;
    }
`

export const WrapperActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`