import { ReactNode } from "react"

export interface WrapperTypes {
    type: 'error' | 'success'
}

export interface AlertProps extends WrapperTypes {
    children: ReactNode
}