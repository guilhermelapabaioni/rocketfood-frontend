import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  `

export const Content = styled.div`
  overflow-y: auto;
  height: 100vh;
  padding-block: 8rem;
  padding-inline: 1.2rem;

  > a {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    
    font-size:1.6rem;
  }

  > .form {
    gap: 1rem;
    padding: 0;

    > .group {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > .items-group{
        display: flex;
        flex-direction: column;
        gap: .6rem;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 8vw;
    padding-bottom: 30vh;

    > a {
      margin-top: 0;
      margin-bottom: 2rem;
      margin-left: .2rem;
      font-size: 2.4rem;
    }

    > .form {
      gap: 2rem;
      > .header-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      > .main-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
      }
    }
  }
`

export const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: .6rem;
    background: ${({ theme }) => theme.COLORS_DARK.dark_900};
    padding: .6rem;
    border-radius: .4rem;
  }
`

export const FormButtons = styled.div`
  margin-top: 1.4rem;
  display: flex;
  gap: 1rem;

  > button {
    padding: .8rem;
    background-color: ${({ theme }) => theme.COLORS_OTHERS.tomato_400};
  }

  @media (min-width: 768px){
    justify-content: end;

    > button {
      width: 20%;
    }
  }
`