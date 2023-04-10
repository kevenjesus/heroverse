import { ReturnFetchType } from "./types"

export const API_KEY = '0c9599c03ab2419d98b7cb3ff009cb78'
export const API_URL = 'https://keven.globalthings.net/api'

export const headers = {
    'Content-Type': 'application/json',
    'accessKey': `${API_KEY}`,
    "Access-Control-Allow-Origin": "*"
}

export function returnResponse(request: Response, response: any, statusOk: number): ReturnFetchType {
    return {
        statusCode: request.status,
        response: request.status !== 204 && response !== null ? response : 'ok',
        error: request.status !== statusOk ? response.Message : null
    }
}

export function extractHeroesisError(message: string) {
    const regex = /(?:Heroes are attachet to it: )(.*)\.$/;
    const matches = regex.exec(message);
    if (!matches) {
      return [];
    }
    const herois = matches[1].split(', ');
    return herois;
  }