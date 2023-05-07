import { useState } from 'react'
import { useAuth } from '../../auth/auth'

import { Title } from '../../components/Title'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Content, FormContent, FormInput } from './styles'

import Toast from '../../components/Toast'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'

export function SignIn() {
  const { signIn } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  function handleSignIn() {
    try {
      if (!email) {
        setEmailError(true)
      } else if (!password) {
        setPasswordError(true)
      }

      signIn({ email, password })
    } catch (error) {
      if (error.message) {
        toast.error(error.response.data.message)
        setEmailError(true)
        setPasswordError(true)
      } else {
        toast.error('We have an error in our service, try again later')
      }
    }
  }

  return (
    <Toast>
      <Container>
        <Content>
          <Title />
          <Form>
            <FormContent>
              <h2>Sign In</h2>
              <FormInput>
                <label htmlFor="">E-mail</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  error={emailError}
                  onChange={event => {
                    setEmail(event.target.value)
                    setEmailError(false)
                  }}
                />
              </FormInput>
              <FormInput>
                <label htmlFor="">Password</label>
                <Input
                  type="password"
                  placeholder="Insira sua senha"
                  error={passwordError}
                  onChange={event => {
                    setPassword(event.target.value)
                    setPasswordError(false)
                  }}
                />
              </FormInput>
              <Button title={'Sign In'} onClick={handleSignIn} />
              <ButtonText title="Create your account" to="/register" />
            </FormContent>
          </Form>
        </Content>
      </Container>
    </Toast>
  )
}
