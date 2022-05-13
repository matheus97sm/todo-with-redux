import styled from 'styled-components';

import { theme } from 'utils/theme';

interface ContainerProps {
  minHeight?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  max-width: 1050px;
  margin: 0 auto;
  min-height: ${(props) => props.minHeight && 'calc(100vh - 135px)'};
`;

export const PageTitle = styled.h1`
  margin: 32px 0;

  color: ${theme.colors.text_color.main};
  text-align: center;
`;

export const TodoWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
