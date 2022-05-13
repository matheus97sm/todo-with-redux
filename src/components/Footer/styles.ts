import styled from 'styled-components';
import { theme } from 'utils/theme';

export const FooterWrapper = styled.footer`
  width: 100%;

  p {
    color: ${theme.colors.text_color.main};
    font-size: 12px;
    text-align: center;
  }
`;
