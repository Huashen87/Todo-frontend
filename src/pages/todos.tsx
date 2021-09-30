import { Header } from 'semantic-ui-react';
import PreviewTodo from '../components/previewTodo';
import { useTodosQuery } from '../generated/graphql';

function Todos() {
  const { data, loading } = useTodosQuery();

  return (
    <>
      <Header as="h1">Todos</Header>
      {!loading ? (
        data?.todos.length ? (
          data.todos.map((todo, i) => <PreviewTodo key={i} {...todo} />)
        ) : (
          <h2>No Todos</h2>
        )
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default Todos;
