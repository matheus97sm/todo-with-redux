import styled from 'styled-components';
import { theme } from 'utils/theme';

export const Header = styled.header`
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-end;

  button {
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    background-color: ${theme.colors.red};
    border-radius: 4px;

    span {
      color: ${theme.colors.text_color.secondary};
    }
  }
`;
