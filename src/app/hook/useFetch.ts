import { useCallback, useState } from "react";
import { addHero, deleteHero, getAllHeroes, updateHero } from "../services/hero";
import { heroData } from "../services/types";

type callBackType = (payload?: any) => void

export default function useFetch() {
    const [loading, setLoading] = useState(false)

    const createHero = useCallback(async (data: heroData, onSuccess?: callBackType, onError?: callBackType) => {
        setLoading(true)
        try {
            await addHero(data)
            onSuccess && onSuccess()
        } catch (err) {
            onError && onError()
        } finally {
            setLoading(false) 
        }
    }, [])

    const changeHero = useCallback(async (data: heroData, onSuccess?: callBackType, onError?: callBackType) => {
        setLoading(true)
        try {
            await updateHero(data)
            onSuccess && onSuccess()
        } catch (err) {
            onError && onError()
        } finally {
            setLoading(false) 
        }
    }, [])

    const removeHero = useCallback(async (id: number, onSuccess?: callBackType, onError?: callBackType) => {
        setLoading(true)
        try {
            await deleteHero(id)
            onSuccess && onSuccess()
        } catch (err) {
            onError && onError()
        } finally {
            setLoading(false) 
        }
    }, [])

    const getHeroes = useCallback(async (onSuccess?: callBackType, onError?: callBackType) => {
        setLoading(true)
        try {
            const data = await getAllHeroes()
            onSuccess && onSuccess(data)
        } catch (err) {
            onError && onError()
        } finally {
            setLoading(false) 
        }
    }, [])

    return {
        loading,
        createHero,
        changeHero,
        getHeroes,
        removeHero
    }
}