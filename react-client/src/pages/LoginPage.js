
import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import '../css/login.css';
function LoginPage() {
    const [token, setToken] = useToken();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const onLoginClick = async () => {
        const response = await axios.post('/api/login', {
            email: emailValue,
            password: passwordValue
        });
        const { token } = response.data;
        setToken(token);
        history.push('/');
    }
    return (
        <div className='signin-container'>
            <main className="form-signin">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => { setEmailValue(e.target.value) }}
                        placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => { setPasswordValue(e.target.value) }}
                        placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                    className="w-100 btn btn-lg btn-primary"
                    onClick={onLoginClick}
                >Sign in</button>
                <hr />
                <Link to="/signup">Don't have an account? Sign Up</Link>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </main>
        </div>
    );
}

export default LoginPage;