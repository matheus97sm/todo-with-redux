import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from 'components/Todo';

import { useSelector, useDispatch } from 'redux/store';
import { addTodo, TodoState } from 'redux/slicers/todoSlicer';
import { Container, PageTitle, TodoWrapper } from 'styles/components';

import { Form } from './styles';

export function CreateTodo() {
  const [todoContent, setTodoContent] = useState<string>('');
  const { todos } = useSelector((state) => state as TodoState);
  const dispatch = useDispatch();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (!todoContent) return;

    dispatch(
      addTodo({
        id: uuidv4(),
        title: todoContent,
      })
    );
  }

  return (
    <Container minHeight>
      <PageTitle>Create Todo</PageTitle>

      <Form onSubmit={(event) => handleFormSubmit(event)}>
        <input
          type="text"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="What do you need to do?"
        />

        <button type="submit">Add todo</button>
      </Form>

      <TodoWrapper>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoWrapper>
    </Container>
  );
}
