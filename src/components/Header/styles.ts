import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.bgColor};
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`

export const CryptoList = styled.ul``

export const CryptoItem = styled.li``

export const SignInButton = styled.button``

export const SignUpButton = styled.button`
  margin: 1rem 0;
`
