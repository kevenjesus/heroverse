import Select from '@/app/DesignSystem/Select'
import * as S from './style'
import { FormHeroProps } from './types'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { OptionType } from '@/app/DesignSystem/Select/types'
import { statusData } from '../pages/Home'
import TextField from '@/app/DesignSystem/TextField'
import Button from '@/app/DesignSystem/Button'
import { addHero } from '@/app/services/hero'
import { heroData } from '@/app/services/types'
import useFetch from '@/app/hook/useFetch'
import { MessageTypes } from '@/app/types'
import Alert from '@/app/DesignSystem/Alert'

export default function FormHero({hero, isEdit, categoryList, onSaved}: FormHeroProps) {
    const [categorySelected, setCategory] = useState<OptionType | null>(null)
    const [name, setName] = useState("")
    const [status, setStatus] = useState<OptionType | null>(null)
    const { createHero, changeHero } = useFetch()
    const [message, setMessage] = useState<MessageTypes | null>(null)

    const handleName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }, [])

    const handleSuccess = useCallback((message: string) => {
        setMessage({type: 'success', message: message})
        setTimeout(onSaved, 1500)
    }, [])

    const handleError = useCallback(() => {
        setMessage({type: 'error', message: 'Ops! Erro inesperado. Tente novamente'})
    }, [])

    const validFields = useCallback(() => {
        if(!categorySelected) {
            setMessage({type: 'error' , message: 'Por favor. Escolha uma categoria'})
            return false
        }
        else if(!name) {
            setMessage({type: 'error' , message: 'Por favor. Informe o campo nome'})
            return false
        }else if(status === null || status.value === 0) {
            setMessage({type: 'error' , message: 'Por favor. Escolha defina um status'})
            return false
        }else {
            setMessage(null)
            return true
        }
    }, [name, categorySelected, status, setMessage])

    const submiting = useCallback(async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!validFields()) {
            return;
        }
        if(categorySelected && status) {
            const data: heroData = {
                Id: hero?.Id,
                Name: name,
                CategoryId: Number(categorySelected.value),
                Active: Boolean(status.value)
            }
            if(isEdit) {
                changeHero(data, () => handleSuccess('Heroi atualizado com sucesso!'), handleError)
            }else {
                createHero(data, () => handleSuccess('Heroi cadastrado com sucesso!'), handleError)
            }
        }
       
    }, [name, categorySelected, status, isEdit])

    useEffect(() => {
        if(isEdit && hero) {
            const findCategory = categoryList.find(category => category.value === hero.Category.Id)
            const finDstatus = statusData.find(status => status.value === hero.Active)
            if(findCategory && finDstatus) {
                setCategory(findCategory)
                setName(hero.Name)
                setStatus(finDstatus)
            }
        }
    }, [hero, isEdit])


    return (
        <S.Form onSubmit={submiting}>
            <Select key='formCategory' options={categoryList} value={categorySelected?.label} onChange={(item) => setCategory(item)} placeholder='Selecione a categoria' />
            <TextField type="text" name="name" value={name} onChange={handleName} placeholder='Digite o nome do heroi' />
            <Select key='formStatus' options={statusData} value={status?.label} onChange={(item) => setStatus(item)} placeholder='Defina um status' />
            <Button variant="primary">{isEdit ? 'Salvar alterações' : 'Cadastrar heroi'}</Button>
            {
                message && (
                    <Alert type={message.type}>{message.message}</Alert>
                )
            }
        </S.Form>  
    )
}