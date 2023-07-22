import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/globalStyle'
import { Header } from './components/Header'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  )
}
