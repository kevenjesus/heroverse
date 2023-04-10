import { CategoryTypes } from "../components/pages/Home/types"
import { API_URL, headers, returnResponse } from "./config"


export async function getAllCategories() {
    const request = await fetch(`${API_URL}/Category`, {
        method: 'GET',
        headers,
        cache: 'no-store'
    })
    const response = await request.json()
    return returnResponse(request, response, 200)
}

export async function addCategory(data: CategoryTypes) {
    const request = await fetch(`${API_URL}/Category`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    })
    const response = await request.json()
    return returnResponse(request, response, 201)
    
}

export async function updateCategory(data: CategoryTypes) {
    const request = await fetch(`${API_URL}/Category/${data.Id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers
    })
    const response = await request.json()
    return returnResponse(request, response, 200)
}

export async function deleteCategory(id: number) {
    const request = await fetch(`${API_URL}/Category/${id}`, {
        method: 'DELETE',
        headers
    })
    let response = ''
    if(request.status === 400) {
        response = await request.json()
    }
    return returnResponse(request, response, 204)
}