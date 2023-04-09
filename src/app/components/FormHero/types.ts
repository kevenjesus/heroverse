import { OptionType } from "@/app/DesignSystem/Select/types";
import { HeroTypes } from "../pages/Home/types";

export interface FormHeroProps {
    hero: HeroTypes | null
    isEdit: boolean
    categoryList: OptionType[]
    onSaved: () => void
}