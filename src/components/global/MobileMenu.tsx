type MobileMenuProps = {
  isOpen: boolean
  onToggle: () => void
  theme: 'light' | 'dark'
}

function MobileMenu({ isOpen, onToggle, theme }: MobileMenuProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 xl:hidden ${
        theme === 'dark'
          ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
          : 'border-neutral-200 bg-white text-neutral-800 hover:bg-neutral-50'
      }`}
    >
      <span className="flex w-[18px] flex-col gap-1.5">
        <span
          className={`h-0.5 w-full rounded-full transition-all duration-300 ${
            theme === 'dark' ? 'bg-white' : 'bg-neutral-800'
          } ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
        />
        <span
          className={`h-0.5 w-full rounded-full transition-all duration-300 ${
            theme === 'dark' ? 'bg-white' : 'bg-neutral-800'
          } ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-0.5 w-full rounded-full transition-all duration-300 ${
            theme === 'dark' ? 'bg-white' : 'bg-neutral-800'
          } ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
        />
      </span>
    </button>
  )
}

export default MobileMenu
