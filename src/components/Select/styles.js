import styled from "styled-components";

export const Container = styled.select`
  background: ${({ theme }) => theme.COLORS_DARK.dark_900};
  color: ${({ theme }) => theme.COLORS_LIGHT.light_400};
  padding: 1rem;

  border: none;
  border-radius: .4rem;

  option:first-child {
    display: none;
  }
`