import { FormCategoryProps } from './types'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import useFetch from '@/app/hook/useFetch'
import { MessageTypes } from '@/app/types'
import { CategoryTypes } from '../pages/Home/types'
import TextField from '@/app/DesignSystem/TextField'
import Button from '@/app/DesignSystem/Button'
import Alert from '@/app/DesignSystem/Alert'
import * as S from './style'

export default function FormCategory({category, isEdit, onSaved}: FormCategoryProps) {
    const [name, setName] = useState("")
    const { loading, createCategory, changeCategory } = useFetch()
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
        if(!name) {
            setMessage({type: 'error' , message: 'Por favor. Informe o campo nome'})
            return false
        }
        return true
    }, [name, setMessage])

    const submiting = useCallback((event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!validFields()) {
            return;
        }
                   
        if(isEdit && category) {
            const data: CategoryTypes = {
                Id: category.Id,
                Name: name
            } 
            changeCategory(data, () => handleSuccess('Categoria atualizado com sucesso!'), handleError)
        }else {
            createCategory({Name: name}, () => handleSuccess('Categoria cadastrado com sucesso!'), handleError)
        }

    }, [name, isEdit, category])

    useEffect(() => {
        if(isEdit && category) {
            setName(category.Name)
        }
    }, [category, isEdit])


    return (
        <S.Form onSubmit={submiting}>
            <TextField type="text" name="name" value={name} onChange={handleName} placeholder='Digite o nome da categoria' />
            <Button loading={loading} variant="primary">{isEdit ? 'Salvar alterações' : 'Cadastrar categoria'}</Button>
            {
                message && (
                    <Alert type={message.type}>{message.message}</Alert>
                )
            }
        </S.Form>  
    )
}