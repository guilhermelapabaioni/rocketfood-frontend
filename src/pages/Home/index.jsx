import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Food } from '../../components/Food'
import { Footer } from '../../components/Footer'

import { Container, Content, Intro } from './styles'

export function Home() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    async function fecthFoods() {
      const response = await api.get(`/foods`)
      setFoods(response.data)
    }

    fecthFoods()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <Intro>
          <div>
            <img src={'./src/assets/pngegg 1.png'} alt="" className="mobile" />
            <img src={'./src/assets/pngegg 1.png'} alt="" className="desktop" />
          </div>
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Intro>
        <Section title="Refeições">
          {foods.map(
            food =>
              food.category === 'refeicao' && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </Section>
        <Section title="Pratos principais">
          {foods.map(
            food =>
              food.category === 'prato-principal' && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </Section>
        <Section title="Sobremesas">
          {foods.map(
            food =>
              food.category === 'sobremesa' && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}
