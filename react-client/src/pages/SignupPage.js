
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import '../css/login.css';

function SignupPage() {
    const [token, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        history.push('/');
    }
    return (
        <div className='signin-container'>
            <main className="form-signin">
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    {errorMessage && <div className="fail">{errorMessage}</div>}
                    <div className="form-floating">
                        <input
                            value={emailValue}
                            onChange={e => setEmailValue(e.target.value)}
                            type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                            value={passwordValue}
                            onChange={e => setPasswordValue(e.target.value)}
                            className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                            value={confirmPasswordValue}
                            onChange={e => setConfirmPasswordValue(e.target.value)}
                            className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>
                    <button
                        disabled={
                            !emailValue || !passwordValue ||
                            passwordValue !== confirmPasswordValue
                        }
                        onClick={onSignUpClicked}
                        className="w-100 btn btn-lg btn-primary">Sign UP</button>
                    <hr/>
                    <Link to="/login">Aready have an account? Login</Link>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </main>
        </div>
    );
}

export default SignupPage;