import { useAuth } from '../../auth/auth'

import {
  AiOutlineMenu,
  BiSearchAlt,
  MdOutlineReceipt,
  RxExit
} from 'react-icons/all'

import { Title } from '../Title'
import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import {
  Container,
  DivButtonMenu,
  DivInputSearch,
  DivButtonOrder,
  DivButtonExit
} from './styles'

export function Header() {
  const { admin, signOut } = useAuth()

  return (
    <Container>
      <DivButtonMenu>
        <ButtonText icon={AiOutlineMenu} size={30} to="/menu" />
      </DivButtonMenu>
      <Title />
      <DivInputSearch>
        <Input
          className="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={BiSearchAlt}
          size={26}
        />
      </DivInputSearch>
      {admin ? (
        ''
      ) : (
        <DivButtonOrder>
          <ButtonText
            icon={MdOutlineReceipt}
            size={30}
            title={`Pedidos ` + 0}
          />
          <p>0</p>
        </DivButtonOrder>
      )}
      <DivButtonExit>
        <ButtonText icon={RxExit} size={30} onClick={() => signOut()} to={'/'} />
      </DivButtonExit>
    </Container>
  )
}
