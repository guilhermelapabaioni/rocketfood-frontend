import { useAuth } from '../../auth/auth'
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
  const { admin } = useAuth()
  
  const foodImageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : ''

  return (
    <Container {...rest}>
      {admin ? (
        <Content>
          <ButtonText
            icon={BiEditAlt}
            size={24}
            to={`/admin/details/edit/${data.id}`}
          />
          <ButtonText to={`/admin/details/${data.id}`}>
            <img src={foodImageURL} alt={`Imagem do prato ${data.name}`} />
          </ButtonText>
          <ButtonText
            title={data.name}
            icon={MdNavigateNext}
            to={`/admin/details/${data.id}`}
          />
          <p>{data.price}</p>
        </Content>
      ) : (
        <Content>
          <ButtonText icon={AiOutlineHeart} size={22} />
          <ButtonText to={`/details/${data.id}`}>
            <img
              src={foodImageURL}
              alt={`Imagem do prato ${data.name}`}
            />
          </ButtonText>
          <ButtonText
            title={data.name}
            icon={MdNavigateNext}
            to={`/details/${data.id}`}
          />
          <p>{data.price}</p>
          <Items>
            <ButtonText icon={AiOutlineMinus} size={20} />
            <p>01</p>
            <ButtonText icon={AiOutlinePlus} size={20} />
          </Items>
          <Button title={'Incluir'} />
        </Content>
      )}
    </Container>
  )
}
