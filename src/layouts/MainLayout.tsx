import { Outlet } from 'react-router-dom'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'

function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
