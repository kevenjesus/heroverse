import Headline from '../Headline'
import Label from '../Label'
import Typographic from '../Typographic'
import * as S from './style'
import { CardProps } from './types'

export default function Card({id, title, description, category, actions}: CardProps) {
    return (
        <S.CardItem>
            <Headline as="h4">{title}</Headline>
            <Typographic>{description}</Typographic>
            <S.CardFooter>
                <Label variant={category.variant}>{category.label}</Label>
                {
                    actions && (
                        <S.Actions>
                            <button onClick={() => actions.onEdit()}>
                                <img src="/edit.png" alt="Editar" />
                            </button>
                            <button onClick={() => actions.onDelete()}>
                                <img src="/trash.png" alt="Excluir" />
                            </button>
                        </S.Actions>
                    )
                }
            </S.CardFooter>
        </S.CardItem>
    )
}