'use client'
import * as S from './style'
import * as Guide from '../../styles/guide'

import Typographic from '@/app/DesignSystem/Typographic'
import { useCallback, useState } from 'react'

export default function Header() {
    const [openMenu, setMenu] = useState(false)
    
    const handleMenu = useCallback(() => {
        setMenu(!openMenu)
    }, [openMenu])

    const navigation = useCallback((link: string) => {
        window.location.href=link
    }, [])

    const logoff = useCallback(() => {
        sessionStorage.removeItem("isLoggin")
        window.location.href="/login"
    }, [])
    return (
        <S.Header>
            <Guide.Container>
                <S.Logo onClick={() => navigation('/')} src='/HeroVerse.png' alt="Hero verse" />
                <S.MenuMobile onClick={handleMenu} src='/menu.png' alt="Abrir menu" />
            
            {openMenu && <Guide.Overlay onClick={handleMenu} />}
            <S.MenuWrapper active={openMenu}>
                <S.CloseMenu onClick={handleMenu} role='button' aria-label='close-menu'>
                    <img src='/cancel.png' alt="fechar" />
                </S.CloseMenu>
                <button onClick={() => navigation('/')}>
                    <Typographic>Herois</Typographic>
                </button>

                <button onClick={() => navigation('/category')}>
                <Typographic>Categorias</Typographic>
                </button>
            
                <button onClick={logoff}>
                    <Typographic>
                        Sair
                    </Typographic>
                </button>
            </S.MenuWrapper>
            </Guide.Container>
        </S.Header>
    )
}