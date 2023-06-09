export interface OptionType {
    label: string
    value: string | number | boolean
}

export interface SelectProps {
    value?: string | number | null | undefined
    placeholder?: string
    onChange: (item: OptionType) => void
    options: OptionType[]
}