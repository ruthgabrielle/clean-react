import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthenticaton } from './remoteAuthentication'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthenticaton
  httpPostClientSpy: HttpPostClientSpy
}
const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthenticaton(url, httpPostClientSpy) // system under test
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthenticaton', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
