import { CardProps } from "@/app/DesignSystem/Card/types";

export interface HeroesResultTypes {
    heroes: CardProps[]
    search: string
    onEditHero: (hero: CardProps) => void
    onDeleteHero: (hero: CardProps) => void
}