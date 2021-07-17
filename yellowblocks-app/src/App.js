import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import Context, { AppContext } from './utils/context'
function App() {
  const context = Context()
  return (
    <AppContext.Provider value={context}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
