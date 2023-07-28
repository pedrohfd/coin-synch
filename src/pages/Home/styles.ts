import styled from 'styled-components'
import {
  Root as RootCollapsible,
  Trigger,
  Content,
} from '@radix-ui/react-collapsible'
import {
  Root as RootForm,
  Field,
  Label,
  Control,
  Message,
  Submit,
} from '@radix-ui/react-form'

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

export const AboutContent = styled.div`
  background: ${({ theme }) => theme.white};
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%);

  height: calc(100vh - 4.063rem);
  width: 100%;
  display: flex;

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

export const TopCryptosContent = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.white};

  align-items: center;
  justify-content: center;

  padding: 7.5rem 0;
`

export const TopCryptosTitle = styled.h3`
  color: ${({ theme }) => theme.textBase};

  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
`

export const CollapsibleRoot = styled(RootCollapsible)``

export const CollapsibleTrigger = styled(Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: 0;
  border: 0;

  color: ${({ theme }) => theme.primary[500]};
  font-size: 1rem;
  line-height: 1.5rem;
`

export const CollapsibleContent = styled(Content)``

export const TopCryptosTable = styled.table`
  border-spacing: 7rem 1rem;
  width: 100%;

  th {
    text-align: left;

    color: ${({ theme }) => theme.secondary[500]};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
  }

  td {
    width: 10rem;
  }
`

export const TopCryptosItemId = styled.td`
  color: ${({ theme }) => theme.secondary[500]};

  font-size: 0.875rem;
  line-height: 1rem;
`

export const TopCryptosItemName = styled.td`
  color: ${({ theme }) => theme.textBase};
  font-size: 1rem;
  line-height: 1.5rem;

  span {
    color: ${({ theme }) => theme.secondary[500]};
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const TopCryptosItemPrice = styled.td`
  color: ${({ theme }) => theme.textBase};

  font-size: 1rem;
  line-height: 1.5rem;
`

interface TopCryptosItemChangeProps {
  isPositive?: boolean
}

export const TopCryptosItemChange = styled.td<TopCryptosItemChangeProps>`
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.tertiary[700] : theme.quaternary[700]};

  font-size: 1rem;
  line-height: 1.5rem;
`

export const TopCryptosItemTrade = styled.td`
  button {
    border: 0;

    padding: 0.5rem 1.75rem;

    border-radius: 2rem;
    background: ${({ theme }) => theme.tertiary[700]};

    color: ${({ theme }) => theme.white};

    font-size: 0.875rem;
    line-height: 1rem;
  }
`
import footerWaves from '../../assets/footerWaves.svg'

export const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7.5rem 13.5rem;

  background: url(${footerWaves}),
    linear-gradient(
      135deg,
      ${({ theme }) => theme.primary[500]} 0%,
      ${({ theme }) => theme.primary[700]} 100%
    );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const NewsletterLabel = styled.h4`
  color: ${({ theme }) => theme.primary[200]};

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
`

export const NewsletterTitle = styled.h2`
  color: ${({ theme }) => theme.white};

  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.025rem;

  margin: 0.25rem 0 1rem 0;
`

export const NewsletterDescription = styled.p`
  color: ${({ theme }) => theme.white};

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;

  width: 24rem;
`

export const NewsletterLeftContent = styled.div``

export const NewsletterRightContent = styled.div``

export const FormRoot = styled(RootForm)``

export const FormField = styled(Field)`
  display: flex;
  flex-direction: column;

  .infoArea {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`

export const FormLabel = styled(Label)`
  color: ${({ theme }) => theme.white};

  font-size: 0.875rem;
`

export const FormControl = styled(Control)`
  width: 24rem;

  border: 0;
  outline: 0;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.white};

  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);

  padding: 0.75rem 1rem;

  color: ${({ theme }) => theme.secondary[400]};

  font-size: 1rem;
  line-height: 1.5rem;

  margin: 0.5rem 0 1.31rem 0;
`

export const FormMessage = styled(Message)`
  color: ${({ theme }) => theme.quaternary[900]};

  font-size: 0.875rem;
`

export const FormSubmit = styled(Submit)`
  border: 0;
  background: ${({ theme }) => theme.primary[500]};
  color: ${({ theme }) => theme.white};

  font-size: 1rem;
  line-height: 1.5rem;

  border-radius: 2rem;
  padding: 0.875rem 0;

  width: 100%;

  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);
`
