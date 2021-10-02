import { useParams } from 'react-router';
import { Header, Loader, Segment, SegmentGroup } from 'semantic-ui-react';
import { useVocabularyQuery } from '../generated/graphql';

function Vocabulary() {
  const { en } = useParams<{ en: string }>();
  const { data, loading } = useVocabularyQuery({ variables: { en } });
  const voc = data?.vocabulary;

  return !loading ? (
    voc ? (
      <VocabularyContent {...voc} />
    ) : (
      <h1>Not Found</h1>
    )
  ) : (
    <Loader>Loading</Loader>
  );
}

function VocabularyContent(voc: {
  __typename?: 'Vocabulary' | undefined;
  en: string;
  ch: string;
  sentence: string;
  isMarked: boolean;
  counter: number;
  createAt: any;
  updateAt: any;
}) {
  return (
    <>
      <Header size="huge" textAlign="center">
        {voc.en}
      </Header>
      <SegmentGroup>
        <Segment size="huge" secondary>
          {voc.ch}
        </Segment>
        <Segment size="big" secondary>
          {voc.sentence}
        </Segment>
        <Segment size="tiny" secondary>
          上次更新於 : {new Date(voc.updateAt).toLocaleString()}
        </Segment>
      </SegmentGroup>
    </>
  );
}

export default Vocabulary;
