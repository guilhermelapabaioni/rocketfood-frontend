import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClose, BiSearchAlt } from 'react-icons/all'

import { api } from '../../services/api'
import { useAuth } from '../../auth/auth'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { Food } from '../../components/Food'

import { Container, Content, SearchedFood } from './styles'

export function Menu() {
  const navigate = useNavigate('')
  const { admin, signOut } = useAuth()

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

  function closeMenu() {
    navigate(-1)
  }

  return (
    <Container>
      <div>
        <ButtonText icon={AiOutlineClose} onClick={closeMenu} size={20} />
        <h2>Menu</h2>
      </div>
      <Content>
        <Input
          className="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={BiSearchAlt}
          size={26}
          onChange={event => setSearch(event.target.value)}
        />
        <div className="start">
          <ButtonText title={'Início'} to="/" />
          <ButtonText title={'Sair'} onClick={() => signOut()} to="/" />
        </div>
        {admin ? <ButtonText title={'Novo prato'} to="/admin/new" /> : ''}
        <SearchedFood>
          {foods.map(
            food =>
              search === food.name||food.ingredient && (
                <Food key={String(food.id)} data={food} />
              )
          )}
        </SearchedFood>
      </Content>
      <Footer />
    </Container>
  )
}
