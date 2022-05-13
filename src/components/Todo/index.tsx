import { Trash } from 'phosphor-react';
import { TodoItem as TodoItemType, removeTodo } from 'redux/slicers/todoSlicer';

import { useDispatch } from 'redux/store';
import { theme } from 'utils/theme';

import { TodoItem } from './styles';

interface TodoProps {
  todo: TodoItemType;
}

export function Todo({ todo }: TodoProps) {
  const dispatch = useDispatch();

  return (
    <TodoItem>
      <span>{todo.title}</span>

      <button type="button" onClick={() => dispatch(removeTodo(todo))}>
        <Trash color={theme.colors.red} />
      </button>
    </TodoItem>
  );
}
