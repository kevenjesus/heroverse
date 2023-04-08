import { colorsType } from "@/app/styles/types"

export interface CardProps {
    id: number
    title: string
    description: string
    category: {
        label: string
        variant: colorsType
    }
    actions?: {
        onEdit: () => void
        onDelete: () => void
    }
}