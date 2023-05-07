import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useFoodsProvider } from '../../../auth/foodFunctions'
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
  const [quantity, setQuantity] = useState(1)

  const { incrementOrders } = useFoodsProvider()

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
              <ButtonText
                icon={AiOutlineMinus}
                size={24}
                onClick={() => setQuantity(quantity - 1)}
              />
              <p>{quantity}</p>
              <ButtonText
                icon={AiOutlinePlus}
                size={24}
                onClick={() => setQuantity(quantity + 1)}
              />
              <Button
                icon={IoReceiptOutline}
                title={`pedir ∙ R$ ${data.price * quantity},00`}
                onClick={incrementOrders}
              />
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
