import { Arrow } from '../../assets/Svg/Arrow'
import { Header } from '../../components/Header'
import { SignUp } from '../../components/SignUp'
import {
  AboutArea,
  AboutContent,
  FooterWaves,
  HomeContainer,
  HomeContent,
  HomeDescription,
  HomeSignUpButton,
  HomeTitle,
  HomeRightContent,
  Tags,
  AboutLeftContent,
  Card,
  CardLabel,
  CardTitle,
  CardDescription,
  AboutRightContent,
  AboutLabel,
  AboutTitle,
  AboutDescription,
  AboutSignUpButton,
} from './styles'
import waves from '../../assets/waves.png'
import { Crypto } from '../../assets/Svg/Crypto'
import { Currency } from '../../assets/Svg/Currency'
import { Chart } from '../../assets/Svg/Chart'
import { Electronics } from '../../assets/Svg/Electronics'

export const Home = () => {
  fetch('http://localhost:3000/users').then((response) =>
    console.log(response.json()),
  )

  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        <HomeRightContent>
          <HomeTitle>Lorem ipsum dolor sit amet, consectetur</HomeTitle>

          <HomeDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </HomeDescription>

          <SignUp>
            <HomeSignUpButton>
              Sign up now <Arrow />
            </HomeSignUpButton>
          </SignUp>

          <span className='tagsArea'>
            <Tags>Cryptos</Tags>
            <Tags>NFTs</Tags>
            <Tags>Games</Tags>
          </span>
        </HomeRightContent>

        <FooterWaves src={waves} />
      </HomeContent>
      <AboutArea>
        <AboutContent>
          <AboutLeftContent>
            <Card>
              <Crypto />
              <CardLabel>For your company</CardLabel>
              <CardTitle>Crypto Solutions</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </CardDescription>
            </Card>
            <Card>
              <Currency />
              <CardLabel>For your company</CardLabel>
              <CardTitle>Crypto Solutions</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </CardDescription>
            </Card>
            <Card>
              <Chart />
              <CardLabel>For your company</CardLabel>
              <CardTitle>Crypto Solutions</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </CardDescription>
            </Card>
            <Card>
              <Electronics />
              <CardLabel>For your company</CardLabel>
              <CardTitle>Crypto Solutions</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,
              </CardDescription>
            </Card>
          </AboutLeftContent>
          <AboutRightContent>
            <section>
              <AboutLabel>Lorem ipsum </AboutLabel>
              <AboutTitle>Lorem ipsum </AboutTitle>
              <AboutDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </AboutDescription>
              <SignUp>
                <AboutSignUpButton>Sign up now</AboutSignUpButton>
              </SignUp>
            </section>
          </AboutRightContent>
        </AboutContent>
      </AboutArea>
    </HomeContainer>
  )
}
