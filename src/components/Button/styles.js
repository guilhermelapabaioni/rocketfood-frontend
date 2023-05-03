import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS_OTHERS.tomato_200};
  color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  border: none;
  border-radius: .5rem;

  padding: 1.6rem;

  font-family: ${({ theme }) => theme.FONTS_FAMILY.poppins};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`