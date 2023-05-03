import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../auth/auth'
import { api } from '../../../services/api'
import { IoChevronBackOutline, AiOutlineCloudUpload } from 'react-icons/all'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { ButtonText } from '../../../components/ButtonText'
import { Form } from '../../../components/Form'
import { Label } from '../../../components/Label'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { Textarea } from '../../../components/Textarea'
import { Button } from '../../../components/Button'
import { FoodItem } from '../../../components/FoodItem'

import { Container, Content } from './styles'

import { ToastContainer, toast } from 'react-toastify'

export function New() {
  const navigate = useNavigate('')

  const { admin } = useAuth()

  const [name, setName] = useState('')
  let [category, setCategory] = useState('refeicao')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [imageFoodFile, setImageFoodFile] = useState()

  function handleChangeFoodImage(event) {
    const file = event.target.files[0]
    setImageFoodFile(file)
  }

  function addIngredientOnKeyDown(event) {
    if (setNewIngredient(event.target.value) === ['']) {
      toast.error('Please enter the value of the new ingredient')
    } else if (event.key === 'Enter') {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function addIngredientOnClick() {
    if (newIngredient === '') {
      toast.error('Please enter the value of the new ingredient')
    } else {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function deleteIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  async function handleCreateFood() {
    try {
      const data = {
        name,
        category,
        ingredients,
        price,
        description
      }
      const dataJSON = JSON.stringify(data)

      const fileUploadForm = new FormData()
      fileUploadForm.append('image', imageFoodFile)
      fileUploadForm.append('data', dataJSON)

      await api.post(`/foods/${admin.id}`, fileUploadForm, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      navigate('/')
      return toast.message('Prato criado com sucesso!')
    } catch (error) {
      toast.error(
        'Probably we have some problem in the system, try again later'
      )
    }
  }

  return (
    <Container>
      <Header />
      <ToastContainer />
      <Content>
        <ButtonText icon={IoChevronBackOutline} title={'voltar'} to="/" />
        <Form title="Novo prato" className="form" enctype="multipart/form-data">
          <div className="items-group">
            <Label title="Imagem do prato" />
            <Input
              type="file"
              icon={AiOutlineCloudUpload}
              size={30}
              onChange={handleChangeFoodImage}
            />
          </div>
          <div className="items-group">
            <Label title="Nome do prato" />
            <Input
              type="text"
              placeholder="Salada César"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="items-group">
            <Label title="Categoria" />
            <Select onChange={event => setCategory(event.target.value)}>
              <option value="">Selecione a categoria do prato</option>
              <option value="refeicao">Refeição</option>
              <option value="prato-principal">Prato principal</option>
              <option value="sobremesa">Sobremesa</option>
            </Select>
          </div>
          <div className="items-group foodItem">
            <Label title="Ingredientes" />
            <div>
              {ingredients.map((ingredient, index) => (
                <FoodItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => deleteIngredient(ingredient)}
                />
              ))}
              <FoodItem
                isNew
                placeholder="Ingrediente"
                value={newIngredient}
                onChange={event => setNewIngredient(event.target.value)}
                onKeyDown={addIngredientOnKeyDown}
                onClick={addIngredientOnClick}
              />
            </div>
          </div>
          <div className="items-group">
            <Label title="Preço" />
            <Input
              type="text"
              placeholder="R$ 40,00"
              onChange={event => setPrice(`R$ ` + event.target.value)}
            />
          </div>
          <div className="items-group">
            <Label title="Descrição" />
            <Textarea
              placeholder="A Salada César é uma opção refrescante para o verão."
              cols="200"
              rows="5"
              onChange={event => setDescription(event.target.value)}
            />
          </div>
        </Form>
        <div className="buttons">
          <Button title="Criar prato" onClick={handleCreateFood} />
        </div>
      </Content>
      <Footer />
    </Container>
  )
}
