'use client'

import TextField from '@/app/DesignSystem/TextField'
import * as S from './style'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Button from '@/app/DesignSystem/Button'
import Alert from '@/app/DesignSystem/Alert'
import { MessageTypes } from '@/app/types'
import { fetchLogin } from '@/app/services/login'
import { useRouter } from 'next/navigation'
import useCheckIsLoggin from '@/app/hook/useCheckIsLoggin'
import Footer from '../../Footer'

export default function LoginPage() {
    const [fieldLogin, setLogin] = useState("")
    const [fieldPassword, setPassword] = useState("")
    const [message, setMessage] = useState<MessageTypes | null>(null)
    const { mount, setMount, checkisLoggin } = useCheckIsLoggin()
    const route = useRouter()

    const handleLogin = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }, [])

    const handlePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }, [])

    const clearPassword = useCallback(() => {
        setPassword("")
    }, [])

    const validFields = useCallback(() => {
        if(!fieldLogin) {
            setMessage({type: 'error' , message: 'Por favor. Informe o campo login'})
            return false
        }else if(!fieldPassword) {
            setMessage({type: 'error' , message: 'Por favor. Informe o campo senha'})
            return false
        }else {
            setMessage(null)
            return true
        }
    }, [fieldLogin, fieldPassword, setMessage])

    const submiting = useCallback((event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(validFields()) {
            const isLoggin = fetchLogin(fieldLogin, fieldPassword)
            if(isLoggin) {
                setMessage({type: 'success', message: 'Bem-vindo(a), voce será redirecionado(a)'})
                sessionStorage.setItem("isLoggin", "true")
                setTimeout(() => {
                    route.push('/')
                }, 1000)
            }else {
                setMessage({type: 'error', message: 'Usuário e/ou senha inválidos'})
                clearPassword()
            }
        }
    }, [validFields, route])

    useEffect(() => {
        if(checkisLoggin()) {
            route.push('/')
        }else {
            setMount(true)
        }
    },[checkisLoggin])
    
    if(!mount) {
        return <></>
    }

    return (
        <S.Wrapper>
            <S.Logo width={160} src='/HeroVerse.png' alt="Hero Verse" />
            <S.Form onSubmit={submiting}>
                <TextField type="text" name="login" placeholder='Login' value={fieldLogin} onChange={handleLogin} />
                <TextField type="password" name="password" placeholder='Senha' value={fieldPassword} onChange={handlePassword} />
                <Button type="submit" variant='primary'>Entrar</Button>
                {
                    message && (
                        <Alert type={message.type}>{message.message}</Alert>
                    )
                }
            </S.Form>
            <Footer />
        </S.Wrapper>
    )
}