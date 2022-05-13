import { Link } from 'react-router-dom';

import { Container } from 'styles/components';
import { HeaderWrapper, MenuWrapper } from './styles';

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <strong>To-do</strong>

        <nav>
          <MenuWrapper>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list-todos">List Todos</Link>
            </li>
          </MenuWrapper>
        </nav>
      </Container>
    </HeaderWrapper>
  );
}
