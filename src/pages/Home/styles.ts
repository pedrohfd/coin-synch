import styled from 'styled-components'

export const HomeContainer = styled.div`
  overflow-y: visible;
  background-color: ${({ theme }) => theme.white};
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

export const HomeRightContent = styled.section`
  margin-left: 7rem;
`

export const HomeTitle = styled.h1`
  width: 36rem;

  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.primary[500]};
`

export const HomeDescription = styled.p`
  width: 36rem;

  font-size: 1.25rem;
  line-height: 2rem;

  color: ${({ theme }) => theme.textBase};

  margin: 1.5rem 0 2rem 0;
`

export const HomeSignUpButton = styled.button`
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

export const FooterWaves = styled.img`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 15rem;
`

export const AboutArea = styled.div`
  background: ${({ theme }) => theme.white};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%);

  height: calc(100vh - 4.063rem);
  width: 100%;
`

export const AboutContent = styled.div`
  display: flex;

  height: 100%;

  align-items: center;
  justify-content: space-between;
`

export const AboutLeftContent = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 2rem;

  width: 50rem;

  padding-left: 7rem;
`

export const AboutRightContent = styled.div`
  padding-right: 12rem;
`

export const AboutLabel = styled.label`
  color: ${({ theme }) => theme.primary[500]};

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
`

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.textBase};

  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.025rem;

  margin: 0.25rem 0 1rem 0;
`

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.textBase};

  font-size: 1rem;
  line-height: 1.5rem;

  width: 25.375rem;
`

export const AboutSignUpButton = styled.button`
  border: 0;

  color: ${({ theme }) => theme.white};

  padding: 0.875rem 2.7rem;
  margin-top: 2.5rem;

  border-radius: 2rem;
  background: ${({ theme }) => theme.primary[500]};
`

export const Card = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.375rem;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);

  display: inline-flex;
  flex-direction: column;

  padding: 1.5rem;

  height: 14.5rem;
  width: 13.8rem;

  & + & + & {
    margin-left: 6.5rem;
  }

  & + & + & + & {
    margin: 0;
  }
`

export const CardLabel = styled.label`
  color: ${({ theme }) => theme.primary[500]};

  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;

  margin-top: 1rem;
`

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.textBase};

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;

  margin-top: 0.25rem;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.textBase};

  font-size: 0.875rem;
  line-height: 1.5rem;

  margin-top: 0.5rem;
`
