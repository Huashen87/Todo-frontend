import { useParams } from 'react-router';
import { Header, Loader, Segment, SegmentGroup } from 'semantic-ui-react';
import { useTodoQuery } from '../generated/graphql';

function Todo() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useTodoQuery({ variables: { id } });
  const todo = data?.todo;

  return !loading ? (
    todo ? (
      <TodoContent {...todo} />
    ) : (
      <h1>Not Found</h1>
    )
  ) : (
    <Loader>Loading</Loader>
  );
}

function TodoContent(todo: {
  __typename?: 'Todo' | undefined;
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  createAt: any;
  updateAt: any;
}) {
  return (
    <>
      <Header size="huge" textAlign="center">
        {todo.id}
      </Header>
      <SegmentGroup>
        <Segment size="big" secondary>
          {todo.content}
        </Segment>
        <Segment size="tiny" secondary>
          上次更新於 : {new Date(todo.updateAt).toLocaleString()}
        </Segment>
      </SegmentGroup>
    </>
  );
}

export default Todo;
