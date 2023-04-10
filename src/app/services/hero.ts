import { headers, returnResponse } from "./config"
import { heroData } from "./types"

export async function getAllHeroes() {
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

export async function addHero(data: heroData) {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })
    const response = await request.json()
    return returnResponse(request, response, 201)
}

export async function updateHero(data: heroData) {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes/${data.Id}`, {
        method: 'PUT',
        body: JSON.stringify({Name: data.Name, CategoryId: data.CategoryId, Active: data.Active}),
        headers
    })
    const response = await request.json()
    return returnResponse(request, response, 200)
}

export async function deleteHero(id: number) {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes/${id}`, {
        method: 'DELETE',
        headers
    })
    let response = ''
    if(request.status === 400) {
        response = await request.json()
    }
    return returnResponse(request, response, 204)
    
}