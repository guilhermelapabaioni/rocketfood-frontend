import {RiArrowRightSLine} from 'react-icons/all'

export const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      {RiArrowRightSLine}
    </div>
  )
}
