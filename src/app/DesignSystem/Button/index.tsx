'use client'

import * as S from './style'
import { ButtonProps } from './types'

export default function Button({children, loading, variant, onClick}: ButtonProps) {
    return (
        <S.ButtonItem variant={variant} onClick={onClick}>
            {
                loading ? (
                    <>
                        <img width={20} src="/loading.svg" alt='aguarde' />
                        <span>Aguarde...</span>
                    </>
                ) : (
                    <span>{children}</span>
                )
            }
        </S.ButtonItem>
    )
}