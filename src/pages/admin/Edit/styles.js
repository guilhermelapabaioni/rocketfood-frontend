import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  `

export const Content = styled.div`
  overflow-y: auto;
  height: 100vh;

  padding-block: 7rem;
  padding-inline: 1.2rem;

  > a {
    margin-top: 1.6rem;
    margin-bottom: 1rem;

    font-size:1.6rem;
  }

  > .form {
    gap: .6rem;
    padding: 0;

    > .items-group{
      display: flex;
      flex-direction: column;
      gap: .6rem;
    }

    > .foodItem {
      > div {
        display: flex;
        flex-wrap: wrap;
        gap: .2rem;
        background: ${({ theme }) => theme.COLORS_DARK.dark_900};
        padding: .6rem;
        border-radius: .4rem;
      }
    }

    > .buttons {
      display: flex;
      gap: 1rem;
      margin-top: .4rem;

      > button {
        padding: .8rem;
      }

      > button:nth-child(1){
        background-color: ${({ theme }) => theme.COLORS_DARK.dark_800};
      }

      > button:nth-child(2){
        background-color: ${({ theme }) => theme.COLORS_OTHERS.tomato_400};
      }
    }
  }
  
`