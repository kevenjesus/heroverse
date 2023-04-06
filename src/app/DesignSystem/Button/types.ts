import { VariantsButton } from "@/app/styles/types";
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
    loading?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    variant: VariantsButton
}