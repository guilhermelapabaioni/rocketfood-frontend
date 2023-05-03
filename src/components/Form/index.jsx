import { Container, Logo } from './styles'

export function Form({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <Logo>{title}</Logo>
      {children}
    </Container>
  )
}
