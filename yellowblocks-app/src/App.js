import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './containers/Landing';
import StudentProfile from './containers/StudentProfile';
import EvaluationLog from './containers/EvaluationLog';
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
        <Route exact path="/student">
          <StudentProfile />
        </Route>
        <Route exact path="/student/evaluations">
          <EvaluationLog />
        </Route>
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
