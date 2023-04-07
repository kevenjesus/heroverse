import * as S from './style'
import { LinkHrefProps } from './types'

export default function LinkHref({children, href}: LinkHrefProps) {
    return (
        <S.LinkHrefItem onClick={href}>{children}</S.LinkHrefItem>
    )
}