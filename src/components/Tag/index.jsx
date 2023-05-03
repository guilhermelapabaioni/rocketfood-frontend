import { Container } from './styles.js'

export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      <p>{title}</p>
    </Container>
  )
}
