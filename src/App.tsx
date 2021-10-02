import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import NavBar from './components/navbar';
import Vocabulary from './pages/vocabulary';
import Vocabularies from './pages/vocabularies';

function App() {
  return (
    <Router>
      <NavBar />
      <Grid centered>
        <Grid.Column largeScreen={8} mobile={14}>
          <Switch>
            <Route exact path="/" component={Vocabularies} />
            <Route path="/:en" component={Vocabulary} />
          </Switch>
        </Grid.Column>
      </Grid>
    </Router>
  );
}

export default App;
