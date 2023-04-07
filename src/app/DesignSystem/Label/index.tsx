import Typographic from '../Typographic'
import * as S from './style'
import { LabelProps } from './types'

export default function Label({children, variant}: LabelProps) {
    return (
        <S.Wrapper>
            <S.LabelBox variant={variant} />
            <Typographic>{children}</Typographic>
        </S.Wrapper>
    )
}