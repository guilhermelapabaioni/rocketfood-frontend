import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../../services/api'

import {
  IoChevronBackOutline,
  AiOutlineMinus,
  AiOutlinePlus,
  IoReceiptOutline
} from 'react-icons/all'

import { Header } from '../../../components/Header'
import { ButtonText } from '../../../components/ButtonText'
import { Tag } from '../../../components/Tag'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

import {
  Container,
  Content,
  FoodImage,
  Informations,
  Tags,
  Items
} from './styles'

export function Details() {
  const params = useParams()

  const [data, setData] = useState()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`)
      setData(response.data)
    }

    fetchFood()
  }, [])

  return (
    <Container>
      <Header />
      {data ? (
        <Content>
          <div>
            <ButtonText icon={IoChevronBackOutline} title={'voltar'} to="/" />
          </div>
          <FoodImage className="foodImage">
            <img
              src={`http://localhost:3000/tmp/uploads/${data.image}`}
              alt={`Imagem da comida ${data.name}`}
            />
          </FoodImage>
          <Informations>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <Tags>
              {data.ingredient &&
                data.ingredient.map(ingredient => (
                  <Tag
                    key={String(ingredient.id)}
                    title={ingredient.ingredient}
                  />
                ))}
            </Tags>
            <Items>
              <ButtonText icon={AiOutlineMinus} />
              <p>01</p>
              <ButtonText icon={AiOutlinePlus} />
              <Button icon={IoReceiptOutline} title={`pedir ∙ ${data.price}`} />
            </Items>
          </Informations>
        </Content>
      ) : (
        <Content>Carregando...</Content>
      )}

      <Footer />
    </Container>
  )
}
