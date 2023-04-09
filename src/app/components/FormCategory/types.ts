import { CategoryTypes } from "../pages/Home/types";

export interface FormCategoryProps {
    category: CategoryTypes | null
    isEdit: boolean
    onSaved: () => void
}