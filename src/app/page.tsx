import HomePage from "./components/pages/Home";
import { getAllCategories } from "./services/category";
import { getAllHeroes } from "./services/hero";


export default async function Home() {
    const [categories, heroes] = await Promise.all([getAllCategories(), getAllHeroes()])
    return <HomePage categories={categories.response} heroes={heroes.response} />
}
  