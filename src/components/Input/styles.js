import styled, { keyframes, css } from "styled-components";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS_DARK.dark_900};

  width: 100%;
  padding: .4rem;

  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  gap: .2rem;

  > svg {
    color: ${({ theme }) => theme.COLORS_LIGHT.light_400};
    margin-left: .6rem;
  }

  /* Estilo do input com erro */
  ${({ error }) =>
    error &&
    css`
      border: solid 2px red;
      animation: ${shakeAnimation} 0.5s;
    `}
`

export const InputField = styled.input`
  background: none;

  width: 100%;
  padding: .4rem;

  border: none;

  font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
  color: ${({ theme }) => theme.COLORS_LIGHT.light_100};
  font-size: 1.6rem;

  &::placeholder{
    font-family: ${({ theme }) => theme.FONTS_FAMILY.roboto};
    color: ${({ theme }) => theme.COLORS_LIGHT.light_500};
    font-size: 1.4rem;
  }

  &[type="file"], ::-webkit-file-upload-button{
    opacity: 0;
    padding: .14rem;
  }

  /* &[type="file"]::-webkit-file-upload-button{
    display: none;
  } */

  &[type="file"]:hover{
    opacity: 0.8;
  }
`