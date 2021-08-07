import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthenticaton } from './remoteAuthentication'

describe('RemoteAuthenticaton', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthenticaton(url, httpPostClientSpy) // system under test
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
