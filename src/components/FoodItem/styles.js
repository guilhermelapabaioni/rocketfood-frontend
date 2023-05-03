import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS_LIGHT.light_600};
  color: ${({ theme, isNew }) => isNew ? `transparent` : theme.COLORS_LIGHT.light_100};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS_LIGHT.light_500}` : 'none'};
  
  padding: .4rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  > button {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
  }

  > .button-add {
    color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
  }

  > .button-delete {
    color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  }

  > input {
    width: auto;
    max-width: 7rem;
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
      text-align: left;
    }
  }
`;
