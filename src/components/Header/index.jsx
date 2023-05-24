import { useContext } from 'react'
import { useAuth } from '../../auth/auth'
import { useFoodsProvider } from '../../auth/foodFunctions'

import {
  AiOutlineMenu,
  BiSearchAlt,
  MdOutlineReceipt,
  RxExit
} from 'react-icons/all'

import { Title } from '../Title'
import { ButtonText } from '../ButtonText'

import {
  Container,
  DivButtonMenu,
  DivInputSearch,
  DivButtonOrder,
  DivButtonExit
} from './styles'

export function Header({ children }) {
  const { admin, signOut } = useAuth()
  const { orders } = useFoodsProvider()

  return (
    <Container>
      <DivButtonMenu>
        <ButtonText icon={AiOutlineMenu} size={30} to="/menu" />
      </DivButtonMenu>
      <Title />
      <DivInputSearch>{children}</DivInputSearch>
      {admin ? (
        <DivButtonOrder>
          <ButtonText title={'Novo prato'} to="/admin/new" />
        </DivButtonOrder>
      ) : (
        <DivButtonOrder>
          <ButtonText
            icon={MdOutlineReceipt}
            size={30}
            title={`Pedidos (${orders})`}
          />
          <p>{orders}</p>
        </DivButtonOrder>
      )}
      <DivButtonExit>
        <ButtonText
          icon={RxExit}
          size={30}
          onClick={() => signOut()}
          to={'/'}
        />
      </DivButtonExit>
    </Container>
  )
}
