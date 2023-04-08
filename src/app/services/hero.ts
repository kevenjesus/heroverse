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