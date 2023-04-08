import { AlignType, colorsType, fontSizeType, weightTye } from "@/app/styles/types";
import { ReactNode } from "react";

export interface TypographicProps {
    children: ReactNode
    size?: fontSizeType
    weight?: weightTye
    color?: colorsType
    align?: AlignType
}