import Logo from './Logo'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
  return (
    <header>
      <Logo />
      <nav aria-label="Primary navigation">Header</nav>
      <div>
        <ThemeToggle />
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
