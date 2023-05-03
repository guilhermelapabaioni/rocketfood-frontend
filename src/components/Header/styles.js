import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_700};

  padding: 2rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 1;

  > button {
    display: block;
    background: none;
    border: none;

    > p {
      display: none;
    }
  }

  > .search {
    display: none;
  }
  

  @media (min-width: 768px) {
    gap: 2rem;

    .menu {
      display: none;
    }

    .search {
      display: flex;

      background-color: ${({ theme }) => theme.COLORS_DARK.dark_900};

      padding: .6rem;
      width: clamp(32rem, 45vw, 112rem);

      border-radius: 0.4rem;

      display: flex;
      align-items: center;
      gap: .2rem;

      > svg {
        color: ${({ theme }) => theme.COLORS_LIGHT.light_400};
      }

      > input {
        background: none;

        width: 100%;
        padding: .4rem;

        border: none;

        color: ${({ theme }) => theme.COLORS_LIGHT.light_100};

        > &::placeholder{
          color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
        }
      }
    }

    > .requests{
      background: ${({ theme }) => theme.COLORS_OTHERS.tomato_100};
      padding: 1rem 3.6rem;

      display: flex;
      align-items: center;
      gap: 1rem;

      border-radius: .2rem;

      > p {
        display: block;
        color: ${({theme}) => theme.COLORS_LIGHT.light_100};
        font-family: ${({theme}) => theme.FONTS_FAMILY.poppins};
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
    }
  }
`