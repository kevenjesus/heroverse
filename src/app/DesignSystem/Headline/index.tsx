import * as S from './style'
import { HeadlineProps } from './types'

export default function Headline({children, as, ...rest}: HeadlineProps) {
    return <S.HeadlineItem type={as} as={as} {...rest}>{children}</S.HeadlineItem>
}