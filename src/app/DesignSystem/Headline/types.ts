import { fontSizes } from "@/app/styles/guide"
import { HeadlineType, colorsType, fontSizeType, weightTye } from "@/app/styles/types"
import { ReactNode } from "react"

export const HeadlineTypes = {
    h1: fontSizes.heading1,
    h2: fontSizes.heading2,
    h3: fontSizes.heading3,
    h4: fontSizes.heading4
}

export interface HeadlineProps {
    children: ReactNode
    size?: fontSizeType
    weight?: weightTye
    color?: colorsType
    as: HeadlineType
}