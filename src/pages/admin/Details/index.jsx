import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'

import { IoChevronBackOutline } from 'react-icons/all'
import { Header } from '../../../components/Header'
import { ButtonText } from '../../../components/ButtonText'
import { Tag } from '../../../components/Tag'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

import { Container, Content, FoodImage, Informations, Tags } from './styles'

export function Details() {
  const navigate = useNavigate('')
  const params = useParams()

  const [data, setData] = useState()

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`)
      setData(response.data)
    }

    fetchFood()
  }, [])

  function fecthEdit() {
    navigate(`/admin/details/edit/${params.id}`)
  }

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
              src={
                `http://localhost:3000/tmp/uploads/${data.image}` ||
                `https://dashboard.render.com/web/srv-chquki2k728ivvvp8b40/tmp/uploads/${data.image}`
              }
              alt={`Imagem da comida ${data.name}`}
            />
          </FoodImage>
          <Informations>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <Tags>
              {data.ingredient.map(ingredient => (
                <Tag
                  key={String(ingredient.id)}
                  title={ingredient.ingredient}
                />
              ))}
            </Tags>
            <Button title={`Editar prato`} onClick={fecthEdit} />
          </Informations>
        </Content>
      ) : (
        <Content>Carregando...</Content>
      )}
      <Footer />
    </Container>
  )
}
