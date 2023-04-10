import { useCallback, useState } from "react";
import { addHero, deleteHero, getAllHeroes, updateHero } from "../services/hero";
import { heroData } from "../services/types";
import { CategoryTypes } from "../components/pages/Home/types";
import { addCategory, deleteCategory, getAllCategories, updateCategory } from "../services/category";

type callBackSuccess = (payload?: any) => void
type callBackError = ({error, statusCode}: {error: string, statusCode: number}) => void

export default function useFetch() {
    const [loading, setLoading] = useState(false)

    const createHero = useCallback(async (data: heroData, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await addHero(data)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            setTimeout(() => {
                onSuccess && onSuccess()
                setLoading(false)
            }, 1000)
        }
    }, [])

    const changeHero = useCallback(async (data: heroData, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await updateHero(data)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess()
        }
        setLoading(false)
    }, [])

    const removeHero = useCallback(async (id: number, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await deleteHero(id)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess()
        }
        setLoading(false)
    }, [])

    const getHeroes = useCallback(async (onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        setLoading(true)
        const { error, statusCode, response } = await getAllHeroes()
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess(response)
        }
        setLoading(false)
    }, [])

    const createCategory = useCallback(async (data: CategoryTypes, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await addCategory(data)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess()
        }
        setLoading(false)
    }, [])

    const changeCategory = useCallback(async (data: CategoryTypes, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await updateCategory(data)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess()
        }
        setLoading(false)
    }, [])

    const removeCategory = useCallback(async (id: number, onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode } = await deleteCategory(id)
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess()
        }
        setLoading(false)
    }, [])

    const getCategories = useCallback(async (onSuccess?: callBackSuccess, onError?: callBackError) => {
        setLoading(true)
        const { error, statusCode, response } = await getAllCategories()
        if(error && onError) {
            onError({error, statusCode})
        }else {
            onSuccess && onSuccess(response)
        }
        setLoading(false)
    }, [])

    return {
        loading,
        createHero,
        changeHero,
        getHeroes,
        removeHero,
        createCategory,
        changeCategory,
        removeCategory,
        getCategories
    }
}