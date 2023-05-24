import { Button } from '../Button'

import { Container } from './styles'

export function WindowConfirm({ message, onConfirm, onCancel }) {
  return (
    <Container>
      <p>{message}</p>
      <div>
        <Button title={'Confirm'} onClick={onConfirm} />
        <Button title={'Cancel'} onClick={onCancel} />
      </div>
    </Container>
  )
}
