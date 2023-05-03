import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/all'
import { useRef } from 'react'

import { ButtonText } from '../ButtonText'

import { Container, Logo, Carousel, Items } from './styles'

export function Section({ title, children, ...rest }) {
  const carousel = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2

    if (carousel.current.scrollLeft === 0) {
      carousel.current.scrollLeft = carousel.current.offsetWidth
    }
  }

  const handleRightClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2
    console.log(carousel.current.scrollLeft)

    if (carousel.current.scrollLeft > carousel.current.offsetWidth) {
      carousel.current.scrollLeft = 0
    }
  }

  return (
    <Container {...rest}>
      <Logo>{title}</Logo>
      <ButtonText
        className="arrowLeft"
        icon={RiArrowLeftSLine}
        size={30}
        onClick={handleLeftClick}
      />
      <ButtonText
        className="arrowRight"
        icon={RiArrowRightSLine}
        size={30}
        onClick={handleRightClick}
      />
      <Carousel ref={carousel}>
        {children}
        {/* <Items></Items> */}
      </Carousel>
    </Container>
  )
}
