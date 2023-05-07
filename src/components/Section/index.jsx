import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/all';
import { useRef } from 'react';
import { ButtonText } from '../ButtonText';
import { Container, Logo, Carousel, Items, ArrowContainer } from './styles';

export function Section({ title, children, ...rest }) {
  const carousel = useRef(null);

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;

    if (carousel.current.scrollLeft === 0) {
      carousel.current.scrollLeft = carousel.current.offsetWidth;
    }
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth / 2;

    if (carousel.current.scrollLeft > carousel.current.offsetWidth) {
      carousel.current.scrollLeft = 0;
    }
  };

  return (
    <Container {...rest}>
      <Logo>{title}</Logo>
      <Carousel ref={carousel}>
        <ArrowContainer>
          <ButtonText
            className="arrowLeft"
            icon={RiArrowLeftSLine}
            size={30}
            onClick={handleLeftClick}
          />
        </ArrowContainer>
        <Items>{children}</Items>
        <ArrowContainer>
          <ButtonText
            className="arrowRight"
            icon={RiArrowRightSLine}
            size={30}
            onClick={handleRightClick}
          />
        </ArrowContainer>
      </Carousel>
    </Container>
  );
}
