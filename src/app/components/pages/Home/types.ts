export interface CategoryTypes {
    Id?: number
    Name: string
}

export interface HeroTypes {
    Id: number
    Name: string
    Active: boolean
    Category: CategoryTypes
}

export interface HeroesData {
    Items: HeroTypes[]
}

export interface HomePageProps {
    categories: {
        Items: CategoryTypes[]
    }
    heroes: HeroesData
}