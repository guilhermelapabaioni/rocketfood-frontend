import { AiOutlineClose, BiSearchAlt } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../auth/auth'

import { ButtonText } from '../../../components/ButtonText'
import { Input } from '../../../components/Input'
import { Footer } from '../../../components/Footer'

import { Container, Content } from './styles'

export function Menu() {
  const navigate = useNavigate('')
  const {signOut} = useAuth()

  function closeMenu(){
    navigate(-1)
  }

  return (
    <Container>
      <div>
        <ButtonText icon={AiOutlineClose} onClick={closeMenu}/>
        <h2>Menu</h2>
      </div>
      <Content>
        <Input icon={BiSearchAlt} placeholder={'Busque por pratos ou ingredientes'} />
        <ButtonText title={'Sair'} onClick={() => signOut()} to='/'/>
      </Content>
      <Footer/>
    </Container>
  )
}
