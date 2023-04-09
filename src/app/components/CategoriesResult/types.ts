import { CardProps } from "@/app/DesignSystem/Card/types";
import { CategoryTypes } from "../pages/Home/types";

export interface CategoriesResultTypes {
    categories: CategoryTypes[]
    onEditCategory: (category: CategoryTypes) => void
    onDeleteCategory: (category: CategoryTypes) => void
}