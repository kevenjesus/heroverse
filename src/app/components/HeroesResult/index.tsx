import { CardProps } from "@/app/DesignSystem/Card/types";
import EmptyState from "../EmptyState";
import Card from "@/app/DesignSystem/Card";
import { uid } from "uid";
import { HeroesResultTypes } from "./types";

export default function HeroesResuls({heroes, search, onDeleteHero, onEditHero}: HeroesResultTypes) {
    if(heroes.length === 0 && search !== "") {
        return <EmptyState text={`Não foi possível encontrar um heroi com o termo ”${search}”`} />
    }else if(heroes.length === 0 && search === "") {
        return <EmptyState text="Não existem herois cadastrados" />
    }else {
        return (
            <>
            {
                heroes.map(hero => (
                <Card key={uid()} title={hero.Name} category={{
                    id: hero.Category.Id, 
                    label: hero.Category.Name, 
                    variant: hero.Active ? 'primary' : 'black'
                    }} actions={{
                        onDelete: () => onDeleteHero(hero), 
                        onEdit: () => onEditHero(hero)
                    }} />
                ))
            }
        </>
    )
    }
}