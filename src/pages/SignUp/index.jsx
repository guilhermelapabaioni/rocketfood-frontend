import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

import { Form } from '../../components/Form'
import { Title } from '../../components/Title'
import { Label } from '../../components/Label'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, FormContent, FormInput } from './styles'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

export function SignUp() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  async function signUp() {
    try {
      if (!name) {
        setNameError(true)
      } else if (!email) {
        setEmailError(true)
      } else if (!password) {
        setPasswordError(true)
      } else if (!confirmPassword) {
        setConfirmPasswordError(true)
      }

      await api.post('/users', {
        name,
        email,
        password,
        confirmPassword
      })
      toast.success('Your account has been signed up.')
      navigate('/')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('We have an error in our service, try again later.')
      }
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Content>
        <Title />
        <Form>
          <FormContent>
            <h2>Create your account</h2>
            <FormInput>
              <Label title={'Name'} />
              <Input
                type="text"
                placeholder={'Insert your name'}
                error={nameError}
                onChange={event => {
                  setName(event.target.value)
                  setNameError(false) // limpa o erro quando o usuário começa a digitar novamente
                }}
              />
            </FormInput>
            <FormInput>
              <Label title={'E-mail'} />
              <Input
                type="email"
                placeholder="your@email.com"
                error={emailError}
                onChange={event => {
                  setEmail(event.target.value)
                  setEmailError(false) // limpa o erro quando o usuário começa a digitar novamente
                }}
              />
            </FormInput>
            <FormInput>
              <Label title={'Password'} />
              <Input
                type="password"
                placeholder="Insert your password"
                error={passwordError}
                onChange={event => {
                  setPassword(event.target.value)
                  setPasswordError(false) // limpa o erro quando o usuário começa a digitar novamente
                }}
              />
              <Input
                type="password"
                placeholder="Confirm your password"
                error={confirmPasswordError}
                onChange={event => {
                  setConfirmPassword(event.target.value)
                  setConfirmPasswordError(false)
                }}
              />
            </FormInput>
            <Button title="Sign Up" onClick={signUp} />
            <ButtonText title="Already have an account?" to="/" />
          </FormContent>
        </Form>
      </Content>
    </Container>
  )
}
