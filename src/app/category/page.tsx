import CategoryPage from "@/app/components/pages/Category";
import { getAllCategories } from "../services/category";

export default async function Category() {
    const [categories] = await Promise.all([getAllCategories()])
    return <CategoryPage categories={categories.response} />
}