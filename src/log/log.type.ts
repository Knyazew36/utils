export interface LogArgs {
  name: string
  data: unknown
  type: 'request' | 'response' | 'catch'
  payload?: any
  isServer?: boolean
}
