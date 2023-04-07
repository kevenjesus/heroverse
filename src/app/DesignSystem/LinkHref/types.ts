import { ReactNode } from "react";

export interface LinkHrefProps {
    children: ReactNode
    href: () => void
}