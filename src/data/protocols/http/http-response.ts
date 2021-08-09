export enum HttpStatusCode {
  unhautorized = 401,
  noContent = 204
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
