import { InputContainer, InputField } from './styles'

export function Input({ icon: Icon, size, error = false, ...rest }) {
  return (
    <InputContainer error={error}>
      {Icon && <Icon size={size} />}
      <InputField {...rest} />
    </InputContainer>
  )
}
