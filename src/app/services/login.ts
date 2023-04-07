export const fetchLogin = (login: string, password: string) => {
    return (login === process.env.NEXT_PUBLIC_LOGIN && password === process.env.NEXT_PUBLIC_PASSWORD)
}