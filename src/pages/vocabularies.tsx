import { Header } from 'semantic-ui-react';
import PreviewVocabulary from '../components/previewVocabulary';
import { useVocabulariesQuery } from '../generated/graphql';

function Vocabularies() {
  const { data, loading } = useVocabulariesQuery();

  return (
    <>
      <Header as="h1">Vocabularies</Header>
      {!loading ? (
        data?.vocabularies.length ? (
          data.vocabularies.map((voc, i) => <PreviewVocabulary key={i} {...voc} />)
        ) : (
          <h2>No Vocabularies</h2>
        )
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default Vocabularies;
