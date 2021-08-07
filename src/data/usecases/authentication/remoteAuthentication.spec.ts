import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthenticaton } from './remoteAuthentication'

type SutTypes = {
  sut: RemoteAuthenticaton
  httpPostClientSpy: HttpPostClientSpy
}
const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthenticaton(url, httpPostClientSpy) // system under test
  return {
    sut,
    httpPostClientSpy
  }
}
describe('RemoteAuthenticaton', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
