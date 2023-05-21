import { avatarArray } from './avatarData'

export function validateEmail(email: string): boolean {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return res.test(String(email).toLowerCase())
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

export function getRandomAvatarUrl(): string {
  return avatarArray[getRandomInt(12)]
}

export function generateSixDigitCode() {
  const code = Math.floor(Math.random() * 1000000)
  return code.toString().padStart(6, '0')
}

export function generateFourDigitPin() {
  const pin = Math.floor(Math.random() * 10000)
  return pin.toString().padStart(4, '0')
}

export function trimLastMessage(message: string | null) {
  if (message == null) return

  if (message.trim().length > 20) {
    return `${message.substring(0, 20)}...`
  }
  return message
}
