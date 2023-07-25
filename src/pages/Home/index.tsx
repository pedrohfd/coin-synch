import { Arrow } from '../../assets/Svg/Arrow'
import { Header } from '../../components/Header'
import { SignUp } from '../../components/SignUp'
import {
  Area,
  Description,
  FooterWaves,
  HomeContainer,
  HomeContent,
  RightContent,
  SignUpButton,
  Tags,
  Title,
} from './styles'

export const Home = () => {
  fetch('http://localhost:3000/users').then((response) =>
    console.log(response.json()),
  )

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <RightContent>
          <Title>Lorem ipsum dolor sit amet, consectetur</Title>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </Description>

          <SignUp>
            <SignUpButton>
              Sign up now <Arrow />
            </SignUpButton>
          </SignUp>

          <span className='tagsArea'>
            <Tags>Cryptos</Tags>
            <Tags>NFTs</Tags>
            <Tags>Games</Tags>
          </span>
        </RightContent>

        <FooterWaves />
      </HomeContent>
      <Area />
    </HomeContainer>
  )
}
