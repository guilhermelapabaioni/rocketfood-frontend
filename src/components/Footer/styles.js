import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding: .6rem;
  z-index: 2;

  background-color: ${({ theme }) => theme.COLORS_DARK.dark_600};

  display: flex;
  align-items: center;
  text-align: center;

  > div {
    width: 70%;
    display: flex;
    align-items: center;
    text-align: center;
    gap: .6rem;

    > h2 {
      color: ${({ theme }) => theme.COLORS_LIGHT.light_700};
      font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
  }

  > p {
    width: 100%;
    color: ${({ theme }) => theme.COLORS_LIGHT.light_200};
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1rem;
    text-align: right;
  }
`