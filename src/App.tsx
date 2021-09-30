import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import NavBar from './components/navbar';
import Todo from './pages/todo';
import Todos from './pages/todos';

function App() {
  return (
    <Router>
      <NavBar />
      <Grid centered>
        <Grid.Column largeScreen={8} mobile={14}>
          <Switch>
            <Route exact path="/" component={Todos} />
            <Route path="/:id" component={Todo} />
          </Switch>
        </Grid.Column>
      </Grid>
    </Router>
  );
}

export default App;
