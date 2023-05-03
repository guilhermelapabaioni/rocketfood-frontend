import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_1000};
  color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  padding: .8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 0.4rem;

  > p {
    font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;
  }
`