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
        justify-content: center;
        gap: .6rem;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 8vw;
    padding-bottom: 16vh;

    > a {
      margin-top: 0;
      margin-bottom: 2rem;
      margin-left: .2rem;
      font-size: 2.4rem;
    }

    > .form {
      gap: 2rem;
      > .header-grid{
        gap: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }

      > .main-grid {
        gap: 4rem;
        display: grid;
        grid-template-columns: 3fr 1fr;
        align-items: center;
      }
    }
  }
`

export const FoodItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;

  > .ingredients {
    display: flex;
    flex-wrap: wrap;
    gap: .2rem;
    background: ${({ theme }) => theme.COLORS_DARK.dark_900};
    padding: .4rem;
    border-radius: .4rem;
  }

  @media (min-width: 768px){
    overflow-x: auto;
    position: relative;

    > label {
      position: fixed;
    }

    > div {
      margin-top: 20px;
      flex-wrap: nowrap;
      width: calc(100% + max-content);
      gap: .6rem;
   }
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

  > .buttonDelete{
    background: ${({ theme }) => theme.COLORS_DARK.dark_800};
  }

  @media (min-width: 768px){
    justify-content: end;

    > button {
      width: 20rem;
    }
  }
`