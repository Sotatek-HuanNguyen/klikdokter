import { path } from 'ramda'

export default function (res) {
  const token = path(['data', 'token'], res) || ''
  localStorage.setItem('X-Token', `Bearer ${token}`)
}
