'use client'
import Header from "../../Header"
import Layout from "../../Layout"
import { HeroTypes, HomePageProps } from "./types"
import * as Guide from '../../../styles/guide'
import * as S from './style'
import Select from "@/app/DesignSystem/Select"
import TextField from "@/app/DesignSystem/TextField"
import Button from "@/app/DesignSystem/Button"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"
import { OptionType } from "@/app/DesignSystem/Select/types"
import HeroesResuls from "../../HeroesResult"
import Headline from "@/app/DesignSystem/Headline"
import Modal from "@/app/DesignSystem/Modal"
import FormHero from "../../FormHero"
import useFetch from "@/app/hook/useFetch"

export const statusData:OptionType[] = [
    {
        label: 'Todos',
        value: 0
    },
    {
        label: 'Ativo',
        value: true
    },
    {
        label: 'Inativo',
        value: false
    }
]

export default function HomePage({categories, heroes}: HomePageProps) {
    const [categoryList, setCategoryList] = useState<OptionType[]>([])
    const [status, setStatus] = useState<OptionType>(statusData[0])
    const [categorySelected, setCategory] = useState<OptionType | null>(null)
    const [search, setSearch] = useState('')
    const [heroData, setHero] = useState<HeroTypes[]>([])
    const [heroSelected, setHeroSelected] = useState<HeroTypes | null>(null)
    const [modal, setModal] = useState(false)
    const { getHeroes, removeHero } = useFetch()

    const HeroFiltered = useCallback((hero: HeroTypes) => {
        if(status.value === hero.Active || status.value === 0) {
            if(hero.Name.toLowerCase().includes(search.toLowerCase()) && (categorySelected !== null ? categorySelected.value === hero.Category.Id : true)) {
                return true
            }
        }else {

        }
        return false
    }, [categorySelected, status, search])

    const closeModal = useCallback(() => {
        setModal(false)
        setHeroSelected(null)
    }, [])
    
    const onEditHero = useCallback((hero: HeroTypes) => {
        setHeroSelected(hero)
        setModal(true)
    }, [])

    const onDeleteHero = useCallback((hero: HeroTypes) => {
        removeHero(hero.Id, updateDataHeroes)
    }, [])
    
    const handleStatus = useCallback((status: OptionType) => {
        setStatus(status)
    }, [])

    const handleCategory = useCallback((item: OptionType) => {
        const value = item.value === 0 ? null : item;
        setCategory(value)
    }, [])

    const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }, [])

    const updateDataHeroes = useCallback(() => {
        getHeroes((payload) => {
            setHero(payload.Items)
        })
        setModal(false)
    }, [])

    useEffect(() => {
       const parseCategeory = categories.Items.map(item => ({
            label: item.Name,
            value: item.Id
       }))
       const parseCategoryConcat = [{label: 'Todos', value: 0}].concat(parseCategeory)
       setCategoryList(parseCategoryConcat)
    }, [categories])

    useEffect(() => {
        setHero(heroes.Items)
    }, [heroes])

    const heroList = useMemo(() => {
        return heroData.filter(HeroFiltered)
    }, [search, status, categorySelected, heroData])

    const isEdit = heroSelected !== null

    return (
        <Layout>
            <Header />
            <Modal title={`${isEdit ? 'Editar Heroi' : 'Novo Heroi'}`} open={modal} onClose={closeModal}>
                <FormHero hero={heroSelected} isEdit={isEdit} onSaved={updateDataHeroes} categoryList={categoryList} />
            </Modal>
            <Guide.Container>
            <S.FilterMenu>
                <S.FilterCategory>
                    <Select key='FilterCategory' options={categoryList} value={categorySelected?.label} onChange={handleCategory} placeholder='Filtrar por categoria' />
                </S.FilterCategory>
                <S.FilterSearch>
                    <TextField type="text" name="search" value={search} onChange={handleSearch} placeholder="Buscar por heroi" />
                </S.FilterSearch>
                <S.FilterStatus>
                    <Select key='FilterStatus' options={statusData} value={status.label} onChange={handleStatus} placeholder='Filtrar por status' />
                </S.FilterStatus>
                <S.BtnNewHero>
                    <Button onClick={() => setModal(true)} variant="primary">Criar novo heroi</Button>
                </S.BtnNewHero>
            </S.FilterMenu>
            <hr />
            <Headline as="h2">Herois</Headline>
            <S.ResultsCards>
                <HeroesResuls heroes={heroList} search={search} onDeleteHero={onDeleteHero} onEditHero={onEditHero} />
            </S.ResultsCards>
            </Guide.Container>
        </Layout>
    )
}
  