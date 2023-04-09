import CategoryPage from "@/app/components/pages/Category";
import { getAllCategories } from "../services/category";

export default async function Category() {
    const categories = await getAllCategories()
    return <CategoryPage categories={categories.response} />
}