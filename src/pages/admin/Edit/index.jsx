import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { IoChevronBackOutline, AiOutlineCloudUpload } from 'react-icons/all'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { WindowConfirm } from '../../../components/WindowConfirm'
import { ButtonText } from '../../../components/ButtonText'
import { Form } from '../../../components/Form'
import { Label } from '../../../components/Label'
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { Ingredient } from '../../../components/Ingredient'
import { Textarea } from '../../../components/Textarea'
import { Button } from '../../../components/Button'

import { toast } from 'react-toastify'
import { Container, Content, FoodItem, FormButtons } from './styles'

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

  const [deleted, setDeleted] = useState(false)

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

      toast.success(`Food ${data.name} updated with success!`)
      navigate('/')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('It was not possible to update the food.')
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
      await api.delete(`/foods/${params.id}`)
      toast.success('Food deleted with success.')
      navigate('/')
  }

  const handleConfirmDelete = () => {
    setDeleted(false)
    deleteFood()
  }

  const handleCancelDelete = () => {
    setDeleted(false)
  }

  const handleClickDelete = () => {
    setDeleted(true)
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
          <Form
            title="Editar prato"
            className="form"
            enctype="multipart/form-data"
          >
            <div className="group header-grid">
              <div className="items-group">
                <Label title="Imagem do prato" />
                <Input
                  type="file"
                  icon={AiOutlineCloudUpload}
                  size={26}
                  onChange={handleChangeFoodImage}
                  placeholder={data.image}
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
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebidas</option>
                </Select>
              </div>
            </div>
            <div className="group main-grid">
              <FoodItem>
                <Label title="Ingredientes" />
                <div className="ingredients">
                  <Ingredient
                    isNew
                    placeholder="Ingrediente"
                    value={newIngredient}
                    onChange={event => setNewIngredient(event.target.value)}
                    onKeyPress={addIngredient}
                  />
                  {ingredients.map(
                    (ingredient, index) => (
                      (index = ++ingredientsMaxId),
                      (
                        <Ingredient
                          key={String(index)}
                          value={ingredient}
                          onClick={() => deleteIngredient(ingredient)}
                        />
                      )
                    )
                  )}
                  {oldIngredients.map(ingredient => (
                    <Ingredient
                      key={String(ingredient.id)}
                      value={ingredient.ingredient}
                      onClick={() => deleteIngredient(ingredient)}
                    />
                  ))}
                </div>
              </FoodItem>
              <div className="items-group">
                <Label title="Preço" />
                <Input
                  type="text"
                  placeholder={data.price}
                  onChange={event => setPrice(event.target.value)}
                />
              </div>
            </div>
            <div className="group items-group">
              <Label title="Descrição" />
              <Textarea
                placeholder={data.description}
                cols="200"
                rows="5"
                onChange={event => setDescription(event.target.value)}
              />
            </div>
            <FormButtons>
              <Button
                title="Excluir prato"
                onClick={handleClickDelete}
                className="buttonDelete"
              />
              {deleted && (
                <WindowConfirm
                  message={'You sure you want to delete this food?'}
                  onConfirm={handleConfirmDelete}
                  onCancel={handleCancelDelete}
                />
              )}
              <Button title="Salvar alterações" onClick={handleEditFood} />
            </FormButtons>
          </Form>
        </Content>
      ) : (
        <div>Carregando...</div>
      )}
      <Footer />
    </Container>
  )
}
