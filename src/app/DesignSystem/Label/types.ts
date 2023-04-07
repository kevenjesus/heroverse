import { colorsType } from "@/app/styles/types";
import { ReactNode } from "react";


export interface LabelItemProps {
    variant: colorsType
}

export interface LabelProps extends LabelItemProps {
    children: ReactNode
}

