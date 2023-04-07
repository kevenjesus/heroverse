import Label from '../Label'
import * as S from './style'
import { TextFieldInputProps } from './types'

export default function TextField(props: TextFieldInputProps) {
    return (
        <S.TextFieldInput role="textbox" {...props} />
    )
}