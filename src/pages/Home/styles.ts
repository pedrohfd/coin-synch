import styled from 'styled-components'
import waves from '../../assets/waves.png'

export const HomeContainer = styled.div`
  overflow-y: visible;
`

export const HomeContent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .tagsArea {
    display: flex;

    gap: 2rem;

    margin-top: 5rem;
  }
`

export const RightContent = styled.section`
  margin-left: 7rem;
`

export const Title = styled.h1`
  width: 36rem;

  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.primary[500]};
`

export const Description = styled.p`
  width: 36rem;

  font-size: 1.25rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.textBase};

  margin: 1.5rem 0 2rem 0;
`

export const SignUpButton = styled.button`
  width: 17rem;

  background: ${({ theme }) => theme.primary[500]};
  color: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 2rem;

  padding: 0.875rem 1.5rem;

  text-transform: uppercase;

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.white};

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primary[600]};
  }
`

export const Tags = styled.div`
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.primary[100]};

  color: ${({ theme }) => theme.primary[500]};

  padding: 0.25rem 1rem;

  font-size: 1.25rem;
  line-height: 2rem;
`

export const FooterWaves = styled.div`
  position: absolute;
  bottom: 0;

  background-image: url(${waves});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 15rem;
`

export const Area = styled.div`
  height: 100rem;
  width: 100%;
`
