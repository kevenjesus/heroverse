import HomePage from "./components/pages/Home";
import { headers, returnResponse } from "./services/config";

async function getAllCategories() {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Category`, {
        method: 'GET',
        headers,
        cache: 'no-store',
        next: {
            revalidate: 0
        }
    })
    const response = await request.json()
    return returnResponse(request, response, 200)
}

async function getAllHeroes() {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes`, {
        method: 'GET',
        headers,
        cache: 'no-store',
        next: {
            revalidate: 0
        }
    })
    const response = await request.json()
    return returnResponse(request, response, 200)
}

export default async function Home() {
    const [categories, heroes] = await Promise.all([getAllCategories(), getAllHeroes()])
    return <HomePage categories={categories.response} heroes={heroes.response} />
}
  