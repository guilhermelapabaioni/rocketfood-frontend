import { BiSearchAlt } from 'react-icons/all'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Food } from '../../components/Food'
import { Footer } from '../../components/Footer'

import { Container, Content, Intro } from './styles'

export function Home() {
  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await api.get(`/foods?search=${search}`)
        setFoods(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchFoods()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          className="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={BiSearchAlt}
          size={26}
          onChange={event => setSearch(event.target.value)}
        />
      </Header>
      <Content>
        <Intro>
          <div>
            <img src={'../src/assets/pngegg 1.png'} alt="" className="mobile" />
            <img src={'../src/assets/pngegg 1.png'} alt="" className="desktop" />
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
        <Section title="Sobremesas">
          {foods.map(
            food =>
              food.category === 'sobremesa' && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </Section>
        <Section title="Bebidas">
          {foods.map(
            food =>
              food.category === 'bebida' && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}
