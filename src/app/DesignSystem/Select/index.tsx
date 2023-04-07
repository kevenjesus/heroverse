import { useCallback, useEffect, useRef, useState } from 'react'
import Typographic from '../Typographic'
import * as S from './style'
import { OptionType, SelectProps } from './types'

export default function Select({options, value, placeholder = 'Selecione', onChange}: SelectProps) {
    const [isOpen, setOpen] = useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const handleChange = useCallback((item: OptionType) => {
        onChange(item)
        setOpen(false)
    }, [])

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleMouseDown)
        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])
    return (
        <S.Wrapper ref={wrapperRef}>
            <S.SelectField onClick={() => setOpen(!isOpen)}>
                <Typographic>{value ? value : placeholder}</Typographic>
                <img width={13} height={13} src='/arrow-down.png' alt="Selecionar" />
            </S.SelectField>
            {
                isOpen && (
                <>
                    <S.Overlay role="banner" aria-label='overlay' onClick={() => setOpen(false)} />
                    <S.SelectBox>
                        <S.SelectBoxContent>
                            {
                                options.map(option => (
                                    <S.SelectItem onClick={() => handleChange(option)} key={option.value}>{option.label}</S.SelectItem>
                                ))
                            }
                        </S.SelectBoxContent>
                    </S.SelectBox>
                </>
                )
            }
        </S.Wrapper>
    )
}