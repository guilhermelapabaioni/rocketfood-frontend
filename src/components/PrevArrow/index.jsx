import { RiArrowLeftSLine } from 'react-icons/all'

export const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      {RiArrowLeftSLine}
    </div>
  )
}
