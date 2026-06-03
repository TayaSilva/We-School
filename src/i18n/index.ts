import { en } from './en'
import { pt } from './pt'

export const translations = {
  pt,
  en,
}

export type Language = keyof typeof translations
