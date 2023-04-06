import { useCallback, useEffect, useState } from 'react'
import Headline from '../Headline'
import * as S from './style'
import { ModalProps } from './types'

export default function Modal({children, title, open, onClose, onClosed, onOpened}: ModalProps) {
    const [isClosed, setClosed] = useState(false)

    const onClosedModal = useCallback(() => {
        onClose()
        setClosed(true)
    }, [])

    useEffect(() => {
        if(open) {
            setClosed(false)
            onOpened && onOpened()
        }
    }, [open])
    
    useEffect(() => {
        if(isClosed) {
            onClosed && onClosed()
        }
    }, [isClosed])

    if(!open) {
        return <></>
    }
    return (
        <>
            <S.Overlay />
            <S.ModalItem>
                <S.Heading>
                    <Headline as="h3">{title}</Headline>
                    <button onClick={onClosedModal} role='button' aria-label='close-modal'>
                        <img src='/cancel.png' alt="fechar" />
                    </button>
                </S.Heading>
                {children}
            </S.ModalItem>
        </>
    )
}