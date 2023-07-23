import { Logo } from '../Logo'
import { SignIn } from '../SignIn'
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
      <section>
        <Logo />

        <NavBar>
          <ul>
            <li>
              <button>About us</button>
            </li>
            <li>
              <button>Top Cryptos</button>
            </li>
          </ul>
        </NavBar>
      </section>

      <section>
        <CryptoList>
          <CryptoItem>Bit</CryptoItem>
          <CryptoItem>Bit</CryptoItem>
          <CryptoItem>Bit</CryptoItem>
          <CryptoItem>Bit</CryptoItem>
          <CryptoItem>Bit</CryptoItem>
        </CryptoList>

        <SignIn />

        <SignInButton>Sign in</SignInButton>

        <SignUpButton>Sign up</SignUpButton>
      </section>
    </HeaderContainer>
  )
}
