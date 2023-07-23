import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;

  width: 100%;

  background-color: ${({ theme }) => theme.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 7rem;

    section {
      display: flex;
      align-items: center;
    }
  }
`

export const NavBar = styled.nav`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 2.5rem;

    ul {
      display: flex;
      list-style: none;

      gap: 1.5rem;
    }

    button {
      font-size: 0.875rem;

      color: ${({ theme }) => theme.textBase};

      background: 0;
      border: 0;

      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.primary[500]};
      }
    }
  }
`

export const CryptoList = styled.ul`
  display: flex;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1.5rem;

    margin-right: 5rem;
  }
`

export const CryptoItem = styled.li``

export const SignInButton = styled.button`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.875rem;

    background: 0;
    border: 0;

    color: ${({ theme }) => theme.textBase};

    margin-right: 1.5rem;

    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.primary[500]};
    }
  }
`

export const SignUpButton = styled.button`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary[500]};

    border: 0;
    border-radius: 2rem;

    padding: 0.5rem 1rem;

    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }) => theme.primary[600]};
    }
  }
`
