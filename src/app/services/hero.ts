import { heroData } from "./types"

export async function getAllHeroes() {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'accessKey': `${process.env.NEXT_PUBLIC_API_KEY}`
            },
            cache: 'no-store'
        })
        return request.json()
    } catch (err) {
        console.log('erro', err)
    }
}

export async function addHero(data: heroData) {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'accessKey': `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
        return request.status
    } catch (err) {
        console.log('erro', err)
    }
}

export async function updateHero(data: heroData) {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes/${data.Id}`, {
            method: 'PUT',
            body: JSON.stringify({Name: data.Name, CategoryId: data.CategoryId, Active: data.Active}),
            headers: {
                'Content-Type': 'application/json',
                'accessKey': `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
        return request.status
    } catch (err) {
        console.log('erro', err)
    }
}

export async function deleteHero(id: number) {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Heroes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accessKey': `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
        return request.status
    } catch (err) {
        console.log('erro', err)
    }
}