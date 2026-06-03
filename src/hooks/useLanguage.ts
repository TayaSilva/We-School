import { useState } from 'react'
import type { Language } from '../i18n'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt')

  return {
    language,
    setLanguage,
  }
}
