import { colorsType } from "@/app/styles/types"

export interface CardProps {
    title: string
    category: {
        id: number
        label: string
        variant: colorsType
    }
    actions?: {
        onEdit: () => void
        onDelete: () => void
    }
}