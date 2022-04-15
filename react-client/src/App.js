import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact><LoginPage /></Route>
          <Route path='/signup' exact><SignupPage /></Route>
        </Switch>
        <PrivateRoute path="/">
          <Route path='/' exact><HomePage /></Route>
        </PrivateRoute>
      </BrowserRouter>
    </>
  );
}

export default App;
