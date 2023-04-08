import HomePage from "./components/pages/Home";
import { getAllCategories } from "./services/category";
import { getAllHeroes } from "./services/hero";

export default async function Home() {
    const categories = await getAllCategories();
    const heroes = await getAllHeroes();
    return <HomePage categories={categories} heroes={heroes} />
}
  