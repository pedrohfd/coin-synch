import styled, { keyframes } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;

  width: 100%;

  z-index: 1;

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

const textAnimation = keyframes`
from {
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`

export const CryptoList = styled.ul`
  display: flex;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 1.5rem;

    margin-right: 5rem;

    overflow: hidden;
  }
`

export const CryptoItem = styled.li`
  display: flex;
  gap: 0.5rem;
  animation: ${textAnimation} 10s linear infinite;

  .coin {
    color: ${({ theme }) => theme.secondary[800]};
    font-size: 0.875rem;
    line-height: 1rem;

    text-transform: uppercase;
  }

  .value {
    color: ${({ theme }) => theme.textBase};
    font-size: 0.875rem;
    line-height: 1rem;

    text-transform: uppercase;
  }

  .change {
    color: ${({ theme }) => theme.tertiary[700]};
    font-size: 0.875rem;
    line-height: 1rem;

    text-transform: uppercase;
  }
`

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
