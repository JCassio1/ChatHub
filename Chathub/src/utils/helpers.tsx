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
