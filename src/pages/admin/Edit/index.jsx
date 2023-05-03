import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { IoChevronBackOutline, AiOutlineCloudUpload } from 'react-icons/all'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { ButtonText } from '../../../components/ButtonText'
import { Form } from '../../../components/Form'
import { Label } from '../../../components/Label'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { FoodItem } from '../../../components/FoodItem'
import { Textarea } from '../../../components/Textarea'
import { Button } from '../../../components/Button'

import { Container, Content } from './styles'

export function Edit() {
  const navigate = useNavigate('')
  const params = useParams()

  const [data, setData] = useState('')

  const [name, setName] = useState('')
  const [category, setCategory] = useState(data.category)

  const [oldIngredients, setOldIngredients] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  let [ingredientsMaxId, setIngredientsMaxId] = useState('')

  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [imageFoodFile, setImageFoodFile] = useState()

  function handleChangeFoodImage(event) {
    const file = event.target.files[0]
    setImageFoodFile(file)
  }

  async function handleEditFood() {
    try {
      const dataUpdated = {
        name: name ? name : data.name,
        category: category ? category : data.category,
        price: price ? price : data.price,
        description: description ? description : data.description,
        oldIngredients,
        ingredients
      }
      const dataJSON = JSON.stringify(dataUpdated)

      const fileUploadForm = new FormData()

      fileUploadForm.append('image', imageFoodFile)
      fileUploadForm.append('data', dataJSON)

      await api.put(`/foods/${params.id}`, fileUploadForm, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      alert(`Prato ${data.name} atualizado com sucesso!`)
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel atualizar o perfil.')
      }
    }
  }

  function addIngredient(event) {
    if (event.key === 'Enter') {
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient('')
    }
  }

  function deleteIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
    setOldIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }

  async function deleteFood() {
    const confirm = window.confirm('Are you sure you want to delete this note?')
    if (confirm) {
      await api.delete(`/foods/${params.id}`)
      navigate('/')
    }
  }

  useEffect(() => {
    async function fetchFoods() {
      const food = await api.get(`/foods/${params.id}`)
      setData(food.data)
      setOldIngredients(food.data.ingredient)

      const ingredientsMaxID = await api.get(`/ingredients/${params.id}`)
      setIngredientsMaxId(ingredientsMaxID.data)
    }

    fetchFoods()
  }, [])

  return (
    <Container>
      <Header />
      {data ? (
        <Content>
          <ButtonText icon={IoChevronBackOutline} title={'voltar'} to="/" />
          <Form title="Editar prato" className="form" enctype="multipart/form-data">
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
                placeholder={data.name}
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
                {oldIngredients.map(ingredient => (
                  <FoodItem
                    key={String(ingredient.id)}
                    value={ingredient.ingredient}
                    onClick={() => deleteIngredient(ingredient)}
                  />
                ))}
                {ingredients.map(
                  (ingredient, index) => (
                    (index = ++ingredientsMaxId),
                    (
                      <FoodItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => deleteIngredient(ingredient)}
                      />
                    )
                  )
                )}
                <FoodItem
                  isNew
                  placeholder="Ingrediente"
                  value={newIngredient}
                  onChange={event => setNewIngredient(event.target.value)}
                  onKeyPress={addIngredient}
                />
              </div>
            </div>
            <div className="items-group">
              <Label title="Preço" />
              <Input
                type="text"
                placeholder={data.price}
                onChange={event => setPrice(event.target.value)}
              />
            </div>
            <div className="items-group">
              <Label title="Descrição" />
              <Textarea
                placeholder={data.description}
                cols="200"
                rows="5"
                onChange={event => setDescription(event.target.value)}
              />
            </div>
            <div className="buttons">
              <Button title="Excluir prato" onClick={deleteFood} />
              <Button title="Salvar alterações" onClick={handleEditFood} />
            </div>
          </Form>
        </Content>
      ) : (
        <div>Carregando...</div>
      )}
      <Footer />
    </Container>
  )
}
