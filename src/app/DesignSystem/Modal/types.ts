import { ReactNode } from "react";

export interface ModalProps {
    children: ReactNode
    title?: string
    open: boolean
    onClose: () => void
    onClosed?: () => void
    onOpened?: () => void
}