export class InvalidCredentialsError extends Error {
  constructor () {
    super('INVALID!!!!')
    this.name = 'InvalidCredentialsError'
  }
}
