import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_200};
  padding: 1rem 1.4rem;
  border-radius: .6rem;
  min-width: 16rem;
  min-height: 24rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  > .buttonIcon {
    align-self: end;
  }

  > .foodImage{
    align-self: center;
    >img {
      width: 100%;
      max-width: 92px;
      height: auto;
      margin: 0 auto;
    }
  }

  > .foodName{
    align-self: center;
  }

  > p {
    color: ${({ theme }) => theme.COLORS_OTHERS.cake_200};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.6rem;
  }

  > button {
    padding: .4rem;
  }

  @media (min-width: 768px){
    min-height: 26rem;

    > .foodImage{
      >img {
        max-width: 146px;
      }
    }

    > .foodName{
      font-size: 1.8rem;
    }

    > p {
      font-size: 1.8rem;
    }
  }
`

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  > p {
    color: ${({ theme }) => theme.COLORS_LIGHT.light_300};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.6rem;
  }
`