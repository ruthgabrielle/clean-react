import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthenticaton } from './remoteAuthentication'

describe('RemoteAuthenticaton', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthenticaton(url, httpPostClientSpy) // system under test
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
