import { colorsType } from "@/app/styles/types"

export interface ACtionsProps {
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export interface CardProps {
    id: number
    title: string
    description: string
    category: {
        label: string
        variant: colorsType
    }
    actions?: ACtionsProps
    
}