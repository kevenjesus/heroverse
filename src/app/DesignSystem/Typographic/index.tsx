import * as S from './style'
import { TypographicProps } from './types'

export default function Typographic({children, ...rest}: TypographicProps) {
    return (
        <S.TypographicItem {...rest}>{children}</S.TypographicItem>
    )
}