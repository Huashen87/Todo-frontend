import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Header, Segment } from 'semantic-ui-react';
import { useToggleVocabularyMarkMutation } from '../generated/graphql';

interface PreviewVocabularyProps {
  en: string;
  ch: string;
  isMarked: boolean;
}

function PreviewVocabulary({ en, ch, isMarked }: PreviewVocabularyProps) {
  const [done, setDone] = useState<boolean>(isMarked);
  const [toggleVoc] = useToggleVocabularyMarkMutation({ variables: { en } });

  const handleOnClick = () => {
    toggleVoc();
    setDone(!done);
  };

  return (
    <Segment.Group horizontal>
      <Segment padded as={Link} to={`/${en}`}>
        <Header as="h2" className="ch" color={done ? 'green' : 'red'}>
          {en}
        </Header>
        <Header as="h2" className="ch" color={done ? 'green' : 'red'}>
          {ch}
        </Header>
      </Segment>
      <Checkbox className="check-box" defaultChecked={isMarked} onClick={handleOnClick} />
    </Segment.Group>
  );
}

export default PreviewVocabulary;
