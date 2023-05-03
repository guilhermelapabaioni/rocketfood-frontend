import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_400};

  width: 100%;
  height: 100vh;

  > form {
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 2rem;
    > .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      > h2{
        display: none;
      }

      > div{
        display: flex;
        flex-direction: column;
        gap: .4rem;
      }

      > * label {
        font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS_LIGHT.light_400};

        margin-top: 1rem;
        margin-left: .4rem;
      }

      > a {
        text-decoration: none;
        justify-content: center;
      }

    }
  }

  @media screen and (min-width: 768px) {
    > form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      > .content{
        background-color: ${({ theme }) => theme.COLORS_DARK.dark_700};
        width: clamp(32rem, 75vw, 48rem);
        height: min-content;
        padding: 6.4rem;
        gap: 3.2rem;
        align-self: center;

        border-radius: .6rem;

        > h2{
          display: block;
          font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
          font-size: 3.2rem;
          line-height: 140%;
          color: ${({ theme }) => theme.COLORS_LIGHT.light_100};

          padding-block: 2rem;
          text-align: center;
        }
      }
    }
  }
`