export interface heroData {
    Id?: number
    Name: string
    CategoryId: number
    Active: boolean
}

export interface ReturnFetchType {
    statusCode: number
    response: any
    error: string | null
}