import { useSelector, useDispatch } from 'redux/store';
import { Trash } from 'phosphor-react';

import { Todo } from 'components/Todo';

import { TodoState, clearTodos } from 'redux/slicers/todoSlicer';

import { Container, PageTitle, TodoWrapper } from 'styles/components';
import { theme } from 'utils/theme';
import { Header } from './styles';

export function ListTodos() {
  const { todos } = useSelector((state) => state as TodoState);
  const dispatch = useDispatch();

  return (
    <Container minHeight>
      <PageTitle>List Todos</PageTitle>

      <Header>
        {todos.length > 0 && (
          <button type="button" onClick={() => dispatch(clearTodos())}>
            <span>Clear list</span>
            <Trash color={theme.colors.text_color.secondary} />
          </button>
        )}
      </Header>

      <TodoWrapper>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoWrapper>
    </Container>
  );
}
