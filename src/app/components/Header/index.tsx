'use client'
import * as S from './style'
import * as Guide from '../../styles/guide'

export default function Header() {
    return (
        <S.Header>
            <Guide.Container>
                <S.Logo src='/HeroVerse.png' alt="Hero verse" />
                <S.MenuMobile src='/menu.png' alt="Abrir menu" />
            </Guide.Container>
        </S.Header>
    )
}