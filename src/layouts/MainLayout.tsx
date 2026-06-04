import { Outlet } from 'react-router-dom'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import { useTheme } from '../hooks/useTheme'

function MainLayout() {
  const { theme } = useTheme()

  return (
    <div
      className={`min-h-screen font-body transition-colors duration-300 ${
        theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-neutral-50 text-neutral-800'
      }`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
