import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AboutPage from '../pages/About'
import ActivitiesPage from '../pages/Activities'
import ContactPage from '../pages/Contact'
import EducationPage from '../pages/Education'
import HomePage from '../pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="ensino" element={<EducationPage />} />
        <Route path="atividades" element={<ActivitiesPage />} />
        <Route path="contato" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
