import { Logo } from '../Logo'
import {
  CryptoItem,
  CryptoList,
  HeaderContainer,
  NavBar,
  SignInButton,
  SignUpButton,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <NavBar>
        <ul>
          <li>About us</li>
          <li>Top Cryptos</li>
        </ul>
      </NavBar>

      <CryptoList>
        <CryptoItem>Bit</CryptoItem>
      </CryptoList>

      <SignInButton>Sign in</SignInButton>

      <SignUpButton>Sign up</SignUpButton>
    </HeaderContainer>
  )
}
