import { Container } from './styles'

export function ButtonText({ title, children, icon: Icon, size, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={size} />}
      <p>{title}</p>
      {children}
    </Container>
  )
}
