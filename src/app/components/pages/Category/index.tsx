'use client'

import Button from "@/app/DesignSystem/Button"
import Header from "../../Header"
import Layout from "../../Layout"
import * as S from './style'
import * as Guide from '../../../styles/guide'
import { CategoryProps } from "./types"
import CategoriesResult from "../../CategoriesResult"
import { useCallback, useEffect, useState } from "react"
import { CategoryTypes } from "../Home/types"
import useFetch from "@/app/hook/useFetch"
import Modal from "@/app/DesignSystem/Modal"
import FormCategory from "../../FormCategory"
import Typographic from "@/app/DesignSystem/Typographic"
import { extractHeroesisError } from "@/app/services/config"
import { heroData } from "@/app/services/types"
import { uid } from "uid"


export default function CategoryPage({categories}: CategoryProps) {
    const [categoriesList, setCategories] = useState<CategoryTypes[]>([])
    const [categorySelect, setCategorySelected] = useState<CategoryTypes | null>(null)
    const [modal, setModal] = useState(false)
    const [modalError, setModalError] = useState(false)
    const [message, setMessage] = useState<JSX.Element | null>(null)
    const { getHeroes, removeHero, getCategories, removeCategory } = useFetch()

    const closeModal = useCallback(() => {
        setModal(false)
        setCategorySelected(null)
    }, [])  

    const closeModalError = useCallback(() => {
        setModalError(false)
        setMessage(null)
        setCategorySelected(null)
    }, [])  

    const onEditCategory = useCallback((category: CategoryTypes) => {
        setCategorySelected(category)
        setModal(true)
    }, [])

    const removeAllHeroesAndCategory = useCallback(async (herois: string[], category: CategoryTypes) => {
        const heroesIdRemove: Promise<void>[] = []
        await getHeroes((heroes) => {
            herois.forEach(hero => {
                const find = heroes.Items.find((heroCheck: heroData) => heroCheck.Name === hero)
                if(find) {
                    heroesIdRemove.push(removeHero(Number(find.Id)))
                }
            })
        })

        if(!category.Id) {
            return;
        }

        await Promise.all([...heroesIdRemove])
        await removeCategory(category.Id, closeModalError), updateCategories()
        
    
    }, [getHeroes, removeCategory, removeHero, closeModalError])

    const updateCategories = useCallback(() => {
        getCategories((payload) => {
            setCategories(payload.Items)
        })
        setModal(false)
        setCategorySelected(null)
    }, [setModal, setCategories])

    const handlErrorDelete = useCallback(({error, statusCode, category}: {error: string, statusCode: number, category?: CategoryTypes}) => {
        if(statusCode === 400) {
            const herosRef = extractHeroesisError(error)
            const qtdHerosRef = herosRef.length
            let textHeroes = 'heroi'
            let textRefer = 'vinculado'

            if(qtdHerosRef > 1) {
                textHeroes = 'herois'
                textRefer = 'vinculados'
            }
            
            if(!category) {
                return;
            }

            const message = (
                <>
                    <Typographic>Para deletar essa categoria é preciso excluir {qtdHerosRef} {textHeroes} {textRefer}:</Typographic>
                    <br />
                    {
                        herosRef.map(hero => <Typographic key={uid()} size="18px">&raquo; {hero}</Typographic>)
                    }
                    <br />
                    <Typographic weight="700">Deseja progressir e excluir os herois?</Typographic><br />
                    <Button onClick={() => removeAllHeroesAndCategory(herosRef, category)} variant="primary">Sim, excluir todos</Button><br />
                    <Button onClick={closeModalError} variant="secondary">Não, deixa para lá!</Button>
                </>
            )

            setMessage(message)
            
        }else {
            setMessage(<Typographic>Erro ao tentar deletar a categoria, tente novamente mais tarde.</Typographic>)
        }
        setModalError(true)
    }, [removeAllHeroesAndCategory, setModalError, setMessage, closeModalError, extractHeroesisError])

    const onDeleteCategory = useCallback(async (category: CategoryTypes) => {
        if(category.Id) {
            removeCategory(category.Id, updateCategories, (payload) => handlErrorDelete({...payload, category}))
        }
    }, [setCategorySelected, removeCategory])

    useEffect(() => {
        setCategories(categories.Items)
    }, [categories])
    const isEdit = categorySelect !== null 
    
    return (
        <Layout>
            <Header />
            <Modal title={isEdit ? 'Alterar Categoria' : 'Nova Categoria'} open={modal} onClose={closeModal}>
                <FormCategory category={categorySelect} isEdit={isEdit} onSaved={updateCategories} />
            </Modal>
            <Modal title="Atenção!" open={modalError} onClose={closeModalError}>
                {message}
            </Modal>
            <Guide.Container>
                <S.Menu>
                    <Button variant="primary" onClick={() => setModal(true)}>Criar nova categoria</Button>
                </S.Menu>
                <CategoriesResult categories={categoriesList}  onDeleteCategory={onDeleteCategory} onEditCategory={onEditCategory}/>
            </Guide.Container>
        </Layout>
    )
}