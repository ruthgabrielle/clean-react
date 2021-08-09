import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/error/invalid-credentials-error'
import { AuthenticationParams } from '@/domain/usecases/authentication'
export class RemoteAuthenticaton {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unhautorized: throw new InvalidCredentialsError()
      default: return await Promise.resolve()
    }
  }
}
