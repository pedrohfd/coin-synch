import { Header } from '../../components/Header'
import { SignUp } from '../../components/SignUp'

import {
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
  TopCryptosContent,
  TopCryptosTitle,
  TopCryptosTable,
  TopCryptosItemId,
  TopCryptosItemName,
  TopCryptosItemPrice,
  TopCryptosItemChange,
  TopCryptosItemTrade,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  NewsletterContent,
  NewsletterLeftContent,
  NewsletterLabel,
  NewsletterTitle,
  NewsletterDescription,
  NewsletterRightContent,
  FormRoot,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormSubmit,
  FooterContent,
  FooterCopyright,
} from './styles'

import waves from '../../assets/waves.png'

import { Arrow } from '../../assets/Svg/Arrow'
import { Chart } from '../../assets/Svg/Chart'
import { Crypto } from '../../assets/Svg/Crypto'
import { Currency } from '../../assets/Svg/Currency'
import { Electronics } from '../../assets/Svg/Electronics'
import { Logo } from '../../assets/Svg/Logo'

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

      <TopCryptosContent>
        <TopCryptosTitle>Top Cryptos</TopCryptosTitle>

        <CollapsibleRoot>
          <TopCryptosTable>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto</th>
                <th>Price</th>
                <th>Change</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TopCryptosItemId>1</TopCryptosItemId>
                <TopCryptosItemName>
                  Bitcoin <span>BTC</span>
                </TopCryptosItemName>
                <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                <TopCryptosItemChange isPositive={0.5 >= 0}>
                  +0.5%
                </TopCryptosItemChange>
                <TopCryptosItemTrade>
                  <button>Buy</button>
                </TopCryptosItemTrade>
              </tr>
              <tr>
                <TopCryptosItemId>2</TopCryptosItemId>
                <TopCryptosItemName>
                  Bitcoin <span>BTC</span>
                </TopCryptosItemName>
                <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                <TopCryptosItemChange isPositive={0.5 >= 0}>
                  +0.5%
                </TopCryptosItemChange>
                <TopCryptosItemTrade>
                  <button>Buy</button>
                </TopCryptosItemTrade>
              </tr>
              <tr>
                <TopCryptosItemId>3</TopCryptosItemId>
                <TopCryptosItemName>
                  Bitcoin <span>BTC</span>
                </TopCryptosItemName>
                <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                <TopCryptosItemChange isPositive={0.5 >= 0}>
                  +0.5%
                </TopCryptosItemChange>
                <TopCryptosItemTrade>
                  <button>Buy</button>
                </TopCryptosItemTrade>
              </tr>
              <tr>
                <TopCryptosItemId>4</TopCryptosItemId>
                <TopCryptosItemName>
                  Bitcoin <span>BTC</span>
                </TopCryptosItemName>
                <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                <TopCryptosItemChange isPositive={0.5 >= 0}>
                  +0.5%
                </TopCryptosItemChange>
                <TopCryptosItemTrade>
                  <button>Buy</button>
                </TopCryptosItemTrade>
              </tr>
              <tr>
                <TopCryptosItemId>5</TopCryptosItemId>
                <TopCryptosItemName>
                  Bitcoin <span>BTC</span>
                </TopCryptosItemName>
                <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                <TopCryptosItemChange isPositive={0.5 >= 0}>
                  +0.5%
                </TopCryptosItemChange>
                <TopCryptosItemTrade>
                  <button>Buy</button>
                </TopCryptosItemTrade>
              </tr>
            </tbody>
          </TopCryptosTable>

          <CollapsibleContent>
            <TopCryptosTable>
              <tbody>
                <tr>
                  <TopCryptosItemId>1</TopCryptosItemId>
                  <TopCryptosItemName>
                    Bitcoin <span>BTC</span>
                  </TopCryptosItemName>
                  <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                  <TopCryptosItemChange isPositive={0.5 >= 0}>
                    +0.5%
                  </TopCryptosItemChange>
                  <TopCryptosItemTrade>
                    <button>Buy</button>
                  </TopCryptosItemTrade>
                </tr>
                <tr>
                  <TopCryptosItemId>2</TopCryptosItemId>
                  <TopCryptosItemName>
                    Bitcoin <span>BTC</span>
                  </TopCryptosItemName>
                  <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                  <TopCryptosItemChange isPositive={0.5 >= 0}>
                    +0.5%
                  </TopCryptosItemChange>
                  <TopCryptosItemTrade>
                    <button>Buy</button>
                  </TopCryptosItemTrade>
                </tr>
                <tr>
                  <TopCryptosItemId>3</TopCryptosItemId>
                  <TopCryptosItemName>
                    Bitcoin <span>BTC</span>
                  </TopCryptosItemName>
                  <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                  <TopCryptosItemChange isPositive={0.5 >= 0}>
                    +0.5%
                  </TopCryptosItemChange>
                  <TopCryptosItemTrade>
                    <button>Buy</button>
                  </TopCryptosItemTrade>
                </tr>
                <tr>
                  <TopCryptosItemId>4</TopCryptosItemId>
                  <TopCryptosItemName>
                    Bitcoin <span>BTC</span>
                  </TopCryptosItemName>
                  <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                  <TopCryptosItemChange isPositive={0.5 >= 0}>
                    +0.5%
                  </TopCryptosItemChange>
                  <TopCryptosItemTrade>
                    <button>Buy</button>
                  </TopCryptosItemTrade>
                </tr>
                <tr>
                  <TopCryptosItemId>5</TopCryptosItemId>
                  <TopCryptosItemName>
                    Bitcoin <span>BTC</span>
                  </TopCryptosItemName>
                  <TopCryptosItemPrice>US$ 40,000</TopCryptosItemPrice>
                  <TopCryptosItemChange isPositive={0.5 >= 0}>
                    +0.5%
                  </TopCryptosItemChange>
                  <TopCryptosItemTrade>
                    <button>Buy</button>
                  </TopCryptosItemTrade>
                </tr>
              </tbody>
            </TopCryptosTable>
          </CollapsibleContent>

          <CollapsibleTrigger asChild>
            <button>View more +</button>
          </CollapsibleTrigger>
        </CollapsibleRoot>
      </TopCryptosContent>

      <NewsletterContent>
        <NewsletterLeftContent>
          <NewsletterLabel>Lorem ipsum</NewsletterLabel>

          <NewsletterTitle>Lorem ipsum</NewsletterTitle>

          <NewsletterDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </NewsletterDescription>
        </NewsletterLeftContent>

        <NewsletterRightContent>
          <FormRoot>
            <FormField name='email'>
              <div className='infoArea'>
                <FormLabel>Email</FormLabel>
                <FormMessage match='valueMissing'>Enter your email</FormMessage>
                <FormMessage match='typeMismatch'>
                  Please provide a valid email
                </FormMessage>
              </div>

              <FormControl asChild>
                <input type='email' placeholder='Email' required />
              </FormControl>
            </FormField>

            <FormSubmit asChild>
              <button type='submit'>Subscribe</button>
            </FormSubmit>
          </FormRoot>
        </NewsletterRightContent>
      </NewsletterContent>

      <FooterContent>
        <FooterCopyright>
          Copyright © 2022 - All rights reserved
        </FooterCopyright>

        <Logo />
      </FooterContent>
    </HomeContainer>
  )
}
