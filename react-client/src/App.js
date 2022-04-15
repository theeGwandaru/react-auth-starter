import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Route path=''><HomePage /></Route>
          </PrivateRoute>
          <Route path='/login'><LoginPage/></Route>
          <Route path='/signup'><SignupPage/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
