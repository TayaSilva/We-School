import type { Language } from '../../i18n'

type LanguageSwitcherProps = {
  currentLanguage: Language
  onChange: (language: Language) => void
  theme: 'light' | 'dark'
}

function LanguageSwitcher({
  currentLanguage,
  onChange,
  theme,
}: LanguageSwitcherProps) {
  const baseText = theme === 'dark' ? 'text-white/55' : 'text-neutral-500'
  const activeText = theme === 'dark' ? 'text-[#f6c0cf]' : 'text-primary-600'
  const divider = theme === 'dark' ? 'bg-white/20' : 'bg-neutral-300'

  return (
    <div className="flex items-center gap-3 text-xs font-label font-semibold uppercase tracking-[0.18em]">
      <button
        type="button"
        onClick={() => onChange('pt')}
        className={currentLanguage === 'pt' ? activeText : baseText}
      >
        PT
      </button>
      <span className={`h-4 w-px ${divider}`} aria-hidden="true" />
      <button
        type="button"
        onClick={() => onChange('en')}
        className={currentLanguage === 'en' ? activeText : baseText}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
