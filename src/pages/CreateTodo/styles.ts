import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Form = styled.form`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  gap: 8px;

  input {
    flex: 1;
  }

  input {
    padding: 8px 16px;

    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: ${theme.styles.shadow};

    color: ${theme.colors.text_color.main};

    &:focus {
      border-color: ${theme.colors.green};
      outline: none;
    }

    &::placeholder {
      opacity: 0.5;
    }
  }

  button {
    padding: 8px 16px;

    background-color: ${theme.colors.green};
    border-radius: 4px;
    box-shadow: ${theme.styles.shadow};

    color: ${theme.colors.text_color.secondary};

    &:focus {
      border-color: ${theme.colors.green};
    }
  }
`;
