import { ChangeEvent, EventHandler } from "react"

export interface TextFieldInputProps {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
    type: string
    placeholder?: string
}