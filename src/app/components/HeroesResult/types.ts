import { CardProps } from "@/app/DesignSystem/Card/types";
import { HeroTypes } from "../pages/Home/types";

export interface HeroesResultTypes {
    heroes: HeroTypes[]
    search: string
    onEditHero: (hero: HeroTypes) => void
    onDeleteHero: (hero: HeroTypes) => void
}