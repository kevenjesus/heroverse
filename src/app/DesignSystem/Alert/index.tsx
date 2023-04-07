import Typographic from '../Typographic'
import * as S from './style'
import { AlertProps } from './types'

export default function Alert({children, type}: AlertProps) {
    return (
        <S.Wrapper type={type}>
             <img width={28} src={type === 'error' ? '/warning.png' : '/checked.png'} alt={`${children}`} />
            <Typographic color='white' weight='700'>{children}</Typographic>
        </S.Wrapper>
    )
}