export class UnexpectedError extends Error {
  constructor () {
    super('Something unexpected happens, try again later.')
    this.name = 'UnexpectedError'
  }
}
