import styled from 'styled-components';
import { theme } from 'utils/theme';

export const TodoItem = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;

  span {
    padding: 6px 16px;
    flex: 1;

    box-shadow: ${theme.styles.shadow};

    font-size: 14px;
  }
`;
