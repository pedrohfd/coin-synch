import { Header } from '../../components/Header'
import { HomeContainer } from './styles'

export const Home = () => {
  fetch('http://localhost:3000/users').then((response) =>
    console.log(response.json()),
  )

  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  )
}
