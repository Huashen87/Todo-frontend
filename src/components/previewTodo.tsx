import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Header, Segment } from 'semantic-ui-react';
import { useToggleTodoMutation } from '../generated/graphql';

interface PreviewTodoProps {
  id: string;
  title: string;
  isDone: boolean;
}

function PreviewTodo({ id, title, isDone }: PreviewTodoProps) {
  const [done, setDone] = useState<boolean>(isDone);
  const [toggleTodo] = useToggleTodoMutation({ variables: { id } });

  const handleOnClick = () => {
    toggleTodo();
    setDone(!done);
  };

  return (
    <Segment.Group horizontal>
      <Segment padded as={Link} to={`/${id}`}>
        <Header as="h2" className="title" color={done ? 'green' : 'red'}>
          {title}
        </Header>
      </Segment>
      <Checkbox className="check-box" defaultChecked={isDone} onClick={handleOnClick} />
    </Segment.Group>
  );
}

export default PreviewTodo;
