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
    margin-bottom: .6rem;
    
    font-size:1.6rem;
  }

  > .form {
    gap: 1rem;
    padding: 0;

    > .items-group{
      display: flex;
      flex-direction: column;
      gap: .6rem;

      > input[type="file"]::before{
        
      }
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
  }

  > .buttons {
    margin-top: 1.4rem;
    display: flex;
    gap: 1rem;

    > button {
      padding: .8rem;
      background-color: ${({ theme }) => theme.COLORS_OTHERS.tomato_400};
    }
  }
`