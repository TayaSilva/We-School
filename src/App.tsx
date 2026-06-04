import AppRoutes from './routes/AppRoutes'
import { LanguageProvider } from './hooks/useLanguage'
import { ThemeProvider } from './hooks/useTheme'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
