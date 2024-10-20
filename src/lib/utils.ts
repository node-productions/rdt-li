import slugify from '@sindresorhus/slugify'
import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function nanoid(length = 8) {
  return customAlphabet(
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    length,
  )()
}

export const smallDate = (date: any) => {
  return date.toISOString().split('T')[0].slice(2).replace(/-/g, '')
}

export function sanitize(text: string) {
  return slugify(text, { decamelize: false, lowercase: false, separator: '-' })
}

export const getBaseURL = () => {
  const isDev = process.env.NODE_ENV === 'development'
  const url = !isDev && process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL

  return url ? `https://${url}` : `http://localhost:${process.env.PORT || 3000}`
}
