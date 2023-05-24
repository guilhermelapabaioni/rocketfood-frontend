import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.COLORS_DARK.dark_700};
  padding: 4rem;

  border-radius: .4rem;
  box-shadow:  0px 0px 12px 2px ${({ theme }) => theme.COLORS_LIGHT.light_100};

  > p {
    width: 100%;
    margin-bottom: 2rem;

    color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.8rem;
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 2rem;

    > button:nth-child(2) {
      background-color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
    }
  }
`