import moonIcon from '../../assets/icons/lua.svg'
import sunIcon from '../../assets/icons/sol.svg'
import type { Theme } from '../../hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const icon = theme === 'dark' ? sunIcon : moonIcon
  const label = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 sm:h-11 sm:w-11"
    >
      <img src={icon} alt="" className="h-[18px] w-[18px]" />
    </button>
  )
}

export default ThemeToggle
