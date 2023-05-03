import styled from "styled-components";

export const Container = styled.textarea`
  background: ${({ theme }) => theme.COLORS_DARK.dark_900};
  border: none;
  border-radius: .4rem;
  padding: .6rem 1rem;

  resize: none;

  font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
  color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  font-size: 1.6rem;

  &::placeholder{
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
    font-size: 1.4rem;
  }
`