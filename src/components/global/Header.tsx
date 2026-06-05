import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

const navLabels = {
  pt: {
    '/': 'Home',
    '/sobre': 'Sobre',
    '/ensino': 'Ensino',
    '/atividades': 'Atividades',
    '/contato': 'Contato',
    cta: 'Agende uma visita',
  },
  en: {
    '/': 'Home',
    '/sobre': 'About',
    '/ensino': 'Teaching',
    '/atividades': 'Activities',
    '/contato': 'Contact',
    cta: 'Schedule a visit',
  },
} as const

const navItemWidths = {
  '/': 'w-[88px]',
  '/sobre': 'w-[92px]',
  '/ensino': 'w-[112px]',
  '/atividades': 'w-[118px]',
  '/contato': 'w-[96px]',
} as const

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isTemporarilyHidden, setIsTemporarilyHidden] = useState(false)
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const labels = navLabels[language]
  const isDark = theme === 'dark'

  useEffect(() => {
    function handleVisibilityChange(event: Event) {
      const customEvent = event as CustomEvent<{ hidden?: boolean }>
      const hidden = Boolean(customEvent.detail?.hidden)
      setIsTemporarilyHidden(hidden)

      if (hidden) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('about-mobile-header-visibility', handleVisibilityChange)

    return () => {
      window.removeEventListener('about-mobile-header-visibility', handleVisibilityChange)
    }
  }, [])

  return (
    <header
      className={`absolute inset-x-0 top-0 z-30 py-3 transition-all duration-500 sm:py-7 ${
        isTemporarilyHidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-[48px]">
        <div
          className={`mx-auto max-w-[1600px] rounded-[22px] border px-4 py-2.5 transition-all duration-300 sm:px-5 sm:py-3 lg:px-7 ${
            isDark
              ? 'border-white/6 bg-[#171717] text-white'
              : 'border-white/70 bg-white text-neutral-800 shadow-[0_14px_44px_rgba(25,25,25,0.14)]'
          }`}
        >
          <div className="flex items-center justify-between gap-4 xl:grid xl:grid-cols-[280px_minmax(0,1fr)_360px] xl:items-center xl:gap-6">
            <div className="flex min-w-0 items-center">
              <Logo theme={theme} />
            </div>

            <nav
              aria-label="Primary navigation"
              className="hidden min-w-0 items-center justify-center xl:flex"
            >
              <ul className="flex items-center justify-center gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.path}
                    className={`flex justify-center ${
                      navItemWidths[link.path as keyof typeof navItemWidths]
                    }`}
                  >
                     <NavLink
                       to={link.path}
                       viewTransition
                       className={({ isActive }) =>
                        [
                          'relative inline-flex justify-center pb-1 text-center text-[0.95rem] font-body font-semibold transition-all duration-300',
                          isActive
                            ? isDark
                              ? 'text-[#f7ced9]'
                              : 'text-primary-600'
                            : isDark
                              ? 'text-white/78 hover:text-white'
                              : 'text-neutral-600 hover:text-neutral-900',
                        ].join(' ')
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {labels[link.path as keyof typeof labels]}
                          {isActive && (
                            <span
                              className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full ${
                                isDark ? 'bg-[#f6c0cf]' : 'bg-primary-600'
                              }`}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center justify-end gap-5 xl:flex">
              <LanguageSwitcher
                currentLanguage={language}
                onChange={setLanguage}
                theme={theme}
              />
              <ThemeToggle
                theme={theme}
                onToggle={() => setTheme(isDark ? 'light' : 'dark')}
              />
              <NavLink
                to="/contato"
                viewTransition
                className="inline-flex min-h-11 w-[242px] items-center justify-center rounded-full bg-primary-600 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-700"
              >
                {labels.cta}
              </NavLink>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle
                theme={theme}
                onToggle={() => setTheme(isDark ? 'light' : 'dark')}
              />
              <MobileMenu
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen((current) => !current)}
                theme={theme}
              />
            </div>
          </div>

          <div
              className={`overflow-hidden transition-all duration-300 xl:hidden ${
                isMobileMenuOpen ? 'max-h-[520px] pt-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div
              className={`rounded-[18px] border p-4 ${
                isDark ? 'border-white/10 bg-white/5' : 'border-neutral-200 bg-neutral-50/90'
              }`}
            >
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        viewTransition
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          [
                            'flex min-h-10 items-center rounded-xl px-4 text-[12px] font-semibold transition-all duration-300 sm:min-h-11 sm:text-sm',
                            isActive
                              ? isDark
                                ? 'bg-white/10 text-[#f7ced9]'
                                : 'bg-primary-50 text-primary-600'
                              : isDark
                                ? 'text-white/80 hover:bg-white/6 hover:text-white'
                                : 'text-neutral-700 hover:bg-white hover:text-neutral-900',
                          ].join(' ')
                        }
                      >
                        {labels[link.path as keyof typeof labels]}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <LanguageSwitcher
                  currentLanguage={language}
                  onChange={setLanguage}
                  theme={theme}
                />
                <NavLink
                  to="/contato"
                  viewTransition
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-primary-600 px-6 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-primary-700 sm:min-h-11 sm:text-sm"
                >
                  {labels.cta}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
