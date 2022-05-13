import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 8px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;
