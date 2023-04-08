'use client'
import * as S from './style'
import * as Guide from '../../styles/guide'
import Link from 'next/link'
import Typographic from '@/app/DesignSystem/Typographic'
import { useCallback, useState } from 'react'

export default function Header() {
    const [openMenu, setMenu] = useState(false)
    
    const handleMenu = useCallback(() => {
        setMenu(!openMenu)
    }, [openMenu])

    const logoff = useCallback(() => {
        sessionStorage.removeItem("isLoggin")
        window.location.href="/login"
    }, [])
    return (
        <S.Header>
            <Guide.Container>
                <S.Logo src='/HeroVerse.png' alt="Hero verse" />
                <S.MenuMobile onClick={handleMenu} src='/menu.png' alt="Abrir menu" />
            </Guide.Container>
            {openMenu && <Guide.Overlay onClick={handleMenu} />}
            <S.MenuWrapper active={openMenu}>
                <S.CloseMenu onClick={handleMenu} role='button' aria-label='close-menu'>
                    <img src='/cancel.png' alt="fechar" />
                </S.CloseMenu>
                <Link href="/">
                    <Typographic>Herois</Typographic>
                </Link>
                <Link href="/category">
                    <Typographic>Categorias</Typographic>
                </Link>
                <button onClick={logoff}>
                    <Typographic>
                        Sair
                    </Typographic>
                </button>
            </S.MenuWrapper>
        </S.Header>
    )
}