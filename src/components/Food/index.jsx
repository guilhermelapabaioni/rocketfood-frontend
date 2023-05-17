import { useState } from 'react'
import { useAuth } from '../../auth/auth'
import { useFoodsProvider } from '../../auth/foodFunctions'

import { api } from '../../services/api'

import {
  AiOutlineHeart,
  BiEditAlt,
  MdNavigateNext,
  AiOutlineMinus,
  AiOutlinePlus
} from 'react-icons/all'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'

import { Container, Content, Items } from './styles'

export function Food({ data, ...rest }) {
  // Providers
  const { admin } = useAuth()
  const { incrementOrders } = useFoodsProvider()

  const [quantity, setQuantity] = useState(0)

  const foodImageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : ''

  return (
    <Container {...rest}>
      {admin ? (
        <Content>
          <ButtonText
            className="buttonIcon"
            icon={BiEditAlt}
            size={24}
            to={`/admin/details/edit/${data.id}`}
          />
          <ButtonText to={`/admin/details/${data.id}`}
            className="foodImage"
          >
            <img
              src={foodImageURL}
              alt={`Imagem do prato ${data.name}`}
            />
          </ButtonText>
          <ButtonText
            className="foodName"
            title={data.name}
            icon={MdNavigateNext}
            to={`/admin/details/${data.id}`}
          />
          <p>{'R$ ' + data.price}</p>
        </Content>
      ) : (
        <Content>
          <ButtonText className="buttonIcon" icon={AiOutlineHeart} size={24} />
          <ButtonText to={`/admin/details/${data.id}`} className="foodImage">
            <img src={foodImageURL} alt={`Imagem do prato ${data.name}`} />
          </ButtonText>
          <ButtonText
            className="foodName"
            title={data.name}
            icon={MdNavigateNext}
            to={`/admin/details/${data.id}`}
          />
          <p>{'R$ ' + data.price}</p>
          <Items>
            <ButtonText
              icon={AiOutlineMinus}
              size={20}
              onClick={() => setQuantity(quantity - 1)}
            />
            <p>{quantity}</p>
            <ButtonText
              icon={AiOutlinePlus}
              size={20}
              onClick={() => setQuantity(quantity + 1)}
            />
          </Items>
          <Button title={'Incluir'} onClick={incrementOrders} />
        </Content>
      )}
    </Container>
  )
}
