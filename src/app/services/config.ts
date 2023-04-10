import { ReturnFetchType } from "./types"

export const headers = {
    'Content-Type': 'application/json',
    'accessKey': `${process.env.API_KEY}`,
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