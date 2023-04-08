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
import { CardProps } from "@/app/DesignSystem/Card/types"
import Card from "@/app/DesignSystem/Card"
import { uid } from "uid"

const statusData:OptionType[] = [
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

    const HeroFiltered = useCallback((hero: HeroTypes) => {
        if(status.value === hero.Active) {
            if(hero.Name.toLowerCase().includes(search.toLowerCase()) && (categorySelected !== null ? categorySelected.value === hero.Category.Id : true)) {
                return true
            }
        }
        return false
    }, [categorySelected, status, search])

    const onEditHero = useCallback((hero: CardProps) => {

    }, [])

    const onDeleteHero = useCallback((hero: CardProps) => {
        
    }, [])

    const HeroMapping = useCallback((hero: HeroTypes): CardProps  => {
        return {
            id: hero.Id,
            title: hero.Name,
            description: '',
            category: {
                label: hero.Category.Name,
                variant: hero.Active ? 'primary' : 'black'
            }
        }
    }, [])
    
    const handleStatus = useCallback((status: OptionType) => {
        setStatus(status)
    }, [])

    const handleCategory = useCallback((item: OptionType) => {
        setCategory(item)
    }, [])

    const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }, [])

    useEffect(() => {
       const parseCategeory = categories.Items.map(item => ({
            label: item.Name,
            value: item.Id
       }))
       setCategoryList(parseCategeory)
    }, [categories])

    useEffect(() => {
        setHero(heroes.Items)
    }, [heroes])

    const heroList = useMemo(() => {
        return heroData.filter(HeroFiltered).map(HeroMapping)
    }, [search, status, categorySelected, heroData])

    return (
        <Layout>
            <Header />
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
                    <Button variant="primary">Criar novo heroi</Button>
                </S.BtnNewHero>
            </S.FilterMenu>
            <S.ResultsCards>
                {
                    heroList.map(hero => (
                        <Card key={uid()} {...hero} actions={{
                            onDelete: () => onEditHero(hero), 
                            onEdit: () => onDeleteHero(hero)
                        }} />
                    ))
                }
            </S.ResultsCards>
            </Guide.Container>
        </Layout>
    )
}
  